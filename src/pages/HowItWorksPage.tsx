import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Network, Database, Layers, CheckCircle, Rocket, ArrowDown, ChevronRight, Zap, Lightbulb } from 'lucide-react';
import NextExperience from '../components/NextExperience';
import SEO from '../components/SEO';

const contents = [
  {
    id: "01",
    title: "Understand",
    subtitle: "비즈니스의 진짜 목표를 찾는 시간",
    desc: "아이파트너즈는 고객의 이야기를 듣는 것에서 출발합니다. 현재 어떻게 일하고 계신지 업무 환경을 살펴보고, '구축 시간 30% 단축'이나 '사용자 경험 개선' 등 고객에게 가장 필요한 진짜 목표를 명확히 찾습니다.",
    icon: Lightbulb,
    color: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    borderGlow: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    title: "Evaluate Data",
    subtitle: "최적의 AI 환경 구성",
    desc: "강력한 AI는 잘 정리된 데이터에서 나옵니다. 고객사의 기존 데이터와 일하는 방식을 분석해 불편하고 시간이 오래 걸리는 점(Pain Point)들을 찾아냅니다.",
    icon: Database,
    color: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderGlow: "group-hover:border-indigo-500/50"
  },
  {
    id: "03",
    title: "Design Solutions",
    subtitle: "바이브 코딩을 통한 혁신",
    desc: "기획, 디자인, 개발이 따로 놀지 않도록 업무의 경계를 허뭅니다. '바이브 코딩(Vibe Coding)' 방식을 활용해 고객사 환경에 가장 잘 맞고 쓰기 편한 솔루션을 만듭니다.",
    icon: Layers,
    color: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    id: "04",
    title: "Test",
    subtitle: "깐깐한 검증과 완벽한 보안",
    desc: "철저한 테스트 없이는 서비스를 오픈하지 않습니다. AI를 활용해 예상치 못한 오류(엣지 케이스)와 보안 취약점을 빠르게 찾아내고, 전문가가 퀄리티를 최종 검수합니다.",
    icon: CheckCircle,
    color: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    id: "05",
    title: "Launch & Support",
    subtitle: "지속적인 성장 파트너",
    desc: "서비스가 오픈된 이후에도 데이터를 분석해 새로운 비즈니스 기회를 찾습니다. 도입한 AI가 제 몫을 다하고 고객사의 비즈니스가 꾸준히 성장할 수 있도록 먼저 제안해 드립니다.",
    icon: Rocket,
    color: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderGlow: "group-hover:border-emerald-500/50"
  }
];

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processContainerRef,
    offset: ["start 60%", "end 80%"]
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <SEO 
        title="How We Work" 
        description="IPARTNERS의 AI-First 구현 방식과 혁신적인 방법론을 알아보세요." 
      />
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="relative z-10 w-full px-6 pt-24 md:pt-28 pb-16 md:pb-24 max-w-[1280px] mx-auto text-center flex flex-col items-center">
        
        {/* Section 1: Hero */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="w-full text-center flex flex-col items-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/15 text-blue-400 text-xs md:text-sm font-semibold tracking-wide mb-6 uppercase border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Zap size={16} className="fill-blue-400/20" />
            <span>Workflow Revolution</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Work</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl break-keep mx-auto">
            단순한 시스템 구축을 넘어,<br className="md:hidden" /> 비즈니스의 체질을 바꾸는 완벽한 워크플로우를 설계합니다.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mb-24 md:mb-32 text-left">
            {/* Methodology Bento Box */}
            <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden text-left flex flex-col md:flex-row gap-8 items-start">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
              <div className="flex-1 z-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">Our Methodology</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed break-keep font-light">
                  단순히 최신 기술을 도입하는 도구적 접근을 넘어섭니다. 업무의 본질을 되물어보고, AI가 가장 파괴적인 혁신을 일으킬 수 있는 포인트를 정확히 짚어냅니다. 기획부터 디자인, 개발이 동시에 이루어지는 <strong className="text-white font-semibold">'바이브 코딩(Vibe Coding)'</strong>을 통해 프로젝트 리드타임을 혁신적으로 줄이고 전에 없던 속도를 경험하세요.
                </p>
              </div>
              <div className="w-full md:w-1/3 z-10 p-6 bg-black/40 rounded-2xl border border-white/5">
                <h4 className="text-sm font-semibold text-blue-400 mb-4 tracking-wider uppercase">Key Focus</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-300"><ChevronRight size={14} className="text-indigo-400"/> 파괴적 혁신 포인트 발굴</li>
                  <li className="flex items-center gap-3 text-sm text-gray-300"><ChevronRight size={14} className="text-indigo-400"/> 바이브 코딩 프로세스</li>
                  <li className="flex items-center gap-3 text-sm text-gray-300"><ChevronRight size={14} className="text-indigo-400"/> 리드타임 혁신적 단축</li>
                  <li className="flex items-center gap-3 text-sm text-gray-300"><ChevronRight size={14} className="text-indigo-400"/> 고부가가치 창출</li>
                </ul>
              </div>
            </div>
          </div>

        {/* Section 2: Implementation Process */}
        <section className="relative" ref={processContainerRef}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
              AI Implementation Process
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              성공적인 AI 파트너십을 위한 아이파트너즈의 5단계 여정
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated SVG Line connecting the steps */}
            <div className="absolute top-[50px] bottom-[50px] left-[28px] md:left-1/2 -translate-x-1/2 w-4 hidden md:block z-0 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 16 100" width="16" height="100%">
                <defs>
                  <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                
                {/* Background track */}
                <line x1="8" y1="0" x2="8" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                
                {/* Scroll based filled line (Base Progress) */}
                <motion.line 
                  x1="8" y1="0" x2="8" y2="100%" 
                  stroke="rgba(255,255,255,0.15)" 
                  strokeWidth="2" 
                  style={{ pathLength: scrollYProgress }}
                  className="origin-top"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Glowing Flowing Energy core */}
                <motion.line 
                  x1="8" y1="0" x2="8" y2="100%" 
                  stroke="url(#scrollGradient)" 
                  strokeWidth="3" 
                  strokeDasharray="60 140" 
                  animate={{ strokeDashoffset: [0, -200] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  vectorEffect="non-scaling-stroke"
                />

                {/* Glowing Flowing Energy bloom */}
                <motion.line 
                  x1="8" y1="0" x2="8" y2="100%" 
                  stroke="url(#scrollGradient)" 
                  strokeWidth="8" 
                  strokeDasharray="60 140" 
                  animate={{ strokeDashoffset: [0, -200] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="blur-[6px] opacity-60"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-6 md:space-y-12 relative z-10">
              {contents.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div 
                    key={step.id}
                    variants={fadeIn}
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 group`}
                  >
                    {/* Left Side (Text for even, spacer for odd) */}
                    <div className={`w-full md:w-1/2 flex flex-col items-start ${isEven ? 'md:items-end md:text-right' : 'md:order-3'}`}>
                      <div className={`p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-${step.color.split('-')[1]}-500/10 ${step.borderGlow} relative overflow-hidden w-full`}>
                        <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${step.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full`}></div>
                        
                        <div className={`text-xs font-mono font-bold tracking-widest ${step.color} mb-3 flex items-center gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          STEP {step.id}
                        </div>
                        <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-2">
                          {step.title}
                        </h3>
                        <p className={`text-sm font-semibold mb-4 ${step.color}`}>
                          {step.subtitle}
                        </p>
                        <p className="text-gray-400 leading-relaxed font-light break-keep text-sm md:text-base">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-14 lg:w-20 md:order-2">
                      <div className={`w-14 h-14 rounded-full bg-[#0a0a0a] border-4 border-[#030303] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-${step.color.split('-')[1]}-500/30`}>
                        <Icon size={24} className={step.color} />
                      </div>
                    </div>

                    {/* Right Side Spacer */}
                    <div className={`w-full md:w-1/2 hidden md:block ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

      </div>
      <NextExperience />
    </div>
  );
}
