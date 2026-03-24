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
          className="absolute top-[30%] left-[15%] max-w-5xl pointer-events-auto pr-7"
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
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-10 max-w-5xl font-medium leading-relaxed">
          IPARTNERS NX는 기존의 파편화된 선형적 프로세스(Linear)를 탈피하여, <br />기획과 동시에 프로토타입이 시각화되는 지능형 동시 구현 체계를 완성합니다.<br />
          파편화되던 노하우를 플랫폼에 축적하여 조직의 흔들림 없는 경험 자산으로 내재화합니다.
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
