import React from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { ArrowRight } from 'lucide-react';
import ParticleSphere from './ParticleSphere';

export default function Hero() {
  return (
    <main className="relative w-full h-screen bg-[#001641] overflow-hidden font-sans">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ParticleSphere />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end p-8 md:p-16 lg:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl pointer-events-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Interactive <br />
            <span className="text-white/80">Particle Sphere</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl mb-10 max-w-xl font-medium leading-relaxed">
            Explore 20,000 particles reacting to your presence in real-time. Powered by Three.js and React.
          </p>
          <button className="group flex items-center gap-3 bg-white text-[#FF4500] px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/90 hover:scale-105 active:scale-95 shadow-xl">
            Start Exploring
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
