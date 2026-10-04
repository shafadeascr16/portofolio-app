import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-zinc-800 text-center text-xs text-zinc-400 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © 2026 Shafa Dea Secaria. Precision engineering with minimalist soft grey aesthetics.
        </p>
        <div className="flex items-center gap-4">
          <span
            className="hover:text-zinc-200 cursor-pointer transition-colors"
            onClick={scrollToTop}
          >
            Back to Top ↑
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
