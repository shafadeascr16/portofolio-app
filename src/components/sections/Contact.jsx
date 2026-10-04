import { motion } from 'framer-motion';
import CursorGrid from './CursorGrid';

const Contact = ({ onCopyContact }) => {
  return (
    <section 
      id="contact" 
      className="py-24 bg-[#121212] border-t border-zinc-800/80 relative z-10 overflow-hidden flex items-center justify-center"
    >
      {/* Background CursorGrid: Terkunci HANYA di area section Contact */}
      <div className="absolute inset-0 w-full h-full z-0">
        <CursorGrid
          cellSize={60}
          color="#B497CF"
          radius={120}
          falloff="smooth"
          holdTime={300}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={0.8}
          fillOpacity={0.08}
          gridOpacity={0.04}   
          cellRadius={1}
          clickPulse={true}
          pulseSpeed={650}
        />
      </div>

      {/* Konten Kartu Kontak Utama (Berada di atas CursorGrid) */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-850/40 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-14 border border-zinc-800/80 shadow-lg text-center relative overflow-hidden"
        >
          {/* Badge Label */}
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            GET IN TOUCH
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Let's connect & collaborate.
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-10 font-normal leading-relaxed">
            Whether you have a project in mind, an interesting opportunity, or just want to chat about tech—my inbox is always open.          </p>

          {/* Kontak Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10 text-left">
            {/* Tombol Copy Email */}
            <div
              onClick={() => onCopyContact('shafadea11@gmail.com', 'Email tersalin!')}
              className="cursor-pointer bg-zinc-900/70 hover:bg-zinc-800/80 p-4 rounded-2xl border border-zinc-800/90 hover:border-zinc-600 transition-all flex items-center justify-between group active:scale-95"
            >
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-zinc-800/60 group-hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-sm transition-colors">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="truncate">
                  <p className="text-[10px] uppercase font-bold text-zinc-500">Email Address</p>
                  <p className="text-xs font-bold text-zinc-200 truncate">shafadea11@gmail.com</p>
                </div>
              </div>
              <i className="fa-regular fa-clone text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors ml-2"></i>
            </div>

            {/* Link WhatsApp */}
            <a
              href="https://wa.me/6285846737274"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/70 hover:bg-zinc-800/80 p-4 rounded-2xl border border-zinc-800/90 hover:border-[#B497CF] transition-all flex items-center justify-between group active:scale-95"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#B497CF]/10 text-[#B497CF] flex items-center justify-center text-sm transition-colors">
                  <i className="fa-brands fa-whatsapp text-base"></i>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-500">Chat WhatsApp</p>
                  <p className="text-xs font-bold text-zinc-200">085846737274</p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs text-zinc-600 group-hover:text-[#B497CF] transition-colors ml-2"></i>
            </a>
          </div>

          {/* Location Info */}
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-2 font-medium">
            <i className="fa-solid fa-location-dot text-[#B497CF]"></i>
            <span>Jl. Mekarwangi 1 Rt 07 Rw 19, Kab. Bandung, Jawa Barat</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;