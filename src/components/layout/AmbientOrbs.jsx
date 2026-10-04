import { motion } from 'framer-motion';

const AmbientOrbs = () => {
  return (
    <>
      <div className="fixed top-12 left-1/4 w-[450px] h-[450px] bg-[#B497CF]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-orb-float-1"></div>
      <div className="fixed bottom-10 right-1/4 w-[500px] h-[500px] bg-[#B497CF]/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-orb-float-2"></div>
    </>
  );
};

export default AmbientOrbs;
