import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layout, BookOpen, ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    id: 'prompt-library',
    title: 'Prompt Library',
    description: '실무에 즉시 적용 가능한 검증된 AI 프롬프트 템플릿과 활용 가이드를 제공하여 업무 효율을 극대화합니다.',
    icon: Terminal,
    image: 'https://picsum.photos/seed/prompt-lib/800/400',
    tag: 'Resources',
  },
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-24 lg:py-40 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: Sticky Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-4"
        >
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Knowledge Base</span>
            </div>
            <h2 className="text-[3.5rem] lg:text-[5rem] font-display font-medium leading-[1] tracking-[-0.03em] text-[#0a0a0a] mb-8">
              Deep dives &<br />
              <span className="text-gray-400">Expert insights.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed break-keep">
              AI와 UX의 결합을 통해 도출된 전문적인 방법론과 인사이트를 탐구해보세요.
            </p>
          </div>
        </motion.div>

        {/* Right: List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Link 
                  to={`/knowledge/${category.id}`} 
                  className="group relative flex flex-col md:flex-row items-stretch bg-white border border-gray-200 hover:border-gray-900 rounded-3xl overflow-hidden transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="w-full md:w-[300px] shrink-0 overflow-hidden bg-gray-100">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover aspect-[4/3] md:aspect-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col justify-between p-8 md:p-10 flex-1 bg-white group-hover:bg-[#0a0a0a] transition-colors duration-500">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500 group-hover:text-gray-400 transition-colors">
                          <Icon className="w-4 h-4" />
                          <span>{category.tag}</span>
                        </div>
                        <span className="text-4xl font-display font-light text-gray-200 group-hover:text-white/20 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-gray-900 group-hover:text-white mb-4 tracking-tight transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-base text-gray-500 group-hover:text-gray-400 leading-relaxed break-keep transition-colors">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors">
                        Read Article
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-gray-700 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-gray-900 group-hover:text-[#0a0a0a]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
