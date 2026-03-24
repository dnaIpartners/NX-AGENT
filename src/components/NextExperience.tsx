import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function NextExperience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { y: "100%", opacity: 0, rotate: 5 },
    show: { 
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20,
        mass: 1
      } 
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 lg:py-30 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Massive Typography */}
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-sans font-black leading-[1.05] tracking-tight flex flex-col items-center">
            <div className="overflow-hidden pb-2 md:pb-4">
              <motion.span variants={item} className="block text-white">
                Beyond Digital:
              </motion.span>
            </div>
            <div className="overflow-hidden pb-2 md:pb-4">
              <motion.span variants={item} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0033FF] to-[#00A3FF]">
                The Next Experience
              </motion.span>
            </div>     
          </h2>
          
          {/* Subtitle */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              show: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { delay: 0.8, duration: 1, ease: "easeOut" } 
              }
            }}
            className="mt-4 md:mt-8 text-sm md:text-base font-medium tracking-wide text-gray-200"
          >
            우리의 기준은 언제나 ‘다음(Next)’에 있습니다.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0, 
                transition: { delay: 1.2, duration: 0.8, ease: "easeOut" } 
              }
            }}
            className="mt-8 md:mt-12"
          >
            <Link 
              to="/content/how-it-works" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              HOW IT WORKS
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
