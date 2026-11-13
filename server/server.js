
import "dotenv/config";
import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

// Check Groq API key
if (!process.env.GROQ_API_KEY) {
  console.error("Groq API key is missing from server/.env");
  process.exit(1);
}

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "SoCute backend is running!",
  });
});

// Generate personalized apology
app.post("/api/generate-apology", async (req, res) => {
  try {
    const {
      name,
      relationship,
      situation,
      language,
      customLanguage,
      writingStyle,
      tone,
      customMessage,
    } = req.body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof relationship !== "string" ||
      typeof situation !== "string" ||
      !name.trim() ||
      !relationship.trim() ||
      !situation.trim()
    ) {
      return res.status(400).json({
        error:
          "Please provide the recipient name, relationship and situation.",
      });
    }

    // Validate field lengths
    if (
      name.length > 100 ||
      relationship.length > 50 ||
      situation.length > 2000 ||
      (customMessage !== undefined &&
        (typeof customMessage !== "string" ||
          customMessage.length > 1000))
    ) {
      return res.status(400).json({
        error: "One or more fields exceed the allowed length.",
      });
    }

    // Select language
    const selectedLanguage =
      language === "Custom" ? customLanguage : language;

    if (
      typeof selectedLanguage !== "string" ||
      !selectedLanguage.trim() ||
      selectedLanguage.length > 50
    ) {
      return res.status(400).json({
        error: "Please select or enter a valid language.",
      });
    }

    // Create personalized prompt
    const prompt = `
You are SoCute, an expert personalized apology message writer.

Generate a natural, personalized apology message using these details:

Recipient name: ${name}
Relationship: ${relationship}
Situation: ${situation}
Language: ${selectedLanguage}
Writing style: ${writingStyle || "WhatsApp Casual"}
Emotional tone: ${tone || "Cute & Sweet"}
Personal message: ${customMessage || "None"}

STRICT LANGUAGE RULES:

${
  selectedLanguage.toLowerCase() === "hinglish"
    ? `
- Write in NATURAL HINGLISH.
- Use Roman Hindi mixed with everyday English.
- At least 60-70% should be conversational Hindi written in English letters.
- Do NOT write entirely in English.
- Do NOT use Devanagari script.
- Use natural expressions like "yaar", "mujhe sach mein bura lag raha hai",
  "main genuinely sorry hoon", and "tu mere liye important hai".
`
    : `
- Write entirely in ${selectedLanguage}.
- Follow the normal writing script used for this language.
- Do not randomly switch to English.
`
}

WRITING STYLE:
- WhatsApp Casual: Sound like a real person texting a close friend.
- Use short, natural sentences.
- Avoid formal vocabulary and robotic expressions.
- Match the selected writing style: ${writingStyle || "WhatsApp Casual"}.

EMOTIONAL TONE:
Follow this selected tone: ${tone || "Cute & Sweet"}.

IMPORTANT:
1. Address the recipient by name.
2. Acknowledge the mistake.
3. Express genuine regret.
4. Include the personal message naturally if provided.
5. Do not invent facts.
6. Never pressure the recipient to forgive.
7. Return only the apology message.
8. Never make promises, commitments, or claims about future actions unless the user explicitly provides them.
`;

    // Generate apology using Groq
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content:
            "You are SoCute, a thoughtful and creative personalized apology writer. Follow the user's requested language, tone and style. Never pressure someone to forgive.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_completion_tokens: 1024,
      include_reasoning: false,
    });

    // Extract generated message
    const message =
      completion.choices[0]?.message?.content?.trim();

    if (!message) {
      console.error(
        "Groq response:",
        completion.choices[0]?.message
      );

      throw new Error("Groq returned an empty response.");
    }

    // Return generated apology
    return res.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error(
      "Apology generation failed:",
      error.message
    );

    return res.status(500).json({
      error:
        "Unable to generate your apology right now. Please try again.",
    });
  }
});

// Start server
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(
    `SoCute backend running at http://localhost:${PORT}`
  );
});
