import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layout, BookOpen, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'contextual-prompt-engineering',
    title: 'Contextual Prompt Engineering',
    description: '단순한 기계적 입력을 넘어, 실무 전문가가 고객사 고유의 비즈니스 맥락을 완벽히 해석하여 AI가 최상의 산출물을 내도록 조율합니다.',
    icon: Sparkles,
    image: 'https://picsum.photos/seed/prompt-eng/800/400',
    tag: 'Strategy',
  },
  {
    id: 'ai-ux-heuristic-evaluation',
    title: 'UX Heuristic Evaluation',
    description: '전문가의 통찰과 AI 에이전트를 결합하여 기존 서비스의 사용자 경험(UX)을 빠르고 정교하게 진단하고, 실질적인 개선안을 도출합니다.',
    icon: Layout,
    image: 'https://picsum.photos/seed/heuristic/800/400',
    tag: 'Methodology',
  },
  {
    id: 'glossary-of-ai-ux-interaction',
    title: 'Glossary of UX Interaction',
    description: '전 구성원이 혼선 없이 소통하고 지능형 워크플로우에 적응할 수 있도록, 표준화된 공통 언어와 가이드를 제공하는 지식 생태계입니다.',
    icon: BookOpen,
    image: 'https://picsum.photos/seed/glossary/800/400',
    tag: 'Reference',
  }
];

export default function Knowledge() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16 border-t border-gray-100">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Knowledge Base</span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
            Deep dives &<br />
            <span className="text-gray-400">Expert insights.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link 
              key={category.id} 
              to={`/knowledge/${category.id}`} 
              className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-full aspect-[16/9] bg-gray-900 relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-gray-900" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{category.tag}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-8 flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Explore Category <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
    </section>
  );
}
