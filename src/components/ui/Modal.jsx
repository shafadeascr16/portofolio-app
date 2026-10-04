import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-zinc-900 rounded-3xl max-w-lg w-full p-8 border border-zinc-800 shadow-2xl relative z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 flex items-center justify-center text-sm transition-all"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="mt-2">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                {project.details.badge}
              </span>
              <h3 className="text-xl font-bold text-zinc-100 mt-1 mb-3">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {project.details.desc}
              </p>
              <ul className="space-y-2 bg-[#0a0a0a] p-4 rounded-2xl border border-zinc-800 mb-6">
                {project.details.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900/500 mt-1.5 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
