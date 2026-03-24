import React from 'react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  return (
    <>
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-32 lg:min-h-[800px] flex items-center border-t border-gray-100">
      {/* Right Side Background Image (Full Bleed on Desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:block absolute right-0 top-0 w-1/2 h-full"
      >
        <img 
          src="https://picsum.photos/seed/cyber-ai/1200/1500" 
          alt="AI Implementation Process" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Floating Box Content for Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-32 -left-24 bg-white p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-[420px] z-20"
        >
          <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">
            Intelligent Workflow
          </h3>
          <p className="text-base text-gray-500 leading-relaxed break-keep">
            반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
          </p>
        </motion.div>
      </motion.div>

      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 px-8 md:px-12 lg:px-24 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-gray-900 mb-8">
            How We Implement<br />AI
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-[450px] break-keep tracking-[-0.03em]">
            기존의 기획, 디자인, 개발로 단절되었던 선형적(Linear) 프로세스를 탈피하여, 자연어 기반의 AI 코딩과 고속 프로토타이핑을 결합한 '지능형 동시 구현 체계'를 가동합니다. 기획과 동시에 직관적인 프로토타입을 시각화함으로써 불필요한 의사소통 비용을 지우고 프로젝트 리드타임을 혁신적으로 단축합니다. 이 모든 과정은 대외비 마스킹 및 실무자 최종 검수 등을 명시한 아이파트너즈의 엄격한 보안 원칙 아래 가장 안전하게 통제됩니다. 결과적으로 전문가의 통찰과 AI의 압도적인 실행력이 결합한 'AI-휴먼 지능형 워크플로우(Intelligent Workflow)'를 통해, 고객사의 비즈니스가 무한히 확장(Scale further)할 수 있도록 이끄는 최고의 파트너가 되겠습니다.
          </p>
        </motion.div>

        {/* Mobile/Tablet Image & Box (Hidden on Desktop) */}
        <div className="w-full lg:hidden relative mt-8 px-8 md:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/cyber-ai/1200/1500" 
              alt="AI Implementation Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Floating Box Content for Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative -mt-25 mx-4 md:-mt-35 md:mx-12 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20"
          >
            <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
              Intelligent Workflow
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed break-keep">
              반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
    </>
  );
}
