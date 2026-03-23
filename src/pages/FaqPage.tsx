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

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#fcfcfc]">
      <div className="max-w-[800px] mx-auto px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help improve your digital experience.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
