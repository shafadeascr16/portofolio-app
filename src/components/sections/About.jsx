import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import LiquidEther from './LiquidEther';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#121212] border-y border-zinc-800/80 relative z-10 overflow-hidden">
      
      {/* Background Layer: LiquidEther */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={60}
          cursorSize={80}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.35}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B497CF"
        />
      </div>

      {/* Content Layer (di atas background) */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 mt-3 tracking-tight">
            Building Digital Solutions,
            Developing Software
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Kiri: Deskripsi Teks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 bg-zinc-900/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm Shafa Dea Secaria, an Information Technology graduate with an interest in software development and technology. I enjoy building web applications and working on both the front-end and back-end to create functional and user-friendly solutions.
              </p>
              <p>
                I have experience with full-stack web development, backend development, databases, and system development. I'm always interested in learning new technologies, improving my skills, and working on projects that give me the opportunity to build and solve things.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-location-dot text-[#B497CF]"></i>
                Bandung, Jawa Barat
              </span>
              <span className="text-zinc-500 font-normal">
                Click or drag the photo card ➔
              </span>
            </div>
          </motion.div>

          {/* Kolom Kanan: Foto Profil dengan FlipCard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 flex justify-center items-center"
          >
            <FlipCard
              width={320}
              height={440}
              radius={24}
              tilt={true}
              draggable={true}
              flipOnClick={true}
              borderColor="#B497CF"
              background="#18181b"
              // SISI DEPAN (FRONT)
              front={
                <div className="relative w-full h-full border border-zinc-800 rounded-[24px] overflow-hidden">
                  <img
                    src="/shafaweb.jpg"
                    alt="Shafa Dea Secaria"
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/85 backdrop-blur-md p-3 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-[#B497CF] text-xs">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-bold text-zinc-100 leading-tight">Shafa Dea Secaria, S.T</p>
                      <p className="text-[10px] text-zinc-400">Software & ML Engineer</p>
                    </div>
                  </div>
                </div>
              }
              // SISI BELAKANG (BACK)
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between border border-zinc-700/80 rounded-[24px] bg-zinc-900/95">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-mono text-[#B497CF] bg-[#B497CF]/10 px-2.5 py-1 rounded-full border border-[#B497CF]/20">
                      Quick Profile
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 mt-4">
                      Shafa Dea Secaria
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Informatics Engineering Graduate
                    </p>
                    <div className="mt-5 space-y-2 text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-graduation-cap text-[#B497CF] text-[11px]"></i>
                        <span>UIN SGD Bandung</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-star text-[#B497CF] text-[11px]"></i>
                        <span>GPA 3.76</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-brands fa-linkedin-in text-[#B497CF] text-[11px]"></i>
                        <span>linkedin.com/in/shafadeascr</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-phone text-[#B497CF] text-[11px]"></i>
                        <span>085846737274 / 081284429036</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope text-[#B497CF] text-[11px]"></i>
                        <span>shafadea11@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-500 italic text-center border-t border-zinc-800 pt-3">
                    Click again to flip back
                  </p>
                </div>
              }
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;