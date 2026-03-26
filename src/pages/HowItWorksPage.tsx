import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import NextExperience from '../components/NextExperience';

const contents = [
  {
    title: "Understand",
    desc: "아이파트너즈는 고객의 이야기를 듣는 것에서 출발합니다. 현재 어떻게 일하고 계신지 업무 환경을 살펴보고, '구축 시간 30% 단축'이나 '사용자 경험 개선' 등 고객에게 가장 필요한 진짜 목표를 명확히 찾습니다. 본격적인 작업에 앞서 비즈니스 상황에 딱 맞는 AI 도입 전략의 밑그림을 그립니다."
  },
  {
    title: "Evaluate Data",
    desc: "강력한 AI는 잘 정리된 데이터에서 나옵니다. 고객사의 기존 데이터와 일하는 방식을 분석해 불편하고 시간이 오래 걸리는 점(Pain Point)들을 찾아냅니다. 그리고 업무 중 어떤 부분에 AI를 적용해야 복잡하지 않으면서도 가장 큰 효과를 얻을 수 있을지 꼼꼼하게 따져보고 최적의 환경을 준비합니다."
  },
  {
    title: "Design Solutions",
    desc: "기획, 디자인, 개발이 따로 놀지 않도록 업무의 경계를 허뭅니다. 아이파트너즈는 '바이브 코딩(Vibe Coding)' 방식을 활용해 기획을 함과 동시에 프로토타입(시안)을 눈으로 확인하며 작업합니다. 새로운 시스템을 만들든 기존 시스템에 연결하든, 고객사 환경에 가장 잘 맞고 쓰기 편한 솔루션을 만듭니다."
  },
  {
    title: "Test",
    desc: "철저한 테스트 없이는 서비스를 오픈하지 않습니다. AI를 활용해 예상치 못한 오류(엣지 케이스)와 보안 취약점을 빠르게 찾아냅니다. 특히 대외비 정보는 마스킹 처리하는 등 아이파트너즈의 엄격한 '보안 3계명'을 지켜 데이터를 가장 안전하게 다루며, 최종적으로 실무 전문가가 한 번 더 꼼꼼하게 퀄리티를 검수합니다."
  },
  {
    title: "Launch & Support",
    desc: "서비스가 오픈된 이후에도 단기 성과에 그치지 않고 오랫동안 신뢰받는 든든한 파트너로서 함께합니다. 시스템이 잘 돌아가는지 관리하는 것을 넘어, 데이터를 분석해 새로운 비즈니스 기회를 찾습니다. 도입한 AI가 제 몫을 다하고 고객사의 비즈니스가 꾸준히 성장할 수 있도록 우리가 먼저 더 나은 방향을 제안해 드립니다."
  }
];

export default function InfiniteStrategiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth momentum for the roller effect (Easing)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
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



      {/* Dec Section - Clean Editorial Style */}
      <section className="py-20 md:py-32 bg-white text-gray-900 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="mb-16 md:mb-24"
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-sm font-bold text-blue-600 tracking-widest mb-6 uppercase"
            >
              Our Philosophy
            </motion.h2>
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl lg:text-[80px] font-display font-medium tracking-tight leading-[1.05] text-gray-900"
            >
              AI Transformation <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Beyond the Hype</span>
            </motion.h3>
          </motion.div>

          <div className="space-y-10 md:space-y-12">
            {/* Item 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="lg:col-span-5 lg:sticky lg:top-20 h-fit"
              >
                <div className="text-[30px] md:text-[50px] font-display font-black text-gray-100 leading-none select-none mb-8 -ml-2">01</div>
                <h3 className="text-sm font-bold text-blue-600 tracking-widest mb-4">AI로 브랜드의 스마트한 혁신을 주도합니다</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.1] text-gray-900">Empowering Brands to Work Smarter with AI</h2>
              </motion.div>
              <div className="lg:col-span-7 space-y-8 text-[18px] md:text-[15px] text-gray-600 leading-[1.8] break-keep font-light pt-8 lg:pt-12">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  아이파트너즈에게 AI는 단순한 트렌드나 수동적인 보조 도구가 아닙니다. 확실한 비즈니스 성과를 창출하는 실질적인 '능동형 에이전트(AI Agent)'입니다. 우리의 목표는 명확합니다. 비즈니스에 진짜 변화를 일으킬 수 있는 곳에 AI를 완벽하게 통합하는 것입니다. 반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 30% 이상 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  우리는 오직 '결과'에 집중합니다. 기획-디자인-개발의 선형적 경계를 허물고 불필요한 마찰(Friction)을 지워냅니다. 소모적인 반복 업무가 사라진 자리에서, 당신의 팀은 오직 혁신과 고부가가치 창출에만 몰입하는 완벽한 지능형 워크플로우(Intelligent Workflow)를 경험하게 될 것입니다.
                </motion.p>
              </div>
            </motion.div>
            
            {/* Item 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="lg:col-span-5 lg:sticky lg:top-20 h-fit"
              >
                <div className="text-[30px] md:text-[50px] font-display font-black text-gray-100 leading-none select-none mb-8 -ml-2">02</div>
                <h3 className="text-sm font-bold text-purple-600 tracking-widest mb-4">비즈니스의 체질을 바꾸는 진짜 AI</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.1] text-gray-900">AI That Drives Impact</h2>
              </motion.div>
              <div className="lg:col-span-7 space-y-8 text-[18px] md:text-[15px] text-gray-600 leading-[1.8] break-keep font-light pt-8 lg:pt-12">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  AI는 비즈니스의 패러다임을 혁신하고 있으며, 그 속도는 점차 가속화되고 있습니다. 아이파트너즈는 고객사의 비즈니스가 각기 다른 고유한 목표와 과제를 안고 있음을 이해합니다. 그렇기 때문에 누구나 쓰는 뻔한 범용 솔루션에 의존하지 않습니다.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  자동화의 첫걸음을 떼려는 고객사부터, 이미 차세대 지능형 서비스(Track 3)를 준비 중인 고객사까지 출발점은 달라도 상관없습니다. 아이파트너즈의 체계적인 'AI 전환(AX) 컨설팅'을 통해 현재 프로세스를 진단하고(As-Is), AI 적용 가능성을 평가하여(Feasibility), 가장 확실하고 측정 가능한 성과를 낼 수 있는 맞춤형 전략(To-Be Design)을 수립해 드립니다.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  생산성은 극대화되고, 운영 비용은 절감되며, 엔드유저(고객)는 확연히 달라진 차세대 경험(NX)을 느끼게 될 것입니다. 인간 전문가의 꿰뚫어 보는 통찰력과 AI의 압도적인 실행력이 결합할 때, 당신의 팀은 더 빠르고 스마트한 의사결정을 내릴 수 있습니다.
                </motion.p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="lg:col-span-5 lg:sticky lg:top-20 h-fit"
              >
                <div className="text-[30px] md:text-[50px] font-display font-black text-gray-100 leading-none select-none mb-8 -ml-2">03</div>
                <h3 className="text-sm font-bold text-indigo-600 tracking-widest mb-4">우리는 AI를 이렇게 구축합니다</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.1] text-gray-900">How We Implement AI</h2>
              </motion.div>
              <div className="lg:col-span-7 space-y-8 text-[18px] md:text-[15px] text-gray-600 leading-[1.8] break-keep font-light pt-8 lg:pt-12">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  우리는 단순한 '시스템 구축'을 넘어 고객사의 비즈니스 본질을 탐구합니다. 실무 전문가가 고객사의 페인포인트(Pain Point)를 깊이 있게 진단하고, AI가 가장 강력한 임팩트를 낼 수 있는 영역에 'i-AX Solution(6대 핵심 에이전트)'을 유기적으로 매핑합니다.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  그 결과물은 고객 문의를 자율적으로 처리하는 지능형 AI 챗봇이 될 수도 있고, 사용자 로그 데이터를 기반으로 한 선제적인 고도화 역제안(Predictive Analytics)이 될 수도 있습니다. 어떤 형태의 솔루션이든, 중요한 것은 "AI가 고객사의 비즈니스를 완벽하게 서브해야 한다"는 점입니다. 우리가 제공하는 모든 시스템은 '보안 3계명(기업용 유료 계정 사용 및 대외비 마스킹 등)' 아래 가장 안전하게 설계되며, 담당자가 바뀌어도 흔들림 없이 유지되는 영구적인 지식 자산으로 조직에 내재화(Systemize)됩니다.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  기획부터 런칭까지 바이브 코딩(Vibe Coding)을 통해 압도적인 속도로 동시 구현해 내지만, 우리의 시선은 언제나 고객사의 장기적인 수익성(ROI)과 무한한 비즈니스 확장(Scale further)에 맞춰져 있습니다. 아이파트너즈는 단기 성과보다 오랫동안 신뢰받는 파트너가 되는 것을 최우선으로 생각합니다.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Interactive Scroll Section */}
      <section ref={containerRef} className="bg-white relative h-[350vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          {/* Converging Lines Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <g stroke="currentColor" strokeWidth="1.5" className="text-black">
                {Array.from({ length: 36 }).map((_, i) => {
                  const angle = (i * 10) * (Math.PI / 180);
                  const x2 = 50 + Math.cos(angle) * 150;
                  const y2 = 50 + Math.sin(angle) * 150;
                  return (
                    <line key={i} x1="0%" y1="50%" x2={`${x2}%`} y2={`${y2}%`} />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Top Centered Heading */}
          <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 w-full px-6 text-center z-20">
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-sans font-extrabold leading-[1.2] tracking-tight text-gray-900 uppercase">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">         
              Here at every step</span>
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto">
              Navigating AI implementation can seem like an insurmountable task. <br className="hidden md:block" />We can make this seamless.
            </p>
          </div>

          {/* Futuristic Glow Sphere & Orbital Rings */}
          <div className="absolute left-[-250px] md:left-[-300px] lg:left-[-400px] top-1/2 -translate-y-1/2 mt-10 md:mt-16 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none z-0" style={{ perspective: "1000px" }}>
            
            {/* Orbit 1: Tilted forward */}
            <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(65deg) rotateY(15deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1px] border-gray-400" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Square */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(-15deg) rotateX(-65deg)" }}>
                      <svg width="12" height="12" viewBox="0 0 18 18">
                        <rect x="1.5" y="1.5" width="15" height="15" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 2: Tilted backward */}
            <div className="absolute top-1/2 left-1/2 w-[85%] h-[85%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(55deg) rotateY(-30deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1.5px] border-gray-400 border-dotted" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(30deg) rotateX(-55deg)" }}>
                      <svg width="12" height="12" viewBox="0 0 18 18">
                        <circle cx="9" cy="9" r="7.5" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 3: Steep vertical tilt */}
            <div className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(75deg) rotateY(45deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1px] border-gray-300" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Triangle */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(-45deg) rotateX(-75deg)" }}>
                      <svg width="14" height="12" viewBox="0 0 20 18">
                        <polygon points="10,1.5 18.5,16.5 1.5,16.5" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <circle cx="10" cy="11" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 4: Almost flat, subtle */}
            <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(30deg) rotateY(-10deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1.5px] border-gray-300 border-dotted" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Square 2 */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(10deg) rotateX(-30deg)" }}>
                      <svg width="12" height="12" viewBox="0 0 18 18">
                        <rect x="1.5" y="1.5" width="15" height="15" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 5: Wide and slow */}
            <div className="absolute top-1/2 left-1/2 w-[125%] h-[125%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(45deg) rotateY(-60deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1.5px] border-gray-300 border-dashed" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Diamond */}
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(60deg) rotateX(-45deg)" }}>
                      <svg width="12" height="12" viewBox="0 0 18 18" style={{ transform: 'rotate(45deg)' }}>
                        <rect x="1.5" y="1.5" width="15" height="15" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="9" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 6: Small and fast */}
            <div className="absolute top-1/2 left-1/2 w-[55%] h-[55%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(85deg) rotateY(10deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1px] border-gray-400" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Small Circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(-10deg) rotateX(-85deg)" }}>
                      <svg width="9" height="9" viewBox="0 0 14 14">
                        <circle cx="7" cy="7" r="5.5" fill="white" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="7" cy="7" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Orbit 7: Steep horizontal */}
            <div className="absolute top-1/2 left-1/2 w-[95%] h-[95%] -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(15deg) rotateY(70deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="w-full h-full rounded-full border-[1px] border-gray-300 border-dotted" style={{ transformStyle: "preserve-3d" }}>
                {/* Node: Triangle 2 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-gray-700" style={{ transformStyle: "preserve-3d" }}>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} style={{ transformStyle: "preserve-3d" }}>
                    <div style={{ transform: "rotateY(-70deg) rotateX(-15deg)" }}>
                      <svg width="14" height="12" viewBox="0 0 20 18" style={{ transform: 'rotate(180deg)' }}>
                        <polygon points="10,1.5 18.5,16.5 1.5,16.5" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        <circle cx="10" cy="11" r="2.5" fill="currentColor"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Glow Sphere Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] flex items-center justify-center">
              {/* Outer Ambient Glow */}
              <div className="absolute inset-[-40%] bg-gradient-to-tr from-purple-400/20 to-blue-400/20 blur-3xl rounded-full" />
              
              {/* Inner Solid/Glass Sphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl rounded-full shadow-[inset_0_0_30px_rgba(139,92,246,0.1),0_10px_40px_rgba(59,130,246,0.1)] border border-white/80 overflow-hidden">
                {/* Internal Color Highlights */}
                <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-purple-300/30 blur-2xl rounded-full mix-blend-multiply" />
                <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-blue-300/30 blur-2xl rounded-full mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/80" />
              </div>
            </div>
          </div>

          <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10 w-full h-full flex items-center justify-end">
            {/* Right Column - Orbital Text */}
            <div className="w-full max-w-xl relative h-[600px] mt-40 md:mt-56">
              <div className="relative w-full h-full">
                {contents.map((content, index) => {
                  // Calculate the active range for each card based on scroll progress
                  // Using contents.length instead of (length - 1) gives the last card a "rest" period at the end of the scroll
                  const step = 1 / contents.length;
                  const start = index * step - step;
                  const active = index * step;
                  const end = index * step + step;

                  const isLast = index === contents.length - 1;

                  // Orbital movement matching the sphere's curve
                  // The last card stays fixed in the center after reaching its active state
                  const y = useTransform(smoothProgress, [start, active, end], isLast ? [400, 0, 0] : [400, 0, -400]);
                  const x = useTransform(smoothProgress, [start, active, end], isLast ? [-80, 0, 0] : [-80, 0, -80]);
                  const rotate = useTransform(smoothProgress, [start, active, end], isLast ? [-10, 0, 0] : [-10, 0, 10]);
                  const opacity = useTransform(smoothProgress, [start, active, end], isLast ? [0, 1, 1] : [0, 1, 0]);
                  const scale = useTransform(smoothProgress, [start, active, end], isLast ? [0.8, 1, 1] : [0.8, 1, 0.8]);
                  const blur = useTransform(smoothProgress, [start, active, end], isLast ? ["blur(12px)", "blur(0px)", "blur(0px)"] : ["blur(12px)", "blur(0px)", "blur(12px)"]);

                  return (
                    <motion.div
                      key={index}
                      style={{ 
                        y, 
                        x,
                        rotate,
                        opacity, 
                        scale, 
                        filter: blur,
                      }}
                      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
                    >
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-xl md:text-2xl font-mono text-blue-600 font-bold">0{index + 1}</span>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-gray-900 tracking-tighter uppercase leading-none">{content.title}</h3>
                      </div>
                      <p className="text-xs md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg">
                        {content.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <NextExperience />
    </div>
  );
}
