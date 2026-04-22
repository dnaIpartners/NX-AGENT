import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';
import SEO from '../components/SEO';

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
      <SEO 
        title="FAQ" 
        description="Find answers to common questions about our services, process, and how we can help improve your digital experience." 
      />
      {/* Header Section */}
      <div className="pt-24 md:pt-28 pb-16 px-6 max-w-[1280px] mx-auto text-center flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#d1f4e0] text-[#1b6e4e] rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6">
          <Tag size={16} className="fill-[#1b6e4e]/20" />
          <span>The IPARTNERS FAQ</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-8 text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl">
          Find answers to common questions about our services, process, and how we can help improve your digital experience.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mb-16 flex flex-col items-center">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Reset open accordion on category change
              }}
              className={`px-4 py-2 rounded-full border text-xs md:text-sm transition-all whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gray-900 text-white border-gray-900 font-medium'
                  : 'bg-[#f8fafc] text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 pb-32">
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
