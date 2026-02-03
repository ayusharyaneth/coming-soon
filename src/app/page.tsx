"use client";

import { Twitter, Instagram, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 pb-32 relative overflow-x-hidden bg-[#050505] text-white selection:bg-primary/20">
      <ThreeBackground />

      {/* Background Decor */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mt-8 md:mt-12 flex items-center gap-4 mb-8 md:mb-12"
      >
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transform hover:rotate-3 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
          <span className="text-black font-black text-2xl font-sans">A</span>
        </div>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">Ayush <span className="text-primary">XD</span></span>
      </motion.nav>

      <main className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full mb-6 justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold mb-2 md:mb-3 tracking-tight drop-shadow-2xl"
        >
          We&apos;re Coming Soon!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed font-medium tracking-tight opacity-80 mb-6 md:mb-8"
        >
          Putting together a place to document what I build and learn.
        </motion.p>

        {/* Let's Connect Section */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-6"
            >
              <div className="inline-block px-8 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm uppercase tracking-[0.4em] font-mono">
                Get in Touch
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
            >
              {/* Twitter */}
              <a href="https://x.com/ayusharyaneth" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[#1DA1F2]"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:text-white group-hover:bg-[#1DA1F2]">
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

              </a>
              {/* Instagram */}
              <a href="https://instagram.com/ayusharyan.eth" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[#E1306C]"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:text-white group-hover:bg-[#E1306C]">
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

              </a>

              {/* Telegram */}
              <a href="https://telegram.me/ayusharyaneth" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[#0088cc]"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-transparent group-hover:text-white group-hover:bg-[#0088CC]">
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

              </a>
            </motion.div>
          </div>
        </div>
      </main>


      <motion.footer
        initial={{ opacity: 0, y: 20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-4xl group"
      >
        <div className="absolute inset-x-12 -bottom-2 h-8 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="relative bg-[#050505]/60 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-full px-5 py-3 md:px-8 md:py-4 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-primary/30 overflow-hidden">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="flex flex-row justify-between items-center gap-4 relative z-10 w-full px-2">
            {/* Left: Branding */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center transform -rotate-12 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                <span className="text-black font-black text-lg md:text-xl font-sans">A</span>
              </div>
              <span className="text-sm md:text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary whitespace-nowrap">
                Ayush <span className="text-primary italic">XD</span>
              </span>

            </div>

            {/* Center: Tagline */}
            <div className="hidden lg:block">
              <span className="text-[9px] uppercase tracking-[0.8em] font-black italic text-zinc-400">
                HANDCRAFTED WITH OBSESSION
              </span>
            </div>

            {/* Right: Copyright */}
            <div className="flex items-center">
              <span className="text-[10px] md:text-[11px] font-mono font-bold text-zinc-400 whitespace-nowrap tracking-tight">
                © 2026 <span className="text-white">Ayush XD</span>
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

