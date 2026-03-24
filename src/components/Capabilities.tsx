import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: "01",
    title: "Integrate",
    description: "기획과 동시에 프로토타입을 눈으로 확인합니다. 디자이너가 구현하고 개발자가 설계하는 '경계의 붕괴'를 통해 파편화 없는 무결점의 지능형 프로세스를 완성합니다.",
    keywords: ["Workflow Automation", "Rapid Prototyping", "Seamless Integration", "Agile Development"]
  },
  {
    id: "02",
    title: "Systemize",
    description: "에이전시의 숙련도에 의존하지 않습니다. 성공적인 프로젝트 경험과 전문가의 노하우를 내부 통합 플랫폼에 systemize하여 영구적인 지식 자산으로 보존합니다.",
    keywords: ["Knowledge Graph", "Data Centralization", "Expert Systems", "Asset Management"]
  },
  {
    id: "03",
    title: "Elevate",
    description: "AI는 전문가를 대체하지 않고 역량을 끌어올립니다. 반복 업무를 AI에게 위임하여 확보한 시간은 오직 고부가가치 창출에 집중되어 고객의 브랜드를 elevate 시킵니다.",
    keywords: ["Brand Strategy", "Value Creation", "AI Augmentation", "UX Enhancement"]
  },
  {
    id: "04",
    title: "Scale",
    description: "구축이 끝이 아닙니다. 운영 단계에서 AI 분석 데이터를 기반으로 새로운 비즈니스 기회를 선제적으로 역제안하여 고객사의 미래 비즈니스를 무한히 scale 합니다.",
    keywords: ["Predictive Analytics", "Business Scaling", "Continuous Operation", "Future Strategy"]
  }
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 15%",
          scrub: 1,
        }
      });

      tl.fromTo(".white-bg-reveal",
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(150% at 50% 50%)", ease: "none" }
      )
      .fromTo(".scale-text",
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, ease: "none" },
        "<"
      );

      // List items animation
      gsap.fromTo(".capability-item",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capabilities-list",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#001641] relative z-10">
      <div className="white-bg-reveal bg-white py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="scale-text text-center mb-24 md:mb-40">
            <h2 className="text-[5rem] md:text-[9rem] lg:text-[11rem] font-display font-bold tracking-tighter leading-[0.9] text-[#0a0a0a] lowercase">
              capabilities
            </h2>
            <p className="mt-8 text-2xl md:text-4xl text-gray-500 max-w-3xl mx-auto font-light tracking-tight">
              Perfectly aligned intelligent workflows and AI expertise to increase digital impact.
            </p>
          </div>

        {/* List */}
        <div className="flex flex-col capabilities-list">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="capability-item grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-t border-gray-200 group hover:bg-gray-50 transition-colors duration-300 -mx-6 px-6 md:mx-0 md:px-4 rounded-xl"
            >
              {/* Title Column */}
              <div className="md:col-span-4 flex items-start gap-3">
                <span className="text-[#FF5722] font-mono text-sm md:text-base mt-1 md:mt-2">({item.id})</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#0a0a0a] tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="md:col-span-5 flex items-start">
                <p className="text-base md:text-lg text-gray-500 leading-relaxed break-keep font-medium">
                  {item.description}
                </p>
              </div>

              {/* Keywords Column */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 mt-6 md:mt-0">
                {item.keywords.map((keyword, idx) => (
                  <span key={idx} className="text-sm md:text-base text-gray-900 font-medium tracking-tight">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
