import React from 'react';

export default function HowItWorks() {
  return (
    <>
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-0 lg:min-h-[800px] flex items-center border-t border-gray-100">
      {/* Right Side Background Image (Full Bleed on Desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <img 
          src="https://picsum.photos/seed/process/1200/1500" 
          alt="Design Process" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Floating Box Content for Desktop */}
        <div className="absolute bottom-32 -left-24 bg-white p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-[420px] z-20">
          <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">
            Box Content
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Continuous feedback loops and agile methodologies allow us to adapt quickly and deliver exceptional results that exceed expectations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-24 py-12 lg:py-32 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-gray-900 mb-8">
            Design &<br />Development<br />Process
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-[420px]">
            We combine strategic thinking with technical excellence to deliver solutions that drive real business value. Our iterative process ensures alignment and quality at every step.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors">
            Explore Our Process
          </button>
        </div>

        {/* Mobile/Tablet Image & Box (Hidden on Desktop) */}
        <div className="w-full lg:hidden relative mt-8 px-8 md:px-12">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/process/1200/1500" 
              alt="Design Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Box Content for Mobile */}
          <div className="relative -mt-20 mx-4 md:-mt-24 md:mx-12 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20">
            <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
              Box Content
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Continuous feedback loops and agile methodologies allow us to adapt quickly and deliver exceptional results that exceed expectations.
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* Detailed Content Section */}
    <section className="w-full bg-[#fcfcfc] py-24 lg:py-32 border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto px-8 md:px-12">
        
        {/* Section 1 */}
        <div className="mb-20 lg:mb-24">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-gray-900 mb-8 leading-tight">
            AI로 브랜드의 스마트한 혁신을 주도합니다
            <span className="block text-lg md:text-xl text-gray-500 mt-2 font-sans font-normal">Empowering Brands to Work Smarter with AI</span>
          </h3>
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-sans">
            <p>
              아이파트너즈에게 AI는 단순한 트렌드나 수동적인 보조 도구가 아닙니다. 확실한 비즈니스 성과를 창출하는 실질적인 '능동형 에이전트(AI Agent)'입니다. 우리의 목표는 명확합니다. 비즈니스에 진짜 변화를 일으킬 수 있는 곳에 AI를 완벽하게 통합하는 것입니다. 반복적이고 소모적인 수작업을 자동화하여 프로젝트 리드타임을 30% 이상 혁신적으로 단축하고, 방대한 데이터를 분석하여 차별화된 사용자 경험(UX)을 설계합니다.
            </p>
            <p>
              우리는 오직 '결과'에 집중합니다. 기획-디자인-개발의 선형적 경계를 허물고 불필요한 마찰(Friction)을 지워냅니다. 소모적인 반복 업무가 사라진 자리에서, 당신의 팀은 오직 혁신과 고부가가치 창출에만 몰입하는 완벽한 지능형 워크플로우(Intelligent Workflow)를 경험하게 될 것입니다.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-20 lg:mb-24">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-gray-900 mb-8 leading-tight">
            비즈니스의 체질을 바꾸는 진짜 AI
            <span className="block text-lg md:text-xl text-gray-500 mt-2 font-sans font-normal">AI That Drives Impact</span>
          </h3>
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-sans">
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
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-gray-900 mb-8 leading-tight">
            우리는 AI를 이렇게 구축합니다
            <span className="block text-lg md:text-xl text-gray-500 mt-2 font-sans font-normal">How We Implement AI</span>
          </h3>
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-sans">
            <p>
              우리는 단순한 '시스템 구축'을 넘어 고객사의 비즈니스 본질을 탐구합니다. 실무 전문가가 고객사의 페인포인트(Pain Point)를 깊이 있게 진단하고, AI가 가장 강력한 임팩트를 낼 수 있는 영역에 'i-AX Solution(6대 핵심 에이전트)'을 유기적으로 매핑합니다.
            </p>
            <p>
              그 결과물은 고객 문의를 자율적으로 처리하는 지능형 AI 챗봇이 될 수도 있고, 사용자 로그 데이터를 기반으로 한 선제적인 고도화 역제안(Predictive Analytics)이 될 수도 있습니다. 어떤 형태의 솔루션이든, 중요한 것은 <strong className="text-gray-900 font-semibold">"AI가 고객사의 비즈니스를 완벽하게 서브해야 한다"</strong>는 점입니다. 우리가 제공하는 모든 시스템은 '보안 3계명(기업용 유료 계정 사용 및 대외비 마스킹 등)' 아래 가장 안전하게 설계되며, 담당자가 바뀌어도 흔들림 없이 유지되는 영구적인 지식 자산으로 조직에 내재화(Systemize)됩니다.
            </p>
            <p>
              기획부터 런칭까지 바이브 코딩(Vibe Coding)을 통해 압도적인 속도로 동시 구현해 내지만, 우리의 시선은 언제나 고객사의 장기적인 수익성(ROI)과 무한한 비즈니스 확장(Scale further)에 맞춰져 있습니다. 아이파트너즈는 단기 성과보다 오랫동안 신뢰받는 파트너가 되는 것을 최우선으로 생각합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
