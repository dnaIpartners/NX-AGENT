import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import ParticleSphere from './ParticleSphere';

const WORDS = ['scale', 'elevate', 'integrate', 'systemize'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full h-screen bg-[#001641] overflow-hidden font-sans">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ParticleSphere />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[30%] left-[15%] max-w-3xl pointer-events-auto pr-7"
        >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tight mb-6 leading-[1.1]">
        NX AGENT <br />
        <span className="text-white/80">
          to{" "}
          <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden align-bottom">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="col-start-1 row-start-1"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl font-medium leading-relaxed">
           아이파트너즈의 NX AGENT는 기획, 디자인, 개발의 선형적 경계를 허물.
고 지능형 워크플로우를 완벽하게 통합합니다. 파편화되어 사라지던 개인 의 노하우는 더 이상 유실되지 않으며, 플랫폼을 통해 조직의 영구적인 지 능(경험 자산)으로 시스템화(내재화)됩니다.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 z-20 flex flex-col items-center gap-3 text-white/60 pointer-events-none"
      >
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </main>
  );
}
