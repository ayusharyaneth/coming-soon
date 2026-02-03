import { NotifyForm } from "@/components/NotifyForm";
import { Instagram, Twitter, Send, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 relative overflow-x-hidden bg-[#050505] text-white selection:bg-white/20 from-zinc-900 to-black">
      {/* Background Decor */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {/* Large Dark Swoop from Top Right */}
        <svg
          className="absolute top-0 right-0 w-[90%] md:w-[70%] h-auto text-zinc-900/40 fill-current transform translate-x-[20%] -translate-y-[10%]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1000 0C600 0 200 400 0 1000h1000V0z" />
        </svg>

        {/* Secondary Layer for Depth */}
        <svg
          className="absolute top-0 right-0 w-[80%] md:w-[60%] h-auto text-zinc-800/20 fill-current transform translate-x-[30%] -translate-y-[20%]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1000 0C500 0 100 500 0 1000h1000V0z" />
        </svg>

        {/* Bottom Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-auto text-zinc-900/30 fill-current"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      <nav className="relative z-10 mt-8 md:mt-12 flex items-center gap-2 animate-fade-in-down mb-20">
        <Sparkles className="w-6 h-6 text-white" />
        <span className="text-xl font-bold tracking-wide">iosoon</span>
      </nav>

      <main className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full flex-grow mb-32">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          We&apos;re Coming Soon!
        </h1>

        <p className="text-gray-400 text-sm md:text-lg max-w-lg leading-relaxed mb-10">
          Our website is under construction currently.<br className="hidden md:block" />
          Get a notification on your e-mail for updates.
        </p>

        <NotifyForm />
      </main>

      <footer className="relative z-10 flex flex-col items-center w-full px-4 mb-12">
        {/* Get in Touch Pill */}
        <div className="px-4 py-1.5 rounded-full bg-[#051a0f] border border-[#0a381e] text-[#22c55e] text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 md:mb-6">
          GET IN TOUCH
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight text-center">
          <span className="text-white">Let&apos;s</span>{" "}
          <span className="text-[#22c55e] italic font-serif">Connect</span>
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-500 text-center text-sm md:text-base max-w-md mb-8 md:mb-10 leading-relaxed">
          Follow my journey and stay updated with my latest trades and insights.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-black border border-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
            <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#22c55e] transition-colors" />
          </a>
          <a href="#" className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-black border border-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
            <Twitter className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#22c55e] transition-colors" />
          </a>
          <a href="#" className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-black border border-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
            <Send className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#22c55e] transition-colors transform -rotate-45 translate-x-0.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
