import React from 'react';

export default function HowItWorks() {
  return (
    <>
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-32 lg:min-h-[800px] flex items-center border-t border-gray-100">
      {/* Right Side Background Image (Full Bleed on Desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <img 
          src="https://picsum.photos/seed/cyber-ai/1200/1500" 
          alt="AI Implementation Process" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Floating Box Content for Desktop */}
        <div className="absolute bottom-32 -left-24 bg-white p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-[420px] z-20">
          <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">
            Intelligent Workflow
          </h3>
          <p className="text-base text-gray-500 leading-relaxed break-keep">
            반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 30% 이상 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-24 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-gray-900 mb-8">
            How We<br />Implement<br />AI
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-[420px] break-keep">
            우리는 단순한 '시스템 구축'을 넘어 고객사의 비즈니스 본질을 탐구합니다. 실무 전문가가 고객사의 페인포인트를 깊이 있게 진단하고, AI가 가장 강력한 임팩트를 낼 수 있는 영역에 'i-AX Solution(6대 핵심 에이전트)'을 유기적으로 매핑합니다.
          </p>
        </div>

        {/* Mobile/Tablet Image & Box (Hidden on Desktop) */}
        <div className="w-full lg:hidden relative mt-8 px-8 md:px-12">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/cyber-ai/1200/1500" 
              alt="AI Implementation Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Box Content for Mobile */}
          <div className="relative -mt-20 mx-4 md:-mt-24 md:mx-12 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20">
            <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
              Intelligent Workflow
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed break-keep">
              반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 30% 이상 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
