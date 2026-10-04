import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#B497CF] text-zinc-950 px-5 py-3.5 rounded-2xl shadow-xl border border-zinc-700 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#B497CF]"></span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
