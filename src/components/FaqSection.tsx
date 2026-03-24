import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "아이파트너즈 NX란 무엇인가요?",
    answer: "아이파트너즈 NX는 첨단 인공지능과 사용자 경험(UX) 방법론을 활용하여 기업이 디지털 프로덕트를 최적화할 수 있도록 돕는 AI 기반 UX 컨설팅 서비스입니다."
  },
  {
    question: "AI-UX 휴리스틱 평가는 어떻게 진행되나요?",
    answer: "UX 원칙을 학습한 특화된 AI 모델을 활용하여 고객사의 인터페이스를 분석하고, 잠재적인 사용성 문제를 식별하며, 업계 모범 사례를 기반으로 실질적인 개선안을 제안합니다."
  },
  {
    question: "어떤 기업이 서비스를 이용하면 좋은가요?",
    answer: "웹사이트, 앱, 소프트웨어 등 디지털 프로덕트를 보유한 모든 기업이 혜택을 받을 수 있습니다. 스타트업부터 중견기업, 대기업까지 다양한 산업군의 사용자 경험을 향상시키기 위해 협력하고 있습니다."
  },
  {
    question: "일반적인 컨설팅 프로젝트 기간은 얼마나 걸리나요?",
    answer: "프로젝트의 범위와 복잡성에 따라 다릅니다. 기본적인 휴리스틱 평가는 며칠 내에 완료될 수 있지만, 종합적인 UX 리디자인은 몇 주가 소요될 수 있습니다. 초기 상담 시 상세한 일정을 안내해 드립니다."
  },
  {
    question: "프로젝트 완료 후에도 지속적인 지원을 제공하나요?",
    answer: "네, 디지털 프로덕트가 최적의 성능을 유지하고 변화하는 사용자 니즈와 기술 발전에 적응할 수 있도록 지속적인 유지보수 및 리테이너 패키지를 제공합니다."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column - Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">FAQ</span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
            Common<br />questions.
          </h2>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Everything you need to know about our AI-UX consulting services.
          </p>
        </div>

        {/* Right Column - FAQ List */}
        <div className="lg:w-2/3">
          <div className="border-t border-gray-900">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 group"
              >
                <button
                  className="w-full py-8 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-display text-xl md:text-2xl pr-8 transition-colors duration-300 ${openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600'}`}>
                    {openIndex === index ? (
                      <Minus size={18} strokeWidth={2} />
                    ) : (
                      <Plus size={18} strokeWidth={2} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-lg leading-relaxed max-w-2xl break-keep">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
