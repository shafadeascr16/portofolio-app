import { motion } from 'framer-motion';
import TrueFocus from './TrueFocus';

const Hero = ({ onCopyContact }) => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-24 relative z-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Main Title */}
          <div className="select-none tracking-tight leading-[1.08]">
            {/* Baris 1: Software & ML dengan Animasi TrueFocus */}
            <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">
              <TrueFocus 
                sentence="FullStack Software"
                manualMode={false}
                blurAmount={4}
                borderColor="#B497CF"
                glowColor="rgba(180, 151, 207, 0.6)"
                animationDuration={0.8}
                pauseBetweenAnimations={1.6}
              />
            </div>

            {/* Baris 2: Engineering */}
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
              Developer
            </span>
          </div>

          {/* Sub-label */}
          <p className="mt-6 text-sm sm:text-base font-medium tracking-wide text-[#B497CF]">
            Web Architecture & Intelligent Systems
          </p>

          {/* Description */}
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Building robust modern web applications, integrating practical machine learning workflows, and designing scalable system architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-18">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#B497CF] text-zinc-950 text-sm font-bold shadow-md hover:bg-[#9f80ba] transition-all duration-200 flex items-center gap-2.5 active:scale-95"
            >
              <span>Explore Portfolio</span>
              <i className="fa-solid fa-arrow-down text-xs text-zinc-800"></i>
            </a>

            <button
              onClick={() => onCopyContact('shafadea11@gmail.com', 'Email address copied to clipboard!')}
              className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:bg-zinc-800/60 transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <i className="fa-regular fa-clone text-xs text-zinc-400"></i>
              <span>Copy Email</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;