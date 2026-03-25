import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

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
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-32 pb-32">
        
        {/* Section 1 */}
        <section className="mb-28">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4 uppercase">
            Your DeFi-Native Prime Broker
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            One Portfolio. Infinite Strategies.
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[1100px]">
            <p>
              Project 0 allows you to use Kamino, Drift, Jupiter, and other defi venues as a single portfolio with unified credit. If you have $100 on Drift, $200 on Kamino, and $300 on Jupiter, you can borrow your entire $600 portfolio in one click on Project 0.
            </p>
            <p>
              Traders can run cash and carry trades, perp funding rate arb, or set up yielding, hedged positions across multiple venues with unified margin. Or, you can just hunt for yield across venues and be able to borrow against your entire position whenever you need it.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-28">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4 uppercase">
            Protect Solvency
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            Self Custodial Account & Security
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[1200px]">
            <p>
              Project 0 inserts a self custodial account in between you and the underlying venue you're using to enable deleveraging, protecting solvency. P0 risk and security systems has handled billions of dollars of actions, in production, over multiple market conditions with no insolvency. Project 0 audits are available in our docs.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-32">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4 uppercase">
            Better Capital Efficiency
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            Keep Using The Venues You Love
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[1200px]">
            <p>
              Keep using the venues you love, for the reasons you're using them, while accessing credit against your entire on-chain portfolio. You no longer have to manage multiple borrows from different venues with different rules. Project 0 gives you better capital efficiency in one click.
            </p>
            <p>
              Project 0's risk and liquidity engine utilizes Solana's speed, but the venues P0 supports can be anywhere. If you're a team across any L1, side-chain, or rollup that wants capital to stop leaving your venue when trading opportunities happen on Solana, get in touch.
            </p>
          </div>
        </section>

      </div>

      {/* Interactive Scroll Section */}
      <section ref={containerRef} className="bg-[#fafafa] relative h-[350vh]">
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
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-sans font-extrabold leading-[1.2] tracking-tight text-gray-900 uppercase">
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
    </div>
  );
}
