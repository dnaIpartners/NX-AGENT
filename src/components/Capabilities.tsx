import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

import { Workflow, Database, Rocket, BarChart3, GripHorizontal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Workflow,
    title: "Integrate",
    description: "기획과 동시에 프로토타입을 눈으로 확인합니다. 디자이너가 구현하고 개발자가 설계하는 '경계의 붕괴'를 통해 파편화 없는 무결점의 지능형 프로세스를 완성합니다.",
    keywords: ["Workflow Automation", "Rapid Prototyping", "Seamless Integration", "Agile Development"]
  },
  {
    icon: Database,
    title: "Systemize",
    description: "에이전시의 숙련도에 의존하지 않습니다. 성공적인 프로젝트 경험과 전문가의 노하우를 내부 통합 플랫폼에 systemize하여 영구적인 지식 자산으로 보존합니다.",
    keywords: ["Knowledge Graph", "Data Centralization", "Expert Systems", "Asset Management"]
  },
  {
    icon: Rocket,
    title: "Elevate",
    description: "AI는 전문가를 대체하지 않고 역량을 끌어올립니다. 반복 업무를 AI에게 위임하여 확보한 시간은 오직 고부가가치 창출에 집중되어 고객의 브랜드를 elevate 시킵니다.",
    keywords: ["Brand Strategy", "Value Creation", "AI Augmentation", "UX Enhancement"]
  },
  {
    icon: BarChart3,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#001641] relative z-10">
      <div className="white-bg-reveal bg-gray-50 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="scale-text text-center mb-24 md:mb-40">
            <h2 className="text-[4rem] md:text-[8rem] lg:text-[11rem] font-display font-bold tracking-tighter leading-[0.9] text-[#0a0a0a] lowercase">
              Capabilities
            </h2>
            <p className="mt-8 text-2xl md:text-4xl text-gray-500 max-w-3xl mx-auto font-light tracking-tight">
              Perfectly aligned intelligent workflows and <br className="hidden md:block" />AI expertise to increase digital impact.
            </p>
          </div>

        {/* List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15, mass: 1 } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <GripHorizontal className="w-5 h-5 text-blue-300 opacity-50" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium mb-6 break-keep">
                    {item.description}
                  </p>
                  
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.keywords.map((keyword, idx) => (
                      <span key={idx} className="bg-gray-50 text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-100">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
