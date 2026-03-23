import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'ALL', 
  'STRATEGY & CONSULTING',
  'CREATIVE & BRANDING', 
  'DIGITAL MARKETING', 
  'GEO & SEO',
  'DATA INSIGHT & AUTOMATION',
  'UI / UX',
  'MCP INTEGRATION & RAG'
];

const caseStudies = [
  {
    id: 1,
    title: 'AI-Driven Digital Transformation for Global Enterprise',
    category: 'STRATEGY & CONSULTING',
    image: 'https://picsum.photos/seed/strategy1/800/1000',
  },
  {
    id: 2,
    title: 'Reimagining Brand Identity with Generative AI',
    category: 'CREATIVE & BRANDING',
    image: 'https://picsum.photos/seed/branding1/800/1000',
  },
  {
    id: 3,
    title: 'Predictive Analytics for High-Conversion Ad Campaigns',
    category: 'DIGITAL MARKETING',
    image: 'https://picsum.photos/seed/marketing1/800/1000',
  },
  {
    id: 4,
    title: 'Hyper-Local SEO Optimization using AI Signals',
    category: 'GEO & SEO',
    image: 'https://picsum.photos/seed/geoseo1/800/1000',
  },
  {
    id: 5,
    title: 'Automating Customer Insights with Machine Learning',
    category: 'DATA INSIGHT & AUTOMATION',
    image: 'https://picsum.photos/seed/data1/800/1000',
  },
  {
    id: 6,
    title: 'Next-Gen User Interfaces: Designing for AI Interactions',
    category: 'UI / UX',
    image: 'https://picsum.photos/seed/uiux1/800/1000',
  },
  {
    id: 7,
    title: 'Enterprise Knowledge Base with RAG and MCP Integration',
    category: 'MCP INTEGRATION & RAG',
    image: 'https://picsum.photos/seed/rag1/800/1000',
  },
  {
    id: 8,
    title: 'Aligning AI Initiatives with Core Business Goals',
    category: 'STRATEGY & CONSULTING',
    image: 'https://picsum.photos/seed/strategy2/800/1000',
  },
  {
    id: 9,
    title: 'Frictionless Onboarding: An AI-Assisted UX Case Study',
    category: 'UI / UX',
    image: 'https://picsum.photos/seed/uiux2/800/1000',
  }
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStudies = activeCategory === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Consistent Hero Section */}
      <div className="bg-[#F5F5F7] pt-28 pb-12 px-8 min-h-[320px] md:min-h-[384px] flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans max-w-3xl mx-auto">
            Our point of view on digital trends and opportunities
          </p>
        </div>
      </div>

      <div className="w-full bg-white px-2 md:px-4 pt-4">
        {/* Featured Case Study */}
        <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] group cursor-pointer bg-gray-900">
          <img 
            src="https://picsum.photos/seed/featured-case/1920/1080" 
            alt="Featured Case Study" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 w-full flex flex-col justify-start h-full p-8 md:p-16">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-wider text-white mb-4 uppercase">
                Social Media
              </div>
              <h2 className="text-white font-display font-medium mb-3 leading-tight text-3xl md:text-5xl lg:text-6xl">
                Instagram Best Practices: Enhance Your Brand with Smart Strategies
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-12">
        {/* Filter Navigation */}
        <div className="mb-12 overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between bg-black rounded-full p-1.5 w-full min-w-max">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 lg:px-4 py-2.5 rounded-full text-[10px] lg:text-[11px] font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-white text-black' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStudies.map(study => (
            <div key={study.id} className="relative group overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
              <img 
                src={study.image} 
                alt={study.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="inline-block bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold tracking-wider text-white mb-4 uppercase">
                  {study.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {study.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 text-sm font-bold text-gray-400">
          <button className="hover:text-black transition-colors flex items-center gap-1">
            <ChevronLeft size={16} /> PREV
          </button>
          <button className="text-black hover:text-gray-600 transition-colors flex items-center gap-1">
            NEXT <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#E2E2E2] py-24 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">Sign Up for Email Updates</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative flex items-center mb-6 bg-transparent border border-black rounded-full p-1.5">
            <input 
              type="email" 
              placeholder="your email" 
              className="w-full bg-transparent outline-none py-3 px-6 text-black placeholder-black/50 font-medium" 
            />
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shrink-0">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex items-start gap-3 text-left px-4">
            <input 
              type="checkbox" 
              id="subscribe-consent" 
              className="mt-1 shrink-0 accent-black" 
            />
            <label htmlFor="subscribe-consent" className="text-xs text-black/70 leading-relaxed">
              구독 버튼을 클릭하시면 IPARTNERS NX에서 새 블로그 게시물에 대한 이메일 소식을 수신하는 데 동의하시는 것입니다. 언제든지 이메일 하단의 수신 거부 버튼을 클릭하여 수신을 거부할 수 있습니다.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
