import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is IPARTNERS NX?",
    answer: "IPARTNERS NX is an AI-driven UX consulting service that helps businesses optimize their digital products using advanced artificial intelligence and user experience methodologies."
  },
  {
    question: "How does the AI-UX Heuristic Evaluation work?",
    answer: "Our evaluation process uses specialized AI models trained on UX principles to analyze your interface, identify potential usability issues, and suggest actionable improvements based on industry best practices."
  },
  {
    question: "What kind of businesses can benefit from your services?",
    answer: "Any business with a digital product (website, app, software) can benefit. We work with startups, mid-sized companies, and enterprises across various industries to enhance their user experience."
  },
  {
    question: "How long does a typical consulting project take?",
    answer: "Project timelines vary depending on the scope and complexity. A basic heuristic evaluation might take a few days, while a comprehensive UX redesign could take several weeks. We provide detailed timelines during the initial consultation."
  },
  {
    question: "Do you offer ongoing support after a project is completed?",
    answer: "Yes, we offer ongoing support and retainer packages to ensure your digital products continue to perform optimally and adapt to changing user needs and technological advancements."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-8 py-24 lg:py-32 border-t border-gray-100">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">FAQ</span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
            Common questions.<br />
            <span className="text-gray-400">Clear answers.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
