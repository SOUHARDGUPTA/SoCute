
import { Heart, Sparkles, WandSparkles, Palette, Link2, Download, ArrowRight, Stars } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-[#fff9fc] text-[#39283b]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <a href="#" className="text-3xl font-extrabold tracking-tight text-[#e66b9b]">
          SoCute<span className="text-[#f5a6c5]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-pink-500 transition">Features</a>
          <a href="#how-it-works" className="hover:text-pink-500 transition">How it works</a>
          <a href="#about" className="hover:text-pink-500 transition">About</a>
        </div>

        <a
          href="#create"
          className="rounded-full bg-[#e875a3] text-white px-6 py-3 text-sm font-semibold hover:bg-[#d85b8c] transition shadow-lg shadow-pink-200"
        >
          Create yours ❤️
        </a>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-16 py-20 md:py-28">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#d65d91] px-4 py-2 rounded-full text-sm font-semibold mb-7">
              <Sparkles size={16} />
              A little magic for your apologies
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Turn your
              <span className="block text-[#e875a3]">SORRY</span>
              into something
              <span className="block text-[#9b83d9]">beautiful.</span>
            </h1>

            <p className="mt-7 text-gray-600 text-lg leading-relaxed max-w-lg">
              Sometimes words aren't enough. Create a cute, personalized
              apology website with your own message, theme and a little
              bit of magic. 💗
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#create"
                className="flex items-center gap-3 bg-[#e875a3] hover:bg-[#d85b8c] text-white px-7 py-4 rounded-full font-bold shadow-xl shadow-pink-200 transition"
              >
                Create an apology
                <ArrowRight size={19} />
              </a>

              <a
                href="#how-it-works"
                className="px-7 py-4 rounded-full border border-pink-200 bg-white hover:bg-pink-50 font-semibold transition"
              >
                How it works
              </a>
            </div>

            <div className="flex items-center gap-3 mt-9 text-sm text-gray-500">
              <Heart size={17} className="text-pink-400 fill-pink-400" />
              Made with love, for someone special.
            </div>
          </div>

          {/* Preview card */}
          <div className="relative flex justify-center">
            <div className="absolute top-0 right-5 text-4xl animate-bounce">✨</div>
            <div className="absolute bottom-5 left-0 text-4xl">💗</div>

            <div className="w-full max-w-md bg-white rounded-[2rem] p-5 shadow-2xl shadow-pink-200/60 border border-pink-100 rotate-2 hover:rotate-0 transition duration-500">
              <div className="bg-[#fff0f6] rounded-[1.5rem] p-8 text-center">
                <div className="text-7xl mb-5">🧸</div>

                <p className="text-sm text-[#d36c96] font-semibold tracking-widest uppercase">
                  A special message for you
                </p>

                <h2 className="text-3xl font-extrabold mt-3 text-[#d75c8e]">
                  Hey, Bestie! 🥺
                </h2>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  I know I messed up, and I'm really sorry.
                  You mean a lot to me. Can we make things
                  right again? 💕
                </p>

                <div className="flex flex-col gap-3 mt-8">
                  <button className="bg-[#e875a3] text-white rounded-full py-3 font-bold shadow-lg shadow-pink-200">
                    Okay, I forgive you ❤️
                  </button>

                  <button className="bg-white text-[#d75c8e] rounded-full py-3 font-semibold border border-pink-200">
                    I need more hugs 🥺
                  </button>
                </div>

                <p className="text-xs text-pink-400 mt-7">
                  Made with love on SoCute ✨
                </p>
              </div>

              <div className="flex justify-between items-center px-3 pt-5 text-xs text-gray-400">
                <span>♡ A little apology page</span>
                <span>so cute!</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#e875a3] font-bold tracking-widest uppercase text-sm">
              The SoCute experience
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              More than just saying sorry.
            </h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              Give your apology a personal touch with beautiful designs,
              thoughtful messages and interactive surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-[#fff4f8] p-8 rounded-3xl border border-pink-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-pink-200 flex items-center justify-center text-[#d65d91]">
                <WandSparkles size={28} />
              </div>
              <h3 className="text-xl font-bold mt-6">AI Apology Writer</h3>
              <p className="text-gray-500 mt-3 leading-relaxed">
                Describe what happened and let AI help you write
                a thoughtful, personalized apology.
              </p>
            </div>

            <div className="bg-[#f6f2ff] p-8 rounded-3xl border border-purple-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-purple-200 flex items-center justify-center text-purple-600">
                <Palette size={28} />
              </div>
              <h3 className="text-xl font-bold mt-6">Custom Themes</h3>
              <p className="text-gray-500 mt-3 leading-relaxed">
                Create your own aesthetic with colors, illustrations,
                flowers, teddy bears and animations.
              </p>
            </div>

            <div className="bg-[#f0f8ff] p-8 rounded-3xl border border-blue-100 hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-200 flex items-center justify-center text-blue-600">
                <Link2 size={28} />
              </div>
              <h3 className="text-xl font-bold mt-6">Share Anywhere</h3>
              <p className="text-gray-500 mt-3 leading-relaxed">
                Generate a unique link or download your
                personalized apology website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 md:px-16 py-20 bg-[#fff9fc]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#e875a3] font-bold tracking-widest uppercase text-sm">
            Simple as 1, 2, 3
          </p>
          <h2 className="text-4xl font-extrabold mt-4">
            Your apology, your way.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              { icon: "✍️", title: "Tell your story", text: "Enter their name and describe what happened." },
              { icon: "🎨", title: "Make it yours", text: "Choose a theme or describe your dream design." },
              { icon: "💌", title: "Share the love", text: "Generate your website and share its unique link." }
            ].map((item, index) => (
              <div key={index} className="p-7">
                <div className="text-6xl mb-5">{item.icon}</div>
                <div className="text-pink-400 font-bold text-sm">
                  STEP 0{index + 1}
                </div>
                <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="create" className="px-6 py-20 bg-gradient-to-r from-[#e875a3] to-[#a58ae8] text-white text-center">
        <Stars className="mx-auto mb-5" size={32} />
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Ready to make someone smile?
        </h2>
        <p className="mt-5 text-white/90 text-lg">
          Your little apology deserves a little magic.
        </p>

        <button className="mt-9 inline-flex items-center gap-3 bg-white text-[#d65d91] px-9 py-4 rounded-full font-extrabold shadow-xl hover:scale-105 transition">
          Let's create something cute
          <Heart size={19} className="fill-pink-400" />
        </button>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#35263a] text-white px-6 md:px-16 py-9">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-pink-300">SoCute.</h2>
            <p className="text-gray-400 text-sm mt-1">
              A little sorry goes a long way. 💗
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            Made with ❤️ for the people who matter.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
