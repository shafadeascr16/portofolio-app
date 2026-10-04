import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay Gelap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          ></motion.div>

          {/* Kotak Modal Utama */}
            <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="custom-modal-scroll bg-zinc-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-zinc-800 shadow-2xl relative z-10"
          >
            {/* Tombol Tutup */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-950/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 flex items-center justify-center text-sm transition-all"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* 1. Gambar Project */}
            {project.image && (
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* 2. Informasi Project */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-[#B497CF] uppercase tracking-widest">
                  {project.details?.badge || project.badge}
                </span>
                {project.type && (
                  <span className="text-[11px] text-zinc-500 font-mono">
                    {project.type}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                {project.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {project.details?.desc || project.desc}
              </p>

              {/* Rincian Poin */}
              {project.details?.points && (
                <ul className="space-y-2.5 bg-[#0a0a0a] p-4 rounded-2xl border border-zinc-800/80 mb-5">
                  {project.details.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B497CF] mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-800/60 px-2.5 py-1 rounded-lg border border-zinc-700/50 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Tombol Tutup Bawah */}
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#B497CF] text-zinc-950 text-xs font-bold hover:bg-[#9f80ba] transition-colors"
              >
                Tutup Detail
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;