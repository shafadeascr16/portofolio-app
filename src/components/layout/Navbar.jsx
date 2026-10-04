import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    // bg dibuat /40 agar transparan kaca, backdrop-blur dinaikkan ke -lg
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-[#0a0a0a]/40 border-b border-zinc-800/50 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div>
            {/* Ukuran nama diperbesar dari text-base ke text-lg sm:text-xl */}
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-zinc-100 block leading-tight group-hover:text-[#B497CF] transition-colors">
              Shafa Dea Secaria
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 backdrop-blur-md p-1.5 rounded-full border border-zinc-800/80 shadow-sm text-xs font-semibold text-zinc-400">
          <a href="#about" className="px-4 py-2 rounded-full hover:text-zinc-100 hover:bg-zinc-800/60 transition-all">
            About
          </a>
          <a href="#experience" className="px-4 py-2 rounded-full hover:text-zinc-100 hover:bg-zinc-800/60 transition-all">
            Timeline
          </a>
          <a href="#skills" className="px-4 py-2 rounded-full hover:text-zinc-100 hover:bg-zinc-800/60 transition-all">
            Skills
          </a>
          <a href="#projects" className="px-4 py-2 rounded-full hover:text-zinc-100 hover:bg-zinc-800/60 transition-all">
            Projects
          </a>
        </div>

        <div>
          {/* Hover disesuaikan ke tone ungu #a383c2 dengan aksen shadow */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#B497CF] text-zinc-950 text-xs font-bold shadow-sm hover:bg-[#a383c2] hover:shadow-[0_0_15px_rgba(180,151,207,0.35)] transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <span>Get in Touch</span>
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;