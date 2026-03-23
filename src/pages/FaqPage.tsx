import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = ['전체', 'GEMS', '블로그', '프롬프트', '바이브코딩', '유튜브', 'API'];

const faqs = [
  {
    category: 'GEMS',
    question: "What is IPARTNERS NX?",
    answer: "IPARTNERS NX is an AI-driven UX consulting service that helps businesses optimize their digital products using advanced artificial intelligence and user experience methodologies."
  },
  {
    category: '프롬프트',
    question: "How does the AI-UX Heuristic Evaluation work?",
    answer: "Our evaluation process uses specialized AI models trained on UX principles to analyze your interface, identify potential usability issues, and suggest actionable improvements based on industry best practices."
  },
  {
    category: '바이브코딩',
    question: "What kind of businesses can benefit from your services?",
    answer: "Any business with a digital product (website, app, software) can benefit. We work with startups, mid-sized companies, and enterprises across various industries to enhance their user experience."
  },
  {
    category: 'API',
    question: "How long does a typical consulting project take?",
    answer: "Project timelines vary depending on the scope and complexity. A basic heuristic evaluation might take a few days, while a comprehensive UX redesign could take several weeks. We provide detailed timelines during the initial consultation."
  },
  {
    category: '유튜브',
    question: "Do you offer ongoing support after a project is completed?",
    answer: "Yes, we offer ongoing support and retainer packages to ensure your digital products continue to perform optimally and adapt to changing user needs and technological advancements."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('전체');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === '전체' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Light Hero Section matching Insights News */}
      <div className="bg-[#F5F5F7] pt-40 pb-24 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans mb-12">
            Find answers to common questions about our services, process, and how we can help improve your digital experience.
          </p>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Reset open accordion on category change
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2962FF] text-white shadow-[0_8px_16px_rgba(41,98,255,0.2)]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-[800px] mx-auto px-8 py-16">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-400 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              해당 카테고리의 질문이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
