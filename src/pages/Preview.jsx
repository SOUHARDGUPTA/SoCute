
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";

const themeStyles = {
  "Pastel Pink": {
    background: "from-pink-100 via-rose-50 to-pink-200",
    card: "bg-white/90",
    accent: "#e875a3",
    text: "#713b55",
    decoration: "🌸",
  },
  "Dreamy Lavender": {
    background: "from-purple-100 via-violet-50 to-purple-200",
    card: "bg-white/90",
    accent: "#9275d5",
    text: "#514078",
    decoration: "💜",
  },
  "Blue Sky": {
    background: "from-sky-100 via-blue-50 to-cyan-100",
    card: "bg-white/90",
    accent: "#399bd5",
    text: "#315875",
    decoration: "☁️",
  },
  "Kawaii Teddy": {
    background: "from-orange-100 via-amber-50 to-yellow-100",
    card: "bg-white/90",
    accent: "#d58c55",
    text: "#79502f",
    decoration: "🧸",
  },
  "Scrapbook": {
    background: "from-amber-100 via-orange-50 to-yellow-100",
    card: "bg-white/90",
    accent: "#b77945",
    text: "#69482e",
    decoration: "📒",
  },
};

function Preview() {
  const location = useLocation();
  const navigate = useNavigate();
  const [forgiven, setForgiven] = useState(false);

  const form = location.state;

  if (!form) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 text-center">
        <div className="text-6xl mb-4">💌</div>
        <h1 className="text-2xl font-bold text-gray-800">
          No apology found!
        </h1>
        <p className="text-gray-500 mt-2">
          Create your apology first.
        </p>
        <button
          onClick={() => navigate("/create")}
          className="mt-6 bg-pink-500 text-white px-7 py-3 rounded-full"
        >
          Create apology
        </button>
      </div>
    );
  }

  const theme = themeStyles[form.theme] || themeStyles["Pastel Pink"];

  
const apologyTemplates = {
  English: `I'm truly sorry about ${form.situation}. I understand that my actions may have hurt you. You mean a lot to me, and I hope we can make things right when you're ready. ❤️`,

  Hindi: `मुझे सच में माफ़ कर दो। ${form.situation} के लिए मुझे बहुत अफ़सोस है। मेरा इरादा तुम्हें दुख पहुँचाने का नहीं था। तुम मेरे लिए बहुत खास हो। ❤️`,

  Hinglish: `Yaar, ${form.situation} ke liye I'm genuinely sorry! 🥺 Mera intention tumhe hurt karne ka bilkul nahi tha. Tum mere liye bohot special ho. Please maan jao na! ❤️`,
};

const selectedLanguage =
  form.language === "Custom"
    ? form.customLanguage
    : form.language;

const apologyMessage =
  form.apologyMessage ||
  (form.customMessage || "").trim() ||
  apologyTemplates[form.language] ||
  `I'm truly sorry about ${form.situation}. You mean a lot to me. ❤️`;

  const handleNotYet = () => {
    alert("That's okay! Take your time. ❤️");
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background} p-5 md:p-10`}>

      {/* Preview toolbar */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-10">
        <button
          onClick={() => navigate("/create", { state: form })}
          className="flex items-center gap-2 bg-white/80 px-5 py-3 rounded-full text-gray-600 hover:bg-white transition"
        >
          <ArrowLeft size={18} />
          Edit details
        </button>

        <div className="text-sm font-semibold text-gray-600 flex items-center gap-2">
          <Sparkles size={17} />
          SoCute Preview
        </div>
      </div>

      {/* Apology website */}
      <div className="max-w-2xl mx-auto">

        <div className={`${theme.card} rounded-[2.5rem] shadow-2xl shadow-pink-300/30 border border-white p-7 md:p-12 text-center`}>

          <div className="flex justify-center gap-5 text-3xl mb-6">
            <span className="animate-bounce">💗</span>
            <span className="animate-pulse">{theme.decoration}</span>
            <span className="animate-bounce">✨</span>
          </div>

          <p
            className="uppercase tracking-[0.25em] text-xs font-bold"
            style={{ color: theme.accent }}
          >
            A special message for you
          </p>

          <div className="text-7xl my-7">
            {form.theme === "Kawaii Teddy" ? "🧸" : "💌"}
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: theme.accent }}
          >
            Hey, {form.name}! 🥺
          </h1>

          <p
            className="mt-3 font-medium"
            style={{ color: theme.text }}
          >
            Someone has something to tell you...
          </p>

          <div
            className="my-8 rounded-3xl p-6 md:p-8"
            style={{ backgroundColor: `${theme.accent}12` }}
          >
            <div className="text-3xl mb-4">🫶</div>

            <p
              className="text-lg leading-relaxed whitespace-pre-wrap"
              style={{ color: theme.text }}
            >
              {apologyMessage}
            </p>

            <div className="mt-6 text-sm font-semibold" style={{ color: theme.accent }}>
              With love, always. ❤️
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            {selectedLanguage} · {form.writingStyle} · {form.tone}
          </p>

          {!forgiven ? (
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <button
                onClick={() => setForgiven(true)}
                className="w-full py-4 rounded-full text-white font-bold shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: theme.accent }}
              >
                Okay, I forgive you ❤️
              </button>

              <button
                onClick={handleNotYet}
                className="w-full py-4 rounded-full bg-white border border-pink-200 font-semibold hover:bg-pink-50 transition"
                style={{ color: theme.accent }}
              >
                Not yet, I need time 🥺
              </button>
            </div>
          ) : (
            <div className="bg-pink-50 rounded-3xl p-6">
              <div className="text-5xl mb-3">🥹💗</div>
              <h2 className="text-2xl font-bold text-pink-600">
                Thank you!
              </h2>
              <p className="text-gray-600 mt-2">
                A little love makes everything better.
              </p>
            </div>
          )}

          <div className="mt-10 text-sm" style={{ color: theme.accent }}>
            Made with love on SoCute ✨
          </div>

        </div>

        {/* Personalization information */}
        <div className="text-center mt-7 text-sm text-gray-600">
          <p>Created especially for {form.name} 💗</p>
          <p className="mt-1">Theme: {form.theme}</p>
        </div>

      </div>
    </div>
  );
}

export default Preview;
