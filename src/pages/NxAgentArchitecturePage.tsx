import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ShieldCheck, Database, Cpu, Hammer,
  LayoutTemplate, MessageSquare, Code2, Paintbrush,
  Workflow, PenTool, Bot, Sparkles,
  CheckCircle2, Users, Layers, ArrowRight, ChevronRight, ChevronDown,
  Lightbulb, Search, Tag
} from 'lucide-react';
import SEO from '../components/SEO';

export default function NxAgentArchitecturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spectrumRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: spectrumScrollY } = useScroll({
    target: spectrumRef,
    offset: ["start 80%", "end 50%"]
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
        title="NX Agent Architecture" 
        description="단순한 기술 도입을 넘어, 복잡한 요구사항을 지능적으로 조율하여 기업 고유의 NX AI를 설계합니다." 
      />
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-24 md:pt-28 pb-12 md:pb-16">
        
        {/* Section 1: Hero */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/15 text-emerald-400 text-xs md:text-sm font-semibold tracking-wide mb-6 uppercase border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Tag size={16} className="fill-emerald-400/20" />
            <span>[개념 설명서] AI 서비스 구축 가이드</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold tracking-tight text-white mb-8 leading-[1.1]">
            NX AGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Architecture</span>
          </h1>
           <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl break-keep mx-auto">
            단순한 기술 도입을 넘어, 복잡한 요구사항을 지능적으로 조율하여 기업 고유의 <strong className="text-white font-medium">NX AI (AI NEXT Experience)</strong>를 설계합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
            <div className="text-left w-full relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">AI 서비스의 새로운 엔진, IPARTNERS와 NX AGENT</h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed break-keep font-medium">
                현대 비즈니스에서 AI 서비스의 성패는 복잡한 요구사항을 얼마나 지능적으로 조율하여 신속하게 해결책을 제시하느냐에 달려 있습니다. 아이파트너즈의 AI 서비스 브랜드 <strong className="text-blue-400">IPARTNERS</strong>는 이 '지능적 조율'을 위해 탄생했으며, 그 중심에는 멀티 에이전트 시스템을 구동하는 <strong className="text-indigo-400">NX AGENT 플랫폼</strong>이 있습니다.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Core Layers */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">NX AGENT 아키텍처의 핵심 레이어</h2>
            <p className="text-gray-400 text-lg">튼튼한 보안 위에서 데이터가 유기적으로 흐르고 지능형 엔진이 실행되는 구조</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Security */}
            <motion.div variants={fadeIn} className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8 hover:bg-emerald-900/30 hover:border-emerald-500/40 transition-all group">
              <ShieldCheck className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">보안 및 거버넌스</h3>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">안전한 성벽</span>
              </div>
              <p className="text-sm text-emerald-400/80 mb-5 font-mono bg-emerald-950/50 inline-block px-2 py-1 rounded">MCP (Security Layer)</p>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">보안이 담보되지 않은 AI는 기업용으로 부적합하기에, 모든 데이터 흐름을 철저히 통제하고 보호합니다.</p>
            </motion.div>

            {/* Data */}
            <motion.div variants={fadeIn} className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-8 hover:bg-blue-900/30 hover:border-blue-500/40 transition-all group">
              <Database className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">데이터 저장 및 관리</h3>
                <span className="text-xs font-bold px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)]">지혜의 도서관</span>
              </div>
              <p className="text-sm text-blue-400/80 mb-5 font-mono bg-blue-950/50 inline-block px-2 py-1 rounded">Internal/Vector DB, Knowledge Base, Storage</p>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">AI가 환각(Hallucination) 없이 정확한 근거에 기반하여 답변할 수 있도록 전문 지식을 구조화하여 저장합니다.</p>
            </motion.div>

            {/* Engine */}
            <motion.div variants={fadeIn} className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-8 hover:bg-indigo-900/30 hover:border-indigo-500/40 transition-all group">
              <Cpu className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">지능형 실행 엔진</h3>
                <span className="text-xs font-bold px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.2)]">숙련된 전문가의 뇌</span>
              </div>
              <p className="text-sm text-indigo-400/80 mb-5 font-mono bg-indigo-950/50 inline-block px-2 py-1 rounded">AI/ML (sLLM, Local LLM), External APIs</p>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">외부 인공지능과 특화된 자체 모델을 결합해 복잡한 추론과 고차원적인 문제 해결을 수행합니다.</p>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeIn} className="bg-orange-950/20 border border-orange-500/20 rounded-2xl p-8 hover:bg-orange-900/30 hover:border-orange-500/40 transition-all group">
              <Hammer className="text-orange-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">분석 및 지원 도구</h3>
                <span className="text-xs font-bold px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.2)]">정밀한 도구 상자</span>
              </div>
              <p className="text-sm text-orange-400/80 mb-5 font-mono bg-orange-950/50 inline-block px-2 py-1 rounded">Workflow Engine, Analytics, Design System</p>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">업무의 흐름을 분석하고 시각화하며, 외부 시스템과 원활하게 연결해 실제적인 실행력을 확보합니다.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Section 3: The Spectrum of Control (Full Width) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        className="mb-16 md:mb-20 relative w-full"
      >
        <motion.div variants={fadeIn} className="mb-14 text-center max-w-[1200px] mx-auto px-6 hidden md:block">
          <h2 className="hidden md:block text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 tracking-tight leading-snug break-keep">
            지배력의 유연한 전환 (The Spectrum of Control):<br/>
            AI의 속도에서 인간의 깊이로
          </h2>
        </motion.div>

        {/* Full width container */}
        <div ref={spectrumRef} className="w-full relative bg-[#06060c] border-y border-white/5 py-12 md:py-20 overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Mobile Overlay Title */}
          <div className="absolute top-8 left-0 z-50 text-white! mix-blend-difference font-pretendard text-2xl leading-snug font-bold w-full text-center md:hidden px-4">
            지배력의 유연한 전환 (The Spectrum of Control):<br/>
            AI의 속도에서 인간의 깊이로
          </div>
          
          {/* Dark background gradient to mimic the presentation slide */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#09112a] to-[#040812] pointer-events-none z-0"></div>

           {/* Glowing Wave SVG (Background overlay) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex items-center overflow-visible">
             <svg className="w-[120vw] h-[300px] absolute -left-[10vw]" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <defs>
                   <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />      {/* Sky Blue */}
                      <stop offset="25%" stopColor="#3b82f6" />      {/* Tech Blue */}
                      <stop offset="60%" stopColor="#818cf8" />      {/* Indigo transition */}
                      <stop offset="100%" stopColor="#f59e0b" />     {/* Gold/Orange */}
                   </linearGradient>
                   <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                   <filter id="waveGlowStrong" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="35" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                </defs>
                
                {/* Thickest background glow */}
                <motion.path d="M -100 180 C 300 80, 500 220, 800 180 C 1000 150, 1100 80, 1300 0"
                      fill="none"
                      stroke="url(#waveGradient)"
                      strokeWidth="32"
                      filter="url(#waveGlowStrong)"
                      opacity="0.75" 
                      style={{ pathLength: spectrumScrollY }}
                />

                {/* Medium mid-glow layer */}
                <motion.path d="M -100 180 C 300 80, 500 220, 800 180 C 1000 150, 1100 80, 1300 0"
                      fill="none"
                      stroke="url(#waveGradient)"
                      strokeWidth="14"
                      filter="url(#waveGlow)"
                      opacity="0.9" 
                      style={{ pathLength: spectrumScrollY }}
                />
                      
                {/* Core sharp line */}
                <motion.path d="M -100 180 C 300 80, 500 220, 800 180 C 1000 150, 1100 80, 1300 0"
                      fill="none"
                      stroke="url(#waveGradient)"
                      strokeWidth="5"
                      filter="url(#waveGlow)" 
                      style={{ pathLength: spectrumScrollY }}
                />
             </svg>
          </div>

          {/* Three Columns Container - Glassmorphism */}
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 mb-4 text-left">
            
            {/* Col 1 */}
            <div className="md:p-8 p-6 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-500">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-0 leading-snug">AI Ownership</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-gray-300 mb-6">(자연어 제작과정)</p>
              <ul className="space-y-3.5 text-sm md:text-[15px] text-gray-300/90 font-medium break-keep">
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-blue-400"></div> 데이터 분석
                </li>
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-blue-400"></div> 시나리오 초안 설계
                </li>
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-blue-400"></div> 범용 코드 퍼블리싱
                </li>
                <li className="flex gap-3 text-left">
                  <div className="mt-[6px] min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-blue-400"></div> 베이직 에셋 생성 (BUILD/CREATE)
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="md:p-8 p-6 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-500">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-0 leading-snug">Human in the loop</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-gray-300 mb-6">(전문가 참여)</p>
              <ul className="space-y-3.5 text-sm md:text-[15px] text-gray-300/90 font-medium break-keep">
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-[#6db2ff]"></div> RAG 파인튜닝
                </li>
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-[#6db2ff]"></div> 프롬프트 디자인 제어
                </li>
                <li className="flex gap-3 text-left">
                  <div className="mt-[6px] min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-[#6db2ff]"></div> UI 피그마 연동 (AGENT)
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:p-8 p-6 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-500">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-0 leading-snug">Expert Ownership</h3>
              <p className="text-[16px] md:text-[18px] font-bold text-gray-300 mb-6">(전문가 주도)</p>
              <ul className="space-y-3.5 text-sm md:text-[15px] text-gray-300/90 font-medium break-keep">
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-amber-400"></div> 최종 UX 전략 수립
                </li>
                <li className="flex items-center gap-3">
                  <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-amber-400"></div> 비즈니스 맥락 최적화
                </li>
                <li className="flex gap-3 text-left">
                  <div className="mt-[6px] min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-amber-400"></div> 최고 품질 검수 (CRAFT)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Section 3.5: Ideal AI Collaboration Process */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        className="mb-16 md:mb-20 relative w-full max-w-[1200px] mx-auto px-6 mt-12 md:mt-16"
      >
        <motion.div variants={fadeIn} className="mb-16 md:mb-20 text-center md:text-left border-b border-white/10 pb-8">
          {/* Desktop Title */}
          <h2 className="hidden md:block text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-snug break-keep">
           인력을 대체하는 AI가 아닌, 역량을 증폭시키는 AI 파트너  협업 프로세스 모델
          </h2>
          {/* Mobile Title */}
          <div className="text-white! mix-blend-difference font-pretendard text-2xl leading-snug font-bold w-full text-center mb-6 md:hidden px-4">
           인력을 대체하는 AI가 아닌, 역량을 증폭시키는 AI 파트너  협업 프로세스 모델
          </div>
          <p className="text-gray-300 text-base md:text-xl max-w-4xl leading-relaxed break-keep">
          AI는 단순한 도구를 넘어 전 팀원의 역량을 격상시키는 든든한 파트너입니다.  <br className="hidden md:block"/>
          <strong className="text-white">1년 차가 5년 차의 시야를 갖고, 5년 차가 10년 차의 깊이</strong>를 가지게 되는 지능형 워크플로우를 통해
          , 더 깊이 있는 통찰과 압도적인 결과물로 고객사의 비즈니스를 이끕니다."
            
           
          </p>
        </motion.div>

        {/* Desktop Flow Diagram (Infinity Loop) */}
        <div className="hidden lg:block relative w-full flex items-center justify-center -mx-4 md:mx-0 w-screen max-w-[1400px] left-1/2 -translate-x-1/2 mt-12 mb-16">
          <div className="relative w-full  aspect-[10/4]">
            <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none transform scale-110">
              <defs>
                <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="30%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="70%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              {/* Thick background track */}
              <path 
                d="M 500 200 C 650 50, 900 50, 900 200 C 900 350, 650 350, 500 200 C 350 50, 100 50, 100 200 C 100 350, 350 350, 500 200 Z" 
                fill="none" 
                stroke="rgba(255,255,255,0.03)" 
                strokeWidth="120" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inside highlight flow */}
              <path 
                d="M 500 200 C 650 50, 900 50, 900 200 C 900 350, 650 350, 500 200 C 350 50, 100 50, 100 200 C 100 350, 350 350, 500 200 Z" 
                fill="none" 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="20" 
              />
              {/* Animated line */}
              <motion.path 
                d="M 500 200 C 650 50, 900 50, 900 200 C 900 350, 650 350, 500 200 C 350 50, 100 50, 100 200 C 100 350, 350 350, 500 200 Z" 
                fill="none" 
                stroke="url(#infinityGradient)" 
                strokeWidth="3" 
                strokeDasharray="20 40" 
                animate={{ strokeDashoffset: [0, -120] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Nodes */}
            {/* Left Node: 1. Human */}
            <motion.div variants={fadeIn} className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] rounded-full bg-[#0a1128] border-2 border-blue-600/50 flex flex-col items-center justify-center p-6 xl:p-8 shadow-[0_0_50px_rgba(37,99,235,0.2)] backdrop-blur-md relative group">
                 <div className="absolute inset-2 border border-blue-400/30 rounded-full border-dashed group-hover:rotate-180 transition-transform duration-1000"></div>
                 <Lightbulb className="w-12 h-12 xl:w-16 xl:h-16 text-blue-400 mb-3" />
                 <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2">1. Human</h3>
                 <p className="text-blue-200 text-[15px] xl:text-[17px] text-center leading-snug break-keep">기획안 및 명령어 도출</p>
              </div>
            </motion.div>

            {/* Center Node: 2. AI */}
            <motion.div variants={fadeIn} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-[280px] h-[280px] xl:w-[340px] xl:h-[340px] rounded-full bg-[#061a15] border-2 border-emerald-500/50 flex flex-col items-center justify-center p-8 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-md ring-4 ring-emerald-900/40 relative group">
                 <div className="absolute inset-3 border-2 border-emerald-400/30 rounded-full border-dashed animate-[spin_15s_linear_infinite]"></div>
                 <Cpu className="w-14 h-14 xl:w-16 xl:h-16 text-emerald-400 mb-2 relative z-10" />
                 <div className="text-emerald-400 text-[12px] xl:text-[14px] font-bold tracking-widest mb-2 bg-emerald-900/50 py-1 px-4 rounded-full relative z-10">초고속 생성</div>
                 <h3 className="text-white text-3xl xl:text-4xl font-bold mb-3 relative z-10">2. AI</h3>
                 <p className="text-emerald-100 text-[16px] xl:text-[18px] text-center leading-snug break-keep relative z-10">, 에셋, 코드<br/> 구현</p>
              </div>
            </motion.div>

            {/* Right Node: 3. Human */}
            <motion.div variants={fadeIn} className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] rounded-full bg-[#150f24] border-2 border-purple-500/50 flex flex-col items-center justify-center p-6 xl:p-8 shadow-[0_0_50px_rgba(168,85,247,0.2)] backdrop-blur-md relative group">
                 <div className="absolute inset-2 border border-purple-400/30 rounded-full border-dashed group-hover:rotate-180 transition-transform duration-1000"></div>
                 <Search className="w-12 h-12 xl:w-16 xl:h-16 text-purple-400 mb-3" />
                 <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2">3. Human</h3>
                 <p className="text-purple-200 text-[15px] xl:text-[17px] text-center leading-snug break-keep">논리적 허점 검증 및<br/>디테일 고도화</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Flow Diagram (Stack vertically with connecting dashed lines) */}
        <div className="lg:hidden flex flex-col items-center w-full mt-12 relative pt-6 pb-6">
          {/* SVG Vertical Flow Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-gradient-to-b from-blue-600 via-emerald-500 to-purple-600 -translate-x-1/2 z-0 opacity-50"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 z-0 border-l-4 border-dashed border-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>

          {/* Mobile Node 1 */}
          <motion.div variants={fadeIn} className="relative z-10 w-[240px] h-[240px] rounded-full bg-[#0a1128] border-2 border-blue-600/50 flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(37,99,235,0.2)] mb-10">
             <div className="absolute inset-2 border border-blue-400/30 rounded-full border-dashed"></div>
             <Lightbulb className="w-12 h-12 text-blue-400 mb-3" />
             <h3 className="text-white text-2xl font-bold mb-2">1. Human</h3>
             <p className="text-blue-200 text-[15px] text-center leading-snug break-keep">기획안 및 명령어 도출</p>
          </motion.div>

          {/* Mobile Node 2 */}
          <motion.div variants={fadeIn} className="relative z-20 w-[280px] h-[280px] rounded-full bg-[#061a15] border-2 border-emerald-500/50 flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(16,185,129,0.3)] ring-4 ring-emerald-900/40 mb-10">
             <div className="absolute inset-3 border-2 border-emerald-400/30 rounded-full border-dashed animate-[spin_15s_linear_infinite]"></div>
             <Cpu className="w-14 h-14 text-emerald-400 mb-3 relative z-10" />
             <div className="text-emerald-400 text-[12px] font-bold tracking-widest mb-1 bg-emerald-900/50 py-1 px-4 rounded-full relative z-10">초고속 생성</div>
             <h3 className="text-white text-3xl font-bold mb-2 relative z-10">2. AI</h3>
             <p className="text-emerald-100 text-[16px] text-center leading-snug break-keep relative z-10">초안, 에셋, 코드<br/>자동 구현</p>
          </motion.div>

          {/* Mobile Node 3 */}
          <motion.div variants={fadeIn} className="relative z-10 w-[240px] h-[240px] rounded-full bg-[#150f24] border-2 border-purple-500/50 flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
             <div className="absolute inset-2 border border-purple-400/30 rounded-full border-dashed"></div>
             <Search className="w-12 h-12 text-purple-400 mb-3" />
             <h3 className="text-white text-2xl font-bold mb-2">3. Human</h3>
             <p className="text-purple-200 text-[15px] text-center leading-snug break-keep">논리적 허점 검증 및<br/>디테일 고도화</p>
          </motion.div>
        </div>

      </motion.section>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-16">
  
        {/* Section 4-1: BUILD Process Detail */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeIn} className="mb-14">
            {/* Desktop Title */}
            <h2 className="hidden md:block text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-snug">
             AI의 지능과 전문가의 경험을 조율하다, 자연어 기반의 지능형 워크플로우.
            </h2>
            {/* Mobile Title */}
            <div className="text-white! mix-blend-difference font-pretendard text-2xl leading-snug font-bold w-full text-center mb-4 md:hidden px-4">
             AI의 지능과 전문가의 경험을 조율하다, 자연어 기반의 지능형 워크플로우.
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl break-keep">
             아이파트너즈의 축적된 컨설팅 노하우와 AI의 압도적 실행력을 결합한 통합 시스템입니다.<br className="hidden md:block"/> 자연어 기반의 소통을 통해 의사결정의 병목을 지워내며,<br className="hidden md:block"/>AI 에이전트와 실무 전문가가 유기적으로 협력하여 전에 없던 속도로 차세대 디지털 서비스를 구축합니다.

            </p>
          </motion.div>

          <div className="hidden lg:block w-full relative bg-[#060608]/80 border border-white/5 rounded-[2rem] p-8 md:p-14 overflow-hidden shadow-2xl backdrop-blur-sm -mx-4 md:mx-0 min-w-full md:min-w-fit overflow-x-auto custom-scrollbar">
            {/* Background Reference Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

            <div className="relative min-w-[1000px] h-[460px] max-w-6xl mx-auto mt-8">
              {/* ================= BACKGROUND LINES ================= */}
              {/* Main Top Line */}
              <div className="absolute top-[220px] left-[10%] right-[10%] h-[4px] bg-blue-600/60 z-0 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              {/* Branch Line */}
              <div className="absolute top-[220px] left-[55%] right-[10%] h-[140px] border-l-[4px] border-b-[4px] border-blue-600/60 rounded-bl-[2rem] z-0 -translate-x-[2px] shadow-[-5px_5px_15px_rgba(37,99,235,0.4)]"></div>

              {/* ================= LABELS ================= */}
              {/* ASSIST AGENT Label Bridge (10% to 25%) */}
              <div className="absolute top-[130px] left-[10%] w-[15%]">
                 <div className="text-center font-medium text-[13px] text-gray-400 tracking-widest uppercase pb-2">ASSIST AGENT</div>
                 <div className="relative border-t border-gray-600/50 h-4 border-l border-r"></div>
              </div>

              {/* UX AGENT, ASSIST AGENT Label */}
              <div className="absolute top-[115px] left-[40%] -translate-x-1/2">
                 <div className="text-center font-medium text-[13px] text-gray-400 tracking-widest uppercase pb-2">UX AGENT,<br/>ASSIST AGENT</div>
                 <div className="relative border-l border-gray-600/50 h-4 mx-auto w-px"></div>
              </div>

              {/* AI Ownership Label */}
              <div className="absolute top-[85px] left-[55%] -translate-x-1/2">
                 <div className="text-center font-bold text-[14px] text-yellow-500 tracking-wide pb-2 whitespace-nowrap">AI Ownership - 자연어 제작과정</div>
                 <div className="relative border-l border-yellow-500/50 h-[55px] mx-auto w-px"></div>
              </div>

              {/* CODE AGENT, UI AGENT Label Bridge (75% to 90%) */}
              <div className="absolute top-[115px] left-[75%] w-[15%]">
                 <div className="text-center font-medium text-[13px] text-gray-400 tracking-widest uppercase pb-2">CODE AGENT,<br/>UI AGENT</div>
                 <div className="relative border-t border-gray-600/50 h-4 border-l border-r"></div>
              </div>

              {/* Human in the loop Label */}
              <div className="absolute top-[285px] left-[82.5%] -translate-x-1/2">
                 <div className="text-center font-bold text-[14px] text-emerald-400 tracking-wide whitespace-nowrap">Human in the loop - 전문가 참여</div>
              </div>

              {/* ================= NODES ================= */}
              {/* Node 1: 문의 */}
              <div className="absolute top-[220px] left-[10%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-blue-900/50">
                 <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="font-bold text-white text-[15px]">문의</span>
                 </div>
              </div>

              {/* Node 2: 분석 */}
              <div className="absolute top-[220px] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-blue-900/50">
                 <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="font-bold text-white text-[15px]">분석</span>
                 </div>
              </div>

              {/* Node 3: 설계 */}
              <div className="absolute top-[220px] left-[40%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-blue-900/50">
                 <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="font-bold text-white text-[15px]">설계</span>
                 </div>
              </div>

              {/* Node 4: 프롬프트 디자인 (Center Large Node) */}
              <div className="absolute top-[220px] left-[55%] -translate-x-1/2 -translate-y-1/2 z-20 w-[150px] h-[150px] rounded-full p-[6px] bg-[#0a192f] border-2 border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.2)] flex items-center justify-center relative group">
                 <div className="w-full h-full rounded-full border border-blue-400 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] shadow-[inset_0_0_30px_rgba(59,130,246,0.5)] flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-[18px] leading-tight text-white mb-1">프롬프트</span>
                    <span className="font-bold text-[18px] leading-tight text-yellow-300">디자인</span>
                 </div>
                 {/* Decorative rings */}
                 <div className="absolute inset-[2px] border-2 border-blue-400/30 rounded-full border-dashed pointer-events-none animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute top-1/2 right-[-28px] w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-blue-500/80 border-b-[8px] border-b-transparent -translate-y-1/2 z-30 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              </div>

              {/* Node 5: 퍼블리싱 */}
              <div className="absolute top-[220px] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-blue-900/50">
                 <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="font-bold text-white text-[15px]">퍼블리싱</span>
                 </div>
              </div>

              {/* Node 6: 프로그래밍 */}
              <div className="absolute top-[220px] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-blue-900/50">
                 <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <span className="font-bold text-white text-[15px]">프로그래밍</span>
                 </div>
              </div>

              {/* Node 7: UI (Lower) */}
              <div className="absolute top-[360px] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-emerald-900/50">
                 <div className="w-full h-full rounded-full border border-emerald-500/50 bg-[#061a15] shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center">
                    <span className="font-bold text-emerald-100 text-[15px]">UI</span>
                 </div>
              </div>

              {/* Node 8: Figma (Lower) */}
              <div className="absolute top-[360px] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100px] h-[100px] rounded-full p-[4px] bg-[#060608] border-2 border-emerald-900/50">
                 <div className="w-full h-full rounded-full border border-emerald-500/50 bg-[#061a15] shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center">
                    <span className="font-bold text-emerald-100 text-[15px]">Figma</span>
                 </div>
              </div>
              
            </div>
          </div>

          {/* Mobile BUILD Process Detail */}
          <div className="lg:hidden relative bg-[#060608]/80 border border-white/5 rounded-[2rem] p-6 shadow-2xl backdrop-blur-sm mt-8 w-full">
            {/* Background Reference Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none rounded-[2rem] overflow-hidden"></div>

            <div className="relative flex flex-col items-center py-4">
              {/* Central Background Line */}
              <div className="absolute top-[20px] bottom-[210px] left-1/2 w-[2px] bg-blue-600/60 -translate-x-1/2 z-0"></div>

              {/* Step 1 & 2 */}
              <div className="text-center font-bold text-[11px] text-gray-400 tracking-widest uppercase mb-4 bg-[#060608] px-3 relative z-10 py-1 rounded-full border border-gray-800">ASSIST AGENT</div>
              
              <div className="flex flex-col gap-6 w-full items-center mb-8 relative z-10">
                <div className="w-[80px] h-[80px] rounded-full p-[3px] bg-[#060608] border-2 border-blue-900/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                   <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] flex items-center justify-center">
                      <span className="font-bold text-white text-[14px]">문의</span>
                   </div>
                </div>
                <div className="w-[80px] h-[80px] rounded-full p-[3px] bg-[#060608] border-2 border-blue-900/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                   <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] flex items-center justify-center">
                      <span className="font-bold text-white text-[14px]">분석</span>
                   </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center font-bold text-[11px] text-gray-400 tracking-widest uppercase mb-4 bg-[#060608] px-3 relative z-10 py-1 rounded-full border border-gray-800">UX AGENT, ASSIST AGENT</div>
              <div className="flex flex-col gap-6 w-full items-center mb-8 relative z-10">
                <div className="w-[80px] h-[80px] rounded-full p-[3px] bg-[#060608] border-2 border-blue-900/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                   <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] flex items-center justify-center">
                      <span className="font-bold text-white text-[14px]">설계</span>
                   </div>
                </div>
              </div>

              {/* Step 4 (Center) */}
              <div className="text-center font-bold text-[12px] text-yellow-500 tracking-wide mb-6 bg-[#060608] px-3 py-1 relative z-10 rounded border border-yellow-900/50">AI Ownership - 자연어 제작과정</div>
              
              <div className="w-[120px] h-[120px] rounded-full p-[4px] bg-[#0a192f] border-2 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center justify-center relative z-20 mb-12">
                 <div className="w-full h-full rounded-full border border-blue-400 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] shadow-[inset_0_0_20px_rgba(59,130,246,0.5)] flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-[14px] leading-tight text-white mb-1">프롬프트</span>
                    <span className="font-bold text-[14px] leading-tight text-yellow-300">디자인</span>
                 </div>
                 <div className="absolute inset-[2px] border-2 border-blue-400/30 rounded-full border-dashed pointer-events-none animate-[spin_20s_linear_infinite]"></div>
              </div>

              {/* Branch Container */}
              <div className="w-full relative mt-4">
                 {/* Connection from Center to Branches */}
                 <div className="absolute -top-[50px] left-1/2 w-[2px] h-[50px] bg-blue-600/60 -translate-x-1/2 z-0"></div>

                 {/* Left Branch: Code/Publish */}
                 <div className="flex flex-col w-full relative z-10">
                   <div className="text-center font-bold text-[11px] text-gray-400 tracking-widest uppercase mb-4 bg-[#060608] px-3 relative w-max mx-auto py-1 rounded-full border border-gray-800">CODE AGENT, UI AGENT</div>
                   {/* Horizontal line for branch 1 */}
                   <div className="absolute top-[60px] left-[20%] right-[20%] h-[2px] bg-blue-600/60 -z-10"></div>
                   
                   <div className="flex justify-between w-full px-6 mb-12 relative z-10">
                      <div className="w-[70px] h-[70px] rounded-full p-[3px] bg-[#060608] border-2 border-blue-900/50">
                         <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] flex items-center justify-center text-[12px] font-bold text-white text-center">퍼블<br/>리싱</div>
                      </div>
                      <div className="w-[70px] h-[70px] rounded-full p-[3px] bg-[#060608] border-2 border-blue-900/50">
                         <div className="w-full h-full rounded-full border border-blue-500/50 bg-[#0f172a] flex items-center justify-center text-[12px] font-bold text-white text-center break-keep">프로<br/>그래밍</div>
                      </div>
                   </div>

                 {/* Right Branch: Expert */}
                   <div className="text-center font-bold text-[12px] text-emerald-400 tracking-wide mb-4 bg-[#060608] px-3 relative w-max mx-auto py-1 rounded border border-emerald-900/50 mt-4">Human in the loop - 전문가 참여</div>
                   {/* Horizontal line for branch 2 */}
                   <div className="absolute bottom-[35px] left-[20%] right-[20%] h-[2px] bg-emerald-600/50 -z-10"></div>
                   
                   <div className="flex justify-between w-full px-6 relative z-10">
                      <div className="w-[70px] h-[70px] rounded-full p-[3px] bg-[#060608] border-2 border-emerald-900/50">
                         <div className="w-full h-full rounded-full border border-emerald-500/50 bg-[#061a15] flex items-center justify-center text-[14px] font-bold text-emerald-100">UI</div>
                      </div>
                      <div className="w-[70px] h-[70px] rounded-full p-[3px] bg-[#060608] border-2 border-emerald-900/50">
                         <div className="w-full h-full rounded-full border border-emerald-500/50 bg-[#061a15] flex items-center justify-center text-[13px] font-bold text-emerald-100">Figma</div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4-2: CREATE Process Detail */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeIn} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
             SHAPE : Style-Lock으로 완성하는 흔들림 없는 브랜드 경험.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl break-keep">
          SHAPE Process는 아이파트너즈만의 Style-Lock 기술을 결합합니다.  전문가의 정밀한 조율을 통해 AI 특유의 불확실성을 지워내고, 디자인 토큰과 에셋을 일관성 있게 구체화하여 오직 고객사 비즈니스에 최적화된 마케팅 에셋과 시안을 생산해 냅니다
..
            </p>
          </motion.div>

          <div className="hidden lg:block w-full relative bg-[#060608]/80 border border-white/5 rounded-[2rem] p-8 md:p-14 overflow-hidden shadow-2xl backdrop-blur-sm -mx-4 md:mx-0 min-w-full md:min-w-fit overflow-x-auto">
            {/* Background Reference Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

            <div className="relative min-w-[900px] flex flex-col gap-20 py-4 max-w-5xl mx-auto">
              
              {/* TOP ROW */}
              <div className="flex items-center gap-12 relative w-full">
                {/* Connector down to center timeline */}
                <div className="absolute left-[300px] top-[100%] h-20 w-px bg-gradient-to-b from-blue-500/50 to-blue-500/0"></div>

                <div className="w-[180px] shrink-0">
                  <h3 className="text-2xl font-bold text-blue-300">AI-Content</h3>
                  <p className="text-[15px] text-gray-400 mt-1">(AI에 적합한 콘텐츠 제공)</p>
                </div>

                <div className="flex-1 bg-[#0b1016] border border-blue-900/40 rounded-[1.25rem] p-6 relative ml-auto transition-colors group">
                  <div className="absolute -top-3 left-6 bg-[#060608] px-3 font-mono text-[11px] font-bold text-blue-400 tracking-widest uppercase border border-blue-900/50 rounded-full">
                    ASSIST AGENT, UX AGENT
                  </div>
                  <div className="flex gap-3">
                    {["Persona", "Journey Map", "Scenario", "Contents", "UX Modeling"].map((tag) => (
                      <div key={tag} className="flex-1 bg-[#151e2b] border border-blue-800/30 rounded-xl py-5 px-3 text-center text-sm font-medium text-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="leading-tight">{tag.includes(' ') ? tag.split(' ').map((w,j) => <span key={j} className="block">{w}</span>) : tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTER HORIZONTAL AXIS */}
              <div className="relative w-full py-4 flex items-center">
                {/* Horizontal Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 -translate-y-1/2"></div>
                
                {/* Flow Title & Arrow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center bg-[#060608] pl-4 pr-2 z-10 text-cyan-400">
                  <span className="font-mono font-bold text-sm tracking-widest mr-2">NX AGENT.CONTENT</span>
                  <div className="flex -space-x-2">
                    <ChevronRight size={22} strokeWidth={3} className="opacity-40" />
                    <ChevronRight size={22} strokeWidth={3} className="opacity-70" />
                    <ChevronRight size={22} strokeWidth={3} />
                  </div>
                </div>

                {/* Central Overlapping Nodes */}
                <div className="w-full flex justify-center relative z-10 ml-[230px]">
                  <div className="flex gap-2 bg-[#060608]/90 border border-cyan-900/50 p-2 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-md">
                    <div className="bg-[#1b2533] px-10 py-6 rounded-xl border border-white/5 flex items-center justify-center min-w-[120px] shadow-inner text-white font-bold text-lg">
                      UI
                    </div>
                    <div className="bg-gradient-to-br from-[#0f231e] to-[#0a1512] px-8 py-6 rounded-xl border border-emerald-900/50 flex items-center justify-center min-w-[140px] shadow-inner text-emerald-300 font-bold text-sm text-center leading-tight">
                      Design<br/>Asset
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex items-center gap-12 relative w-full pt-4">
                {/* Connector up to center timeline */}
                <div className="absolute left-[300px] bottom-[100%] h-24 w-px bg-gradient-to-t from-emerald-500/50 to-emerald-500/0"></div>

                <div className="w-[180px] shrink-0">
                  <h3 className="text-gray-200 text-2xl font-bold tracking-tight">Generated by AI</h3>
                  <p className="text-[15px] text-gray-400 mt-1">(AI에 의한 고품질 콘텐츠 제작)</p>
                </div>

                <div className="flex-1 w-full max-w-[700px] bg-[#0b1016] border border-emerald-900/30 rounded-[1.25rem] p-6 relative ml-auto mr-16 transition-colors group">
                  <div className="absolute -top-3 right-6 bg-[#060608] px-3 font-mono text-[11px] font-bold text-emerald-400 tracking-widest uppercase border border-emerald-900/50 rounded-full">
                    ASSIST AGENT, UI AGENT
                  </div>
                  <div className="flex gap-3">
                    {["Key Visual", "Icons", "Movie"].map((tag) => (
                      <div key={tag} className="flex-1 bg-[#0c1613] border border-emerald-800/30 rounded-xl py-6 px-3 text-center text-[15px] font-bold text-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile CREATE Process Detail */}
          <div className="lg:hidden relative bg-[#060608]/80 border border-white/5 rounded-[2rem] p-6 shadow-2xl backdrop-blur-sm mt-8 w-full flex flex-col gap-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none rounded-[2rem] overflow-hidden"></div>
            
            {/* Box 1 */}
            <div className="bg-[#0b1016] border border-blue-900/40 rounded-2xl p-6 relative z-10 w-full mt-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#060608] px-3 py-0.5 font-mono text-[10px] font-bold tracking-widest text-blue-400 border border-blue-900/50 rounded-full w-max whitespace-nowrap">ASSIST AGENT, UX AGENT</div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-blue-300 text-2xl font-bold">AI-Content</h3>
                <p className="text-[14px] text-gray-400 mt-1">AI에 적합한 콘텐츠 제공</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Persona", "Journey Map", "Scenario", "Contents", "UX Modeling"].map((tag) => (
                  <div key={tag} className="bg-[#151e2b] border border-blue-800/30 rounded-lg py-3 px-3 text-center text-[13px] font-medium text-gray-200 shadow-sm whitespace-nowrap grow">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Path Down */}
            <div className="flex flex-col items-center justify-center h-16 relative z-10 w-full">
              <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 to-cyan-500/40 -z-10"></div>
              <div className="bg-[#060608] px-4 py-1.5 rounded-full border border-cyan-900/50 text-cyan-400 font-mono text-[11px] font-bold flex items-center gap-1 shadow-lg tracking-widest w-max">
                 NX AGENT.CONTENT <ChevronDown size={14} strokeWidth={3} />
              </div>
            </div>

            {/* Center Flow */}
            <div className="flex gap-3 justify-center relative z-10 w-full px-2">
              <div className="bg-[#1b2533] px-8 py-5 rounded-xl border border-white/5 text-white font-bold text-center shadow-inner flex-1 flex items-center justify-center text-lg">
                UI
              </div>
              <div className="bg-gradient-to-br from-[#0f231e] to-[#0a1512] px-4 py-5 rounded-xl border border-emerald-900/50 text-emerald-300 font-bold text-[13px] text-center leading-tight shadow-inner flex-1 flex items-center justify-center">
                Design<br/>Asset
              </div>
            </div>

            {/* Path Down */}
            <div className="flex justify-center h-16 relative z-10 w-full">
              <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/40 to-emerald-500/40 -z-10"></div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#0b1016] border border-emerald-900/30 rounded-2xl p-6 relative z-10 w-full mb-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#060608] px-3 py-0.5 font-mono text-[10px] font-bold tracking-widest text-emerald-400 border border-emerald-900/50 rounded-full w-max whitespace-nowrap">ASSIST AGENT, UI AGENT</div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-gray-200 text-2xl font-bold">Generated by AI</h3>
                <p className="text-[14px] text-gray-400 mt-1">AI에 의한 고품질 콘텐츠 제작</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Key Visual", "Icons", "Movie"].map((tag) => (
                  <div key={tag} className="flex-1 min-w-[30%] bg-[#0c1613] border border-emerald-800/30 rounded-xl py-4 px-2 text-center text-[14px] font-bold text-gray-200 shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.section>

        {/* Section 5: Human in the loop */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="mb-16 md:mb-20 bg-gradient-to-br from-indigo-950/40 via-[#0a0a0d] to-black border border-indigo-500/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <motion.div variants={fadeIn}>
              <div className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-widest mb-6 uppercase border border-white/10">
                Human in the Loop
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.15] tracking-tight">
                AI와 인간의 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">완벽한 협업 앙상블</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-medium leading-relaxed">
                NX AGENT는 AI가 모든 것을 결정하는 블랙박스가 아닙니다. 인간의 통찰력과 AI의 효율성이 공존하는 진정한 협업 플랫폼입니다.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "전문가 주도 (Expert Ownership)", desc: "분석, 설계, 최종 완성의 주요 의사결정 단계에서 인간 전문가가 주도권을 가지고 품질을 최종 검증합니다." },
                  { title: "익숙한 도구와의 연동", desc: "전문가는 평소 사용하던 Figma 등을 통해 디자인을 조율하고, AI는 이를 바탕으로 프롬프트 디자인을 수행합니다." },
                  { title: "자연어 기반 협업", desc: "복잡한 코딩 지식이 없어도 누구나 자연어 대화를 통해 AI와 학습하고 소통하며 서비스 구축 전 과정을 리드합니다." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0"><CheckCircle2 className="text-indigo-400" size={24} /></div>
                    <div>
                      <h4 className="text-lg text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center justify-center relative min-h-[400px]">
              {/* Abstract Collaboration Visual */}
              <div className="relative w-full max-w-md aspect-square rounded-full border border-white/5 flex items-center justify-center shadow-[inset_0_0_100px_rgba(99,102,241,0.05)]">
                <div className="absolute inset-4 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-12 rounded-full border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                  <div className="text-center px-4">
                    <div className="flex justify-center items-center gap-6 mb-6">
                      <div className="bg-white/10 p-5 rounded-2xl shadow-lg border border-white/5"><Users className="text-blue-400" size={36} strokeWidth={1.5}/></div>
                      <ArrowRight className="text-indigo-400/50" size={24} />
                      <div className="bg-white/10 p-5 rounded-2xl shadow-lg border border-white/5"><Sparkles className="text-purple-400" size={36} strokeWidth={1.5}/></div>
                    </div>
                    <p className="text-sm text-indigo-300 font-bold font-mono uppercase tracking-widest mt-6">Collaborative Platform</p>
                    <p className="text-[11px] text-gray-400 mt-3 max-w-[220px] mx-auto leading-relaxed">AI는 반복 작업을 수행하고,<br/>인간은 창의적 결정에 집중합니다.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 6: Summary Checklist */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            {/* Desktop Title */}
            <h2 className="hidden md:block text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">NX AGENT 에이전트 시스템 요약</h2>
            {/* Mobile Title */}
            <div className="text-white! mix-blend-difference font-pretendard text-2xl leading-snug font-bold w-full text-center mb-4 md:hidden px-4">NX AGENT 에이전트 시스템 요약</div>
            <p className="text-gray-400 text-lg">플랫폼의 핵심 가치를 다시 한 번 확인해 보세요</p>
          </motion.div>

          <div className="space-y-4">
            {[
              "멀티 에이전트의 지능적 조율: UX, ASSIST, CODE, UI 에이전트가 협력하여 구축 전 과정을 단축하고 전문성을 극대화한다.",
              "데이터 기반의 독보적 AIX: 내부 지식 베이스와 sLLM, RAG 기술을 활용해 기업 환경에 최적화된 정밀한 콘텐츠를 생성한다.",
              "전문가 중심의 완성도(CRAFT): 'Human in the Loop' 구조를 통해 AI의 생산성과 인간 전문가의 지혜를 결합하여 최상의 품질을 보장한다."
            ].map((text, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 flex gap-5 items-start hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-default group">
                <div className="bg-blue-500/10 p-1.5 rounded-full shrink-0 group-hover:bg-blue-500/20 transition-colors border border-blue-500/20">
                  <CheckCircle2 className="text-blue-400" size={22} />
                </div>
                <p className="text-gray-300 md:text-lg font-medium leading-relaxed mt-0.5">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
