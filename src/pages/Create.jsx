
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Heart,
    ArrowLeft,
    ArrowRight,
    User,
    MessageCircle,
    Palette,
    Check,
} from "lucide-react";

function Create() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const [isGenerating, setIsGenerating] = useState(false);

    const [form, setForm] = useState({
        name: "",
        relationship: "",
        situation: "",
        language: "Hinglish",
        customLanguage: "",
        writingStyle: "WhatsApp Casual",
        tone: "Cute & Sweet",
        customMessage: "",
        theme: "Pastel Pink",
        themeDescription: "",
    });

    const updateForm = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const relationships = [
        "Best Friend",
        "Girlfriend",
        "Boyfriend",
        "Sister",
        "Brother",
        "Family",
        "Other",
    ];

    const tones = [
        "Cute & Sweet",
        "Emotional",
        "Funny",
        "Romantic",
        "Heartfelt",
        "Playful",
    ];

    const languages = [
        "English",
        "Hindi",
        "Hinglish",
        "Punjabi",
        "Urdu",
        "Bengali",
        "Tamil",
        "Telugu",
        "Marathi",
        "Custom",
    ];

    const writingStyles = [
        "WhatsApp Casual",
        "Gen Z",
        "Romantic",
        "Emotional",
        "Funny",
        "Respectful",
        "Formal",
    ];
    const themes = [
        "Pastel Pink",
        "Dreamy Lavender",
        "Blue Sky",
        "Kawaii Teddy",
        "Scrapbook",
    ];

    const nextStep = () => {
        if (step === 1 && (!form.name.trim() || !form.relationship)) {
            alert("Please enter their name and relationship!");
            return;
        }

        if (step === 2 && !form.situation.trim()) {
            alert("Please tell us what happened!");
            return;
        }

        setStep((prev) => Math.min(prev + 1, 3));
    };

    const previousStep = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    // Navigate to personalized apology preview
    
const handleSubmit = async (e) => {
  e.preventDefault();

  if (isGenerating) return;

  if (
    form.language === "Custom" &&
    !form.customLanguage.trim()
  ) {
    alert("Please enter your preferred language!");
    return;
  }

  setIsGenerating(true);

  try {
    const response = await fetch(
      "http://localhost:5000/api/generate-apology",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Unable to generate your apology."
      );
    }

    if (!data.message) {
      throw new Error("The AI returned an empty apology.");
    }

    navigate("/preview", {
      state: {
        ...form,
        apologyMessage: data.message,
      },
    });

  } catch (error) {
    console.error("Apology generation error:", error);

    alert(
      error.message ||
      "Something went wrong. Please try again."
    );

  } finally {
    setIsGenerating(false);
  }
};


    const inputClass =
        "w-full rounded-2xl border border-pink-100 bg-white px-5 py-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition text-gray-700";

    const selectedClass =
        "border-[#e875a3] bg-pink-50 text-[#d65d91]";

    return (
        <div className="min-h-screen bg-[#fff9fc] px-5 py-10 md:py-16">

            {/* Header */}
            <div className="max-w-3xl mx-auto">

                <Link
                    to="/"
                    className="text-[#e875a3] font-bold text-2xl"
                >
                    SoCute.
                </Link>

                <div className="text-center mt-10">
                    <div className="text-5xl mb-4">💌</div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#39283b]">
                        Let's make it special.
                    </h1>

                    <p className="text-gray-500 mt-3">
                        A few details, a little creativity and lots of love.
                    </p>
                </div>

                {/* Progress */}
                <div className="flex items-center justify-between mt-12 mb-3">

                    {["The person", "The situation", "The aesthetic"].map(
                        (item, i) => (
                            <div key={item} className="text-center flex-1">

                                <div
                                    className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= i + 1
                                            ? "bg-[#e875a3] text-white"
                                            : "bg-pink-100 text-pink-400"
                                        }`}
                                >
                                    {step > i + 1 ? (
                                        <Check size={19} />
                                    ) : (
                                        i + 1
                                    )}
                                </div>

                                <p className="text-xs md:text-sm mt-2 text-gray-500 font-medium">
                                    {item}
                                </p>

                            </div>
                        )
                    )}

                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-pink-100 rounded-full overflow-hidden">

                    <div
                        className="h-full bg-[#e875a3] rounded-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white mt-9 rounded-[2rem] shadow-xl shadow-pink-100/60 border border-pink-100 p-6 md:p-10"
                >

                    {/* STEP 1: PERSON */}
                    {step === 1 && (
                        <div>

                            <div className="flex items-center gap-3 mb-7">

                                <User className="text-[#e875a3]" size={27} />

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Who's the lucky person?
                                    </h2>

                                    <p className="text-gray-400 text-sm">
                                        Let's personalize this apology.
                                    </p>
                                </div>

                            </div>

                            <label className="block font-semibold mb-3">
                                Their name *
                            </label>

                            <input
                                className={inputClass}
                                placeholder="Enter their name..."
                                value={form.name}
                                onChange={(e) =>
                                    updateForm("name", e.target.value)
                                }
                                required
                            />

                            <label className="block font-semibold mt-7 mb-3">
                                Your relationship *
                            </label>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                {relationships.map((item) => (
                                    <button
                                        type="button"
                                        key={item}
                                        onClick={() =>
                                            updateForm("relationship", item)
                                        }
                                        className={`p-4 rounded-2xl border font-medium transition ${form.relationship === item
                                                ? selectedClass
                                                : "border-pink-100 hover:border-pink-300"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* STEP 2: SITUATION */}
                    {step === 2 && (
                        <div>

                            <div className="flex items-center gap-3 mb-7">

                                <MessageCircle
                                    className="text-[#e875a3]"
                                    size={27}
                                />

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Tell us what happened.
                                    </h2>

                                    <p className="text-gray-400 text-sm">
                                        Honesty makes an apology meaningful.
                                    </p>
                                </div>

                            </div>

                            <label className="block font-semibold mb-3">
                                Describe the situation *
                            </label>

                            <textarea
                                className={`${inputClass} min-h-36 resize-y`}
                                placeholder="I forgot their birthday, said something hurtful, or maybe we had an argument..."
                                value={form.situation}
                                onChange={(e) =>
                                    updateForm("situation", e.target.value)
                                }
                                required
                            />

                            {/* LANGUAGE SELECTION */}

                            <label className="block font-semibold mt-7 mb-3">
                                Which language should we use? 🌍
                            </label>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {languages.map((language) => (
                                    <button
                                        type="button"
                                        key={language}
                                        onClick={() => updateForm("language", language)}
                                        className={`p-4 rounded-2xl border font-medium transition ${form.language === language
                                                ? selectedClass
                                                : "border-pink-100 hover:border-pink-300"
                                            }`}
                                    >
                                        {language === "English" && "🇬🇧 "}
                                        {language === "Hindi" && "🇮🇳 "}
                                        {language === "Hinglish" && "💬 "}
                                        {language === "Punjabi" && "🌸 "}
                                        {language === "Urdu" && "✨ "}
                                        {language === "Bengali" && "🌺 "}
                                        {language === "Tamil" && "🌼 "}
                                        {language === "Telugu" && "🌷 "}
                                        {language === "Marathi" && "🌻 "}
                                        {language === "Custom" && "✍️ "}
                                        {language}
                                    </button>
                                ))}
                            </div>

                            {form.language === "Custom" && (
                                <div className="mt-5">
                                    <label className="block font-semibold mb-3">
                                        Enter your preferred language
                                    </label>

                                    <input
                                        className={inputClass}
                                        placeholder="e.g. French, German, Japanese..."
                                        value={form.customLanguage}
                                        onChange={(e) =>
                                            updateForm("customLanguage", e.target.value)
                                        }
                                    />
                                </div>
                            )}

                            {/* WRITING STYLE */}

                            <label className="block font-semibold mt-8 mb-3">
                                How should the message sound? 💬
                            </label>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {writingStyles.map((style) => (
                                    <button
                                        type="button"
                                        key={style}
                                        onClick={() => updateForm("writingStyle", style)}
                                        className={`p-4 rounded-2xl border font-medium transition ${form.writingStyle === style
                                                ? selectedClass
                                                : "border-pink-100 hover:border-pink-300"
                                            }`}
                                    >
                                        {style}
                                    </button>
                                ))}
                            </div>


                            <label className="block font-semibold mt-7 mb-3">
                                What kind of apology should it be?
                            </label>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                {tones.map((tone) => (
                                    <button
                                        type="button"
                                        key={tone}
                                        onClick={() =>
                                            updateForm("tone", tone)
                                        }
                                        className={`p-4 rounded-2xl border font-medium transition ${form.tone === tone
                                                ? selectedClass
                                                : "border-pink-100 hover:border-pink-300"
                                            }`}
                                    >
                                        {tone}
                                    </button>
                                ))}

                            </div>

                            <label className="block font-semibold mt-7 mb-3">
                                Anything you'd like to say personally? (Optional)
                            </label>

                            <textarea
                                className={`${inputClass} min-h-28 resize-y`}
                                placeholder="Write your own heartfelt message..."
                                value={form.customMessage}
                                onChange={(e) =>
                                    updateForm("customMessage", e.target.value)
                                }
                            />

                        </div>
                    )}

                    {/* STEP 3: AESTHETIC */}
                    {step === 3 && (
                        <div>

                            <div className="flex items-center gap-3 mb-7">

                                <Palette
                                    className="text-[#e875a3]"
                                    size={27}
                                />

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Design your little world.
                                    </h2>

                                    <p className="text-gray-400 text-sm">
                                        Choose a theme or describe your imagination.
                                    </p>
                                </div>

                            </div>

                            <label className="block font-semibold mb-4">
                                Choose a starting theme
                            </label>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                                {themes.map((theme, i) => (
                                    <button
                                        type="button"
                                        key={theme}
                                        onClick={() =>
                                            updateForm("theme", theme)
                                        }
                                        className={`p-5 rounded-2xl border text-center transition ${form.theme === theme
                                                ? selectedClass
                                                : "border-pink-100 hover:border-pink-300"
                                            }`}
                                    >

                                        <div className="text-3xl mb-2">
                                            {["🌸", "💜", "☁️", "🧸", "📒"][i]}
                                        </div>

                                        <span className="text-sm font-semibold">
                                            {theme}
                                        </span>

                                    </button>
                                ))}

                            </div>

                            <label className="block font-semibold mt-8 mb-3">
                                Describe your dream design
                            </label>

                            <textarea
                                className={`${inputClass} min-h-32 resize-y`}
                                placeholder="Example: Pink flowers, cute teddy bears, floating hearts, dreamy backgrounds and soft animations..."
                                value={form.themeDescription}
                                onChange={(e) =>
                                    updateForm("themeDescription", e.target.value)
                                }
                            />

                            <p className="text-xs text-gray-400 mt-3">
                                Describe any style you imagine. We'll use AI to
                                interpret it in a later development phase.
                            </p>

                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-10 pt-7 border-t border-pink-100">

                        <button
                            type="button"
                            onClick={previousStep}
                            disabled={step === 1}
                            className="flex items-center gap-2 px-5 py-3 rounded-full text-gray-500 hover:bg-pink-50 disabled:opacity-30"
                        >
                            <ArrowLeft size={18} />
                            Back
                        </button>

                        {step < 3 ? (

                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#e875a3] text-white font-bold hover:bg-[#d85b8c] transition shadow-lg shadow-pink-200"
                            >
                                Continue
                                <ArrowRight size={18} />
                            </button>

                        ) : (

                            
<button
  type="submit"
  disabled={isGenerating}
  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#e875a3] text-white font-bold hover:bg-[#d85b8c] transition shadow-lg shadow-pink-200 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {isGenerating ? (
    <>
      Generating your apology...
      <span className="animate-spin">💗</span>
    </>
  ) : (
    <>
      Generate Preview
      <Heart size={18} />
    </>
  )}
</button>


                        )}

                    </div>

                </form>

                <p className="text-center text-gray-400 text-sm mt-7">
                    Made with love on SoCute. 💗
                </p>

            </div>

        </div>
    );
}

export default Create;
