import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import ParticleSphere from './ParticleSphere';

const WORDS = ["scale", "elevate", "integrate", "systemize"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative z-10 max-w-[1100px] mx-auto px-8 pt-24 pb-32 flex flex-col lg:flex-row items-center min-h-[calc(100vh-88px)]">
      {/* Left Column - Text Content */}
      <div className="w-full lg:w-[65%] pr-0 lg:pr-12 z-20 mt-10 lg:mt-0">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-gray-300"></div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.15em]">The platform for modern teams</span>
        </div>
        
        <h1 className="text-[5rem] sm:text-[6rem] lg:text-[6.5rem] font-display font-medium leading-[0.92] tracking-[-0.04em] mb-8 text-[#0a0a0a]">
          NX AGENT<br />
          to <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative inline-block"
              >
                {WORDS[wordIndex]}
                {/* Thick underline effect behind text */}
                <div className="absolute bottom-[10%] left-0 w-full h-[14px] bg-[#e5e5e5] -z-10"></div>
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        
        <p className="text-lg lg:text-[21px] text-gray-500 leading-[1.6] mb-12 max-w-[600px] font-normal">
          아이파트너즈의 NX AGENT는 기획, 디자인, 개발의 선형적 경계를 허물고 지능형 워크플로우를 완벽하게 통합합니다. 파편화되어 사라지던 개인의 노하우는 더 이상 유실되지 않으며, 플랫폼을 통해 조직의 영구적인 지능(경험 자산)으로 시스템화(내재화)됩니다.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-black text-white px-7 py-3.5 rounded-full text-[15px] font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors group">
            Start free trial
            <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
          <button className="bg-white border border-gray-200 text-black px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors">
            Watch demo
          </button>
        </div>
      </div>

      {/* Right Column - 3D Sphere */}
      <div className="w-full lg:w-[65%] h-[500px] lg:h-[700px] absolute right-[-15%] lg:right-[-5%] top-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={1} />
            <ParticleSphere />
          </Canvas>
        </motion.div>
      </div>
    </main>
  );
}
