import React from 'react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  return (
    <>
      {/* Node Convergence Section */}
      <section className="relative w-full pt-20 md:pt-32 pb-10 md:pb-16 bg-white overflow-hidden flex flex-col items-center justify-center border-t border-gray-100">
        <div className="text-center z-10 mb-4 md:mb-8 px-6">
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display font-medium tracking-tight leading-[1.1] text-[#1a202c]">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Empowering Brands to <br className="hidden md:block" />Work Smarter with AI</span>
           
          </h2>
        </div>

        <div className="relative w-full max-w-[1800px] h-[250px] md:h-[350px] lg:h-[450px] flex items-center justify-center px-4">
          {/* SVG Lines and Nodes */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Left Side Paths */}
              <path id="left-top-solid" d="M 0 50 C 300 50, 450 200, 640 200" fill="none" stroke="#d1d5db" strokeWidth="1" />
              <path id="left-top-dotted" d="M 0 120 C 250 120, 400 200, 640 200" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 6" />
              <path id="left-middle-solid" d="M 0 200 L 640 200" fill="none" stroke="#d1d5db" strokeWidth="1" />
              <path id="left-bottom-dotted" d="M 0 280 C 250 280, 400 200, 640 200" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 6" />
              <path id="left-bottom-solid" d="M 0 350 C 300 350, 450 200, 640 200" fill="none" stroke="#d1d5db" strokeWidth="1" />

              {/* Right Side Paths */}
              <path id="right-top-solid" d="M 1400 50 C 1100 50, 950 200, 760 200" fill="none" stroke="#d1d5db" strokeWidth="1" />
              <path id="right-top-dotted" d="M 1400 120 C 1150 120, 1000 200, 760 200" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 6" />
              <path id="right-middle-solid" d="M 1400 200 L 760 200" fill="none" stroke="#d1d5db" strokeWidth="1" />
              <path id="right-bottom-dotted" d="M 1400 280 C 1150 280, 1000 200, 760 200" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 6" />
              <path id="right-bottom-solid" d="M 1400 350 C 1100 350, 950 200, 760 200" fill="none" stroke="#d1d5db" strokeWidth="1" />
            </defs>

            {/* Draw paths */}
            <use href="#left-top-solid" />
            <use href="#left-top-dotted" />
            <use href="#left-middle-solid" />
            <use href="#left-bottom-dotted" />
            <use href="#left-bottom-solid" />

            <use href="#right-top-solid" />
            <use href="#right-top-dotted" />
            <use href="#right-middle-solid" />
            <use href="#right-bottom-dotted" />
            <use href="#right-bottom-solid" />

            {/* Nodes */}
            {/* Left Top Solid Node (Circle) */}
            <g className="text-gray-400">
              <circle cx="0" cy="0" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#left-top-solid" />
              </animateMotion>
            </g>

            {/* Left Top Dotted Node (Square) */}
            <g className="text-gray-400">
              <rect x="-7" y="-7" width="14" height="14" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="5s" repeatCount="indefinite" calcMode="linear" begin="1s">
                <mpath href="#left-top-dotted" />
              </animateMotion>
            </g>

            {/* Left Middle Solid Node (Circle) */}
            <g className="text-gray-400">
              <circle cx="0" cy="0" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="3.5s" repeatCount="indefinite" calcMode="linear" begin="2s">
                <mpath href="#left-middle-solid" />
              </animateMotion>
            </g>

            {/* Left Bottom Dotted Node (Triangle) */}
            <g className="text-gray-400">
              <polygon points="0,-8 8,6 -8,6" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="0" cy="2" r="2.5" fill="currentColor" />
              <animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" begin="0.5s">
                <mpath href="#left-bottom-dotted" />
              </animateMotion>
            </g>

            {/* Left Bottom Solid Node (Square) */}
            <g className="text-gray-400">
              <rect x="-7" y="-7" width="14" height="14" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="4.5s" repeatCount="indefinite" calcMode="linear" begin="1.5s">
                <mpath href="#left-bottom-solid" />
              </animateMotion>
            </g>

            {/* Right Top Solid Node (Square) */}
            <g className="text-gray-400">
              <rect x="-7" y="-7" width="14" height="14" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="5s" repeatCount="indefinite" calcMode="linear" begin="0s">
                <mpath href="#right-top-solid" />
              </animateMotion>
            </g>

            {/* Right Top Dotted Node (Circle) */}
            <g className="text-gray-400">
              <circle cx="0" cy="0" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="4.5s" repeatCount="indefinite" calcMode="linear" begin="2s">
                <mpath href="#right-top-dotted" />
              </animateMotion>
            </g>

            {/* Right Middle Solid Node (Square) */}
            <g className="text-gray-400">
              <rect x="-7" y="-7" width="14" height="14" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="4s" repeatCount="indefinite" calcMode="linear" begin="2.5s">
                <mpath href="#right-middle-solid" />
              </animateMotion>
            </g>

            {/* Right Bottom Dotted Node (Triangle) */}
            <g className="text-gray-400">
              <polygon points="0,-8 8,6 -8,6" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="0" cy="2" r="2.5" fill="currentColor" />
              <animateMotion dur="5.5s" repeatCount="indefinite" calcMode="linear" begin="1s">
                <mpath href="#right-bottom-dotted" />
              </animateMotion>
            </g>

            {/* Right Bottom Solid Node (Circle) */}
            <g className="text-gray-400">
              <circle cx="0" cy="0" r="8" fill="white" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <animateMotion dur="5.5s" repeatCount="indefinite" calcMode="linear" begin="3s">
                <mpath href="#right-bottom-solid" />
              </animateMotion>
            </g>
          </svg>

          {/* Center Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button className="bg-black text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-3 md:px-8 md:py-4 rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg">
IPARTNERS NX            </button>
          </div>
        </div>
      </section>
    </>
  );
}
