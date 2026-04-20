import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import NextExperience from '../components/NextExperience';

const contents = [
  {
    id: "01",
    title: "Understand",
    subtitle: "비즈니스의 진짜 목표를 찾는 시간",
    desc: "아이파트너즈는 고객의 이야기를 듣는 것에서 출발합니다. 현재 어떻게 일하고 계신지 업무 환경을 살펴보고, '구축 시간 30% 단축'이나 '사용자 경험 개선' 등 고객에게 가장 필요한 진짜 목표를 명확히 찾습니다. 본격적인 작업에 앞서 비즈니스 상황에 딱 맞는 AI 도입 전략의 밑그림을 그립니다.",
    glow: "from-blue-600/20 to-transparent",
    borderGlow: "hover:border-blue-500/50",
    accent: "text-blue-400"
  },
  {
    id: "02",
    title: "Evaluate Data",
    subtitle: "최적의 AI 환경 구성",
    desc: "강력한 AI는 잘 정리된 데이터에서 나옵니다. 고객사의 기존 데이터와 일하는 방식을 분석해 불편하고 시간이 오래 걸리는 점(Pain Point)들을 찾아냅니다. 그리고 업무 중 어떤 부분에 AI를 적용해야 복잡하지 않으면서도 가장 큰 효과를 얻을 수 있을지 꼼꼼하게 따져보고 최적의 환경을 준비합니다.",
    glow: "from-indigo-600/20 to-transparent",
    borderGlow: "hover:border-indigo-500/50",
    accent: "text-indigo-400"
  },
  {
    id: "03",
    title: "Design Solutions",
    subtitle: "바이브 코딩을 통한 혁신",
    desc: "기획, 디자인, 개발이 따로 놀지 않도록 업무의 경계를 허뭅니다. 아이파트너즈는 '바이브 코딩(Vibe Coding)' 방식을 활용해 기획을 함과 동시에 프로토타입(시안)을 눈으로 확인하며 작업합니다. 새로운 시스템을 만들든 기존 시스템에 연결하든, 고객사 환경에 가장 잘 맞고 쓰기 편한 솔루션을 만듭니다.",
    glow: "from-cyan-600/20 to-transparent",
    borderGlow: "hover:border-cyan-500/50",
    accent: "text-cyan-400"
  },
  {
    id: "04",
    title: "Test",
    subtitle: "깐깐한 검증과 완벽한 보안",
    desc: "철저한 테스트 없이는 서비스를 오픈하지 않습니다. AI를 활용해 예상치 못한 오류(엣지 케이스)와 보안 취약점을 빠르게 찾아냅니다. 특히 대외비 정보는 마스킹 처리하는 등 아이파트너즈의 엄격한 '보안 3계명'을 지켜 데이터를 가장 안전하게 다루며, 최종적으로 실무 전문가가 한 번 더 꼼꼼하게 퀄리티를 검수합니다.",
    glow: "from-purple-600/20 to-transparent",
    borderGlow: "hover:border-purple-500/50",
    accent: "text-purple-400"
  },
  {
    id: "05",
    title: "Launch & Support",
    subtitle: "지속적인 성장 파트너",
    desc: "서비스가 오픈된 이후에도 단기 성과에 그치지 않고 오랫동안 신뢰받는 든든한 파트너로서 함께합니다. 시스템이 잘 돌아가는지 관리하는 것을 넘어, 데이터를 분석해 새로운 비즈니스 기회를 찾습니다. 도입한 AI가 제 몫을 다하고 고객사의 비즈니스가 꾸준히 성장할 수 있도록 우리가 먼저 더 나은 방향을 제안해 드립니다.",
    glow: "from-emerald-600/20 to-transparent",
    borderGlow: "hover:border-emerald-500/50",
    accent: "text-emerald-400"
  }
];

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION - High Impact Black & White */}
      <section className="relative h-[80vh] md:h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black text-white rounded-b-[40px] md:rounded-b-[60px] shadow-2xl z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
        
        {/* SVG Noise Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 text-center px-4 w-full max-w-[1400px] mt-16"
        >
          <p className="text-blue-400 font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 text-sm md:text-base">
            Work Smarter with AI
          </p>
          <h1 className="text-[13vw] md:text-[9vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mix-blend-plus-lighter">
            How We<br className="hidden md:block" /> Work
          </h1>
          <p className="mt-8 md:mt-12 text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto tracking-tight break-keep">
            단순한 시스템 구축을 넘어,<br className="md:hidden" /> 비즈니스의 체질을 바꾸는 완벽한 워크플로우를 설계합니다.
          </p>
        </motion.div>
      </section>

      {/* 2. EDITORIAL PHILOSOPHY SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-zinc-50 text-zinc-900 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24"
          >
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-6 uppercase flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
                  Our Methodology
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] font-display">
                  AI is not just a tool.<br/>
                  <span className="text-zinc-400">It's a workflow revolution.</span>
                </h3>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-12 text-xl md:text-2xl text-zinc-600 font-light leading-relaxed tracking-tight lg:pt-16">
              <p>
                단순히 최신 기술을 도입하는 도구적 접근을 넘어섭니다. 업무의 본질을 되물어보고, AI가 가장 파괴적인 혁신을 일으킬 수 있는 포인트를 정확히 짚어냅니다. 
              </p>
              <p>
                기획부터 디자인, 개발이 동시에 이루어지는 <strong className="font-semibold text-zinc-900">'바이브 코딩(Vibe Coding)'</strong>을 통해 프로젝트 리드타임을 혁신적으로 줄이고 전에 없던 속도를 경험하세요.
              </p>
              <p>
                우리는 오직 <strong className="font-semibold text-zinc-900">'결과'</strong>에 집중합니다. 소모적인 반복 업무가 사라진 자리에 혁신과 고부가가치 창출만이 남는, 인간과 AI의 가장 이상적인 협업 모델을 제시합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE STICKY CARDS PROCESS SECTION (Nightwatch Design Influence) */}
      <section className="py-24 md:py-32 px-4 md:px-12 bg-[#0B0D14] relative" ref={processContainerRef}>
        {/* Glow Effects behind the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full pointer-events-none opacity-40 mix-blend-screen" 
             style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)' }}></div>
             
        {/* Very subtle thin grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-20 md:mb-32 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-blue-400 font-mono tracking-[0.2em] uppercase mb-4 text-xs md:text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                AI Implementation Cycle
              </p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                The Process
              </h2>
            </div>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-sm md:text-right">
              Track and optimize every step.<br/>아이파트너즈와 함께 그리는 5단계 여정.
            </p>
          </div>

          <div className="relative pb-[20vh]">
            {contents.map((step, index) => {
              return (
                <div 
                  key={step.id}
                  className="sticky w-full"
                  style={{ 
                    top: `calc(12vh + ${index * 1.5}rem)`, 
                    zIndex: index,
                    // creates scroll depth so the cards wait for you to scroll
                    marginBottom: index === contents.length - 1 ? '0' : '40vh' 
                  }}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-14 h-auto min-h-[35vh] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 bg-[#090b10]/90 backdrop-blur-2xl text-white origin-top flex flex-col lg:flex-row gap-10 lg:gap-20 relative overflow-hidden group transition-colors duration-700 ${step.borderGlow}`}
                  >
                    {/* Ambient Internal Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                    
                    {/* Tech Dot Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                    {/* Number Overlay Graphic */}
                    <div className={`absolute -right-10 -top-10 text-[12rem] md:text-[16rem] font-bold opacity-[0.02] group-hover:opacity-[0.05] leading-none pointer-events-none select-none transition-all duration-1000 group-hover:scale-110 group-hover:-translate-x-5 group-hover:translate-y-5 ${step.accent}`}>
                      {step.id}
                    </div>

                    {/* Left Column */}
                    <div className="lg:w-1/3 flex flex-col relative z-10">
                      <span className={`text-sm md:text-base font-mono tracking-widest font-bold mb-6 flex items-center gap-2 ${step.accent}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                          <rect x="0" y="0" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
                          <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor"/>
                        </svg>
                        STEP {step.id}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 break-keep leading-tight font-display text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all duration-500">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-zinc-400 mt-2 tracking-tight">
                        {step.subtitle}
                      </p>
                    </div>
                    
                    {/* Right Column */}
                    <div className="lg:w-2/3 flex items-center relative z-10 lg:pl-10 lg:border-l border-white/5">
                      <p className="text-lg md:text-xl font-light leading-[1.8] text-zinc-300 break-keep">
                        {step.desc}
                      </p>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                      <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <NextExperience />
    </div>
  );
}
