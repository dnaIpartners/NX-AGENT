import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { User, Activity, Clock, CheckCircle2, Box, Layers, Component, Circle, Database, Hexagon, Shield, Globe, Sparkles, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorks() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const fullText = "웹사이트 리뉴얼 프로젝트를 기획 중인데. AI AGENT를 활용한 단계별 업무 절차를 안내해 줘.";

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;
    let timer: NodeJS.Timeout;

    const runLoop = async () => {
      while (isMounted) {
        // Reset state for new loop
        setDisplayedText('');
        setIsTyping(true);
        setShowResponse(false);
        setIsAiThinking(false);

        // Initial delay before typing starts
        await new Promise(r => { timer = setTimeout(r, 600); });
        if (!isMounted) break;

        // Type character by character
        for (let i = 0; i <= fullText.length; i++) {
          if (!isMounted) break;
          setDisplayedText(fullText.slice(0, i));
          await new Promise(r => { timer = setTimeout(r, 50); });
        }
        if (!isMounted) break;

        // Start thinking indicator
        setIsTyping(false);
        setIsAiThinking(true);
        await new Promise(r => { timer = setTimeout(r, 1200); });
        if (!isMounted) break;

        // Show response
        setIsAiThinking(false);
        setShowResponse(true);

        // Wait a few seconds before restarting loop
        await new Promise(r => { timer = setTimeout(r, 6000); });
      }
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isInView]);

  return (
    <>
      {/* Node Convergence Section */}
      <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-white overflow-hidden flex flex-col items-center justify-center border-t border-gray-100">
        <motion.div 
          className="text-center z-10 mb-4 md:mb-8 px-6 w-full mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-[64px] font-display font-medium tracking-tight leading-[1.1] text-[#1a202c]">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Empowering Brands to <br className="hidden md:block" />Work Smarter with AI</span>
          </h2>
          
          {/* AI Dashboard Background Wrapper */}
          <motion.div 
            className="mt-12 mx-auto max-w-[1000px] bg-gray-50 rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden flex h-[540px] md:h-[600px] relative text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Background Glows for Dashboard */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-rose-400/20 blur-[100px] rounded-full"></div>
              <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] bg-blue-400/20 blur-[120px] rounded-full"></div>
            </div>

            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-[260px] bg-white/60 backdrop-blur-xl border-r border-gray-200/50 p-5 relative z-10">
              {/* Window Controls */}
              <div className="flex gap-2 mb-4 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-green-500/20"></div>
              </div>
              
              <div className="flex items-center gap-3 mb-5 mt-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-900 font-bold tracking-wide">IPARTNERS AI</span>
              </div>

              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 text-sm py-2.5 px-4 rounded-xl flex items-center gap-2.5 transition-colors mb-6 border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-indigo-500" /> <span className="font-semibold">New Chat</span>
              </button>

              <div className="flex flex-col gap-1 overflow-y-auto pr-2 pb-4">
                {[
                  'Renewal Project Ideas',
                  'Competitor Analysis',
                  'Generate UI Concepts',
                  'Write UX Copywriting',
                  'Marketing Strategy',
                  'Review Code Baseline',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 cursor-pointer text-sm py-2.5 px-3 rounded-lg transition-colors group">
                    <MessageSquare className="w-4 h-4 opacity-50 group-hover:opacity-80" />
                    <span className="truncate font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 relative flex flex-col items-center p-6 md:p-10 z-10 overflow-y-auto w-full">
              {/* Floating Chat Interface Container */}
              <div className="w-full max-w-2xl mt-4 md:mt-10 mx-auto">
                {/* Temporary AI Chat Interface */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_16px_40px_rgb(0,0,0,0.15)] border border-gray-100 p-5 md:p-6 text-left relative z-20"
                >
                  <div className="flex flex-col gap-5 min-h-[180px]">
                    {/* User Message */}
                    <div className="flex gap-3 md:gap-4 items-start justify-end">
                      <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-[15px] font-medium text-gray-800 shadow-sm min-h-[44px] relative border border-gray-200/50 break-keep">
                        {displayedText}
                        {isTyping && <span className="inline-block w-[3px] h-4 ml-1 align-middle bg-blue-500 animate-pulse"></span>}
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                      </div>
                    </div>

                    {/* AI Response */}
                    <AnimatePresence>
                      {(isAiThinking || showResponse) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-3 md:gap-4 items-start"
                        >
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-md">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                          <div className="bg-indigo-50/60 rounded-2xl rounded-tl-sm px-4 py-3 md:px-5 md:py-4 text-sm md:text-[15px] text-gray-800 border border-indigo-100/50 leading-relaxed shadow-sm min-h-[44px] min-w-[60px]">
                            {isAiThinking ? (
                              <div className="flex gap-1.5 h-full items-center py-2 px-1">
                                <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                                <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                                <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                              </div>
                            ) : (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="break-keep">
                                <p className="mb-2 font-semibold text-indigo-900">네, 프로젝트 진행을 위한 AI NX 에이전트 기반의 3단계 업무 절차를 안내해 드립니다.</p>
                                <ul className="space-y-1.5 text-gray-600">
                                  <li className="flex gap-2 items-start"><span className="text-indigo-500 mt-0.5">•</span> <span><strong>1단계 (분석 및 전략):</strong> 기존 웹사이트 데이터 수집 및 브랜드 개선점 도출</span></li>
                                  <li className="flex gap-2 items-start"><span className="text-indigo-500 mt-0.5">•</span> <span><strong>2단계 (기획 및 설계):</strong> AI를 활용한 메인 시나리오 및 와이어프레임 초안 자동 생성</span></li>
                                  <li className="flex gap-2 items-start"><span className="text-indigo-500 mt-0.5">•</span> <span><strong>3단계 (구현 및 최적화):</strong> 디자인 에셋 추출 및 프론트엔드 코드 자동 퍼블리싱</span></li>
                                </ul>
                                <p className="mt-3 text-indigo-800 font-medium">1단계 분석을 위해 기존 웹사이트 URL이나 전략 문서(PDF)를 업로드해 주시겠어요?</p>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

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
            <motion.button 
              onClick={() => navigate('/nx-agent-architecture')}
              className="bg-black text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-3 md:px-8 md:py-4 rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.3)] cursor-pointer"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              IPARTNERS NX
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
