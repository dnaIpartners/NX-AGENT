import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-32 pb-32">
        
        {/* Section 1 */}
        <section className="mb-28">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4">
            AI로 브랜드의 스마트한 혁신을 주도합니다
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            Empowering Brands to Work Smarter with AI
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[890px]">
            <p>
              아이파트너즈에게 AI는 단순한 트렌드나 수동적인 보조 도구가 아닙니다. 확실한 비즈니스 성과를 창출하는 실질적인 '능동형 에이전트(AI Agent)'입니다. 우리의 목표는 명확합니다. 비즈니스에 진짜 변화를 일으킬 수 있는 곳에 AI를 완벽하게 통합하는 것입니다. 반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 30% 이상 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
            </p>
            <p>
              우리는 오직 '결과'에 집중합니다. 기획-디자인-개발의 선형적 경계를 허물고 불필요한 마찰(Friction)을 지워냅니다. 소모적인 반복 업무가 사라진 자리에서, 당신의 팀은 오직 혁신과 고부가가치 창출에만 몰입하는 완벽한 지능형 워크플로우(Intelligent Workflow)를 경험하게 될 것입니다.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-28">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4">
            비즈니스의 체질을 바꾸는 진짜 AI
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            AI That Drives Impact
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[890px]">
            <p>
              AI는 비즈니스의 패러다임을 혁신하고 있으며, 그 속도는 점차 가속화되고 있습니다. 아이파트너즈는 고객사의 비즈니스가 각기 다른 고유한 목표와 과제를 안고 있음을 이해합니다. 그렇기 때문에 누구나 쓰는 뻔한 범용 솔루션에 의존하지 않습니다.
            </p>
            <p>
              자동화의 첫걸음을 떼려는 고객사부터, 이미 차세대 지능형 서비스(Track 3)를 준비 중인 고객사까지 출발점은 달라도 상관없습니다. 아이파트너즈의 체계적인 'AI 전환(AX) 컨설팅'을 통해 현재 프로세스를 진단하고(As-Is), AI 적용 가능성을 평가하여(Feasibility), 가장 확실하고 측정 가능한 성과를 낼 수 있는 맞춤형 전략(To-Be Design)을 수립해 드립니다.
            </p>
            <p>
              생산성은 극대화되고, 운영 비용은 절감되며, 엔드유저(고객)는 확연히 달라진 차세대 경험(NX)을 느끼게 될 것입니다. 인간 전문가의 꿰뚫어 보는 통찰력과 AI의 압도적인 실행력이 결합할 때, 당신의 팀은 더 빠르고 스마트한 의사결정을 내릴 수 있습니다.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-32">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest mb-4">
            우리는 AI를 이렇게 구축합니다
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-medium tracking-tight mb-8 leading-[1.1] text-black">
            How We Implement AI
          </h1>
          <div className="space-y-6 text-[17px] text-gray-700 leading-[1.7] max-w-[890px]">
            <p>
              우리는 단순한 '시스템 구축'을 넘어 고객사의 비즈니스 본질을 탐구합니다. 실무 전문가가 고객사의 페인포인트(Pain Point)를 깊이 있게 진단하고, AI가 가장 강력한 임팩트를 낼 수 있는 영역에 'i-AX Solution(6대 핵심 에이전트)'을 유기적으로 매핑합니다.
            </p>
            <p>
              그 결과물은 고객 문의를 자율적으로 처리하는 지능형 AI 챗봇이 될 수도 있고, 사용자 로그 데이터를 기반으로 한 선제적인 고도화 역제안(Predictive Analytics)이 될 수도 있습니다. 어떤 형태의 솔루션이든, 중요한 것은 "AI가 고객사의 비즈니스를 완벽하게 서브해야 한다"는 점입니다. 우리가 제공하는 모든 시스템은 '보안 3계명(기업용 유료 계정 사용 및 대외비 마스킹 등)' 아래 가장 안전하게 설계되며, 담당자가 바뀌어도 흔들림 없이 유지되는 영구적인 지식 자산으로 조직에 내재화(Systemize)됩니다.
            </p>
            <p>
              기획부터 런칭까지 바이브 코딩(Vibe Coding)을 통해 압도적인 속도로 동시 구현해 내지만, 우리의 시선은 언제나 고객사의 장기적인 수익성(ROI)과 무한한 비즈니스 확장(Scale further)에 맞춰져 있습니다. 아이파트너즈는 단기 성과보다 오랫동안 신뢰받는 파트너가 되는 것을 최우선으로 생각합니다.
            </p>
          </div>
        </section>

        {/* Section 4: Approach Steps (From Image) */}
      </div>

      <section className="bg-[#F5F5F7] py-32">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Sticky Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h1 className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold leading-[0.9] text-[#001641] tracking-tight">
                Here<br />at every<br />step
              </h1>
              <p className="text-xs font-mono uppercase tracking-widest text-[#001641] mt-8 max-w-[280px] leading-relaxed opacity-80">
                Navigating AI implementation can seem like an insurmountable task. We make it seamless.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16 pt-12 lg:pt-0">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[600px] ml-auto"
              >
                <div className="bg-white p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] w-full transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-medium text-[#001641]">Understand</h3>
                    <span className="text-xl font-display text-[#001641]">01</span>
                  </div>
                  <div className="border-t border-dashed border-[#001641]/30 pt-6 pb-6 border-b">
                    <p className="text-[15px] text-[#001641] leading-[1.8] break-keep">
                      아이파트너즈는 고객의 이야기를 듣는 것에서 출발합니다. 현재 어떻게 일하고 계신지 업무 환경을 살펴보고, '구축 시간 30% 단축'이나 '사용자 경험 개선' 등 고객에게 가장 필요한 진짜 목표를 명확히 찾습니다. 본격적인 작업에 앞서 비즈니스 상황에 딱 맞는 AI 도입 전략의 밑그림을 그립니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[600px] ml-auto"
              >
                <div className="bg-white p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-medium text-[#1A237E]">Evaluate Data</h3>
                    <span className="text-xl font-display text-[#1A237E]">02</span>
                  </div>
                  <div className="border-t border-dashed border-[#1A237E]/30 pt-6 pb-6 border-b">
                    <p className="text-[15px] text-[#1A237E] leading-[1.8] break-keep">
                      강력한 AI는 잘 정리된 데이터에서 나옵니다. 고객사의 기존 데이터와 일하는 방식을 분석해 불편하고 시간이 오래 걸리는 점(Pain Point)들을 찾아냅니다. 그리고 업무 중 어떤 부분에 AI를 적용해야 복잡하지 않으면서도 가장 큰 효과를 얻을 수 있을지 꼼꼼하게 따져보고 최적의 환경을 준비합니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[600px] ml-auto"
              >
                <div className="bg-white p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-medium text-[#1A237E]">Design Solutions</h3>
                    <span className="text-xl font-display text-[#1A237E]">03</span>
                  </div>
                  <div className="border-t border-dashed border-[#1A237E]/30 pt-6 pb-6 border-b">
                    <p className="text-[15px] text-[#1A237E] leading-[1.8] break-keep">
                      기획, 디자인, 개발이 따로 놀지 않도록 업무의 경계를 허뭅니다. 아이파트너즈는 '바이브 코딩(Vibe Coding)' 방식을 활용해 기획을 함과 동시에 프로토타입(시안)을 눈으로 확인하며 작업합니다. 새로운 시스템을 만들든 기존 시스템에 연결하든, 고객사 환경에 가장 잘 맞고 쓰기 편한 솔루션을 만듭니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[600px] ml-auto"
              >
                <div className="bg-white p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] w-full transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-medium text-[#1A237E]">Test</h3>
                    <span className="text-xl font-display text-[#1A237E]">04</span>
                  </div>
                  <div className="border-t border-dashed border-[#1A237E]/30 pt-6 pb-6 border-b">
                    <p className="text-[15px] text-[#1A237E] leading-[1.8] break-keep">
                      철저한 테스트 없이는 서비스를 오픈하지 않습니다. AI를 활용해 예상치 못한 오류(엣지 케이스)와 보안 취약점을 빠르게 찾아냅니다. 특히 대외비 정보는 마스킹 처리하는 등 아이파트너즈의 엄격한 '보안 3계명'을 지켜 데이터를 가장 안전하게 다루며, 최종적으로 실무 전문가가 한 번 더 꼼꼼하게 퀄리티를 검수합니다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[600px] ml-auto"
              >
                <div className="bg-white p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] w-full transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-medium text-[#1A237E]">Launch & Support</h3>
                    <span className="text-xl font-display text-[#1A237E]">05</span>
                  </div>
                  <div className="border-t border-dashed border-[#1A237E]/30 pt-6 pb-6 border-b">
                    <p className="text-[15px] text-[#1A237E] leading-[1.8] break-keep">
                      서비스가 오픈된 이후에도 단기 성과에 그치지 않고 오랫동안 신뢰받는 든든한 파트너로서 함께합니다. 시스템이 잘 돌아가는지 관리하는 것을 넘어, 데이터를 분석해 새로운 비즈니스 기회를 찾습니다. 도입한 AI가 제 몫을 다하고 고객사의 비즈니스가 꾸준히 성장할 수 있도록 우리가 먼저 더 나은 방향을 제안해 드립니다.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
