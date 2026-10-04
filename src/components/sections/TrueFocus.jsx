'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TrueFocus = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#B497CF',
  glowColor = 'rgba(180, 151, 207, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = index => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-flex flex-nowrap whitespace-nowrap items-center justify-center gap-x-3 sm:gap-x-5 select-none outline-none"
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className="relative font-black text-inherit cursor-pointer select-none outline-none transition-[filter,color] text-zinc-100"
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              transitionDuration: `${animationDuration}s`,
              transitionTimingFunction: 'ease'
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {/* Frame Fokus & Sudut Siku */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-content border-none"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
      >
        {/* Sudut Kiri Atas */}
        <span 
          className="absolute -top-2.5 -left-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-[3px] border-l-[3px] rounded-tl-sm"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 5px ${glowColor})`
          }}
        />
        {/* Sudut Kanan Atas */}
        <span 
          className="absolute -top-2.5 -right-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-[3px] border-r-[3px] rounded-tr-sm"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 5px ${glowColor})`
          }}
        />
        {/* Sudut Kiri Bawah */}
        <span 
          className="absolute -bottom-2.5 -left-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-[3px] border-l-[3px] rounded-bl-sm"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 5px ${glowColor})`
          }}
        />
        {/* Sudut Kanan Bawah */}
        <span 
          className="absolute -bottom-2.5 -right-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-[3px] border-r-[3px] rounded-br-sm"
          style={{ 
            borderColor: borderColor,
            filter: `drop-shadow(0px 0px 5px ${glowColor})`
          }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;