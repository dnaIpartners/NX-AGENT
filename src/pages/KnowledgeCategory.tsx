import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Layout, BookOpen, Clock, Search, User } from 'lucide-react';

const AvatarIcon = ({ className }: { className?: string }) => (
  <div className={`bg-gray-100 flex items-center justify-center rounded-full border border-gray-200 ${className}`}>
    <User className="w-1/2 h-1/2 text-gray-400" />
  </div>
);

const categoryData: Record<string, any> = {
  'contextual-prompt-engineering': {
    title: 'Prompt Engineering',
    description: <>단순한 기계적 입력을 넘어, 실무 전문가가 고객사 고유의 비즈니스 맥락을 완벽히 해석하여<br />AI가 최상의 산출물을 내도록 조율합니다.</>,
    icon: Sparkles,
    articles: [
      { id: 1, title: 'The Anatomy of a Perfect UX Prompt', excerpt: 'Discover the core components that make up an effective prompt for generating UI layouts and user flows.', date: 'Mar 15, 2026', readTime: '5 min read', tag: 'Analytics' },
      { id: 2, title: 'Context Windows and Memory Management', excerpt: 'How to effectively utilize large context windows to maintain design consistency across complex AI interactions.', date: 'Mar 10, 2026', readTime: '8 min read', tag: 'Technical' },
      { id: 3, title: 'Zero-shot vs Few-shot Prompting in UX Design', excerpt: 'Comparing different prompting strategies and when to use them for generating design systems and components.', date: 'Mar 02, 2026', readTime: '6 min read', tag: 'Research' },
      { id: 4, title: 'Handling Hallucinations in UI Generation', excerpt: 'Strategies to prevent and mitigate AI hallucinations when generating structural UI code and layouts.', date: 'Feb 24, 2026', readTime: '7 min read', tag: 'Best Practices' },
      { id: 5, title: 'Prompt Chaining for Complex User Flows', excerpt: 'Learn how to link multiple prompts together to handle multi-step user journeys and complex logic.', date: 'Feb 18, 2026', readTime: '9 min read', tag: 'Analytics' },
      { id: 6, title: 'System Prompts: Setting the AI Persona', excerpt: 'Best practices for defining the core behavior, tone, and constraints of your AI agent through system prompts.', date: 'Feb 10, 2026', readTime: '6 min read', tag: 'Analytics' },
      { id: 7, title: 'Evaluating Prompt Effectiveness in UX', excerpt: 'Metrics and frameworks for measuring how well your prompts are performing in real-world user scenarios.', date: 'Feb 05, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 8, title: 'The Role of Temperature in Creative UI Generation', excerpt: 'Understanding how the temperature parameter affects the creativity and reliability of generated interfaces.', date: 'Jan 28, 2026', readTime: '5 min read', tag: 'Analytics' },
      { id: 9, title: 'Security and Safety in Prompt Engineering', excerpt: 'Protecting your AI interfaces from prompt injection attacks and ensuring safe, predictable outputs.', date: 'Jan 20, 2026', readTime: '8 min read', tag: 'Analytics' }
    ]
  },
  'ai-ux-heuristic-evaluation': {
    title: 'UX Heuristic Evaluation',
    description: <>전문가의 통찰과 AI 에이전트를 결합하여 기존 서비스의 사용자 경험(UX)을 빠르고 정교하게 진단하고, <br />실질적인 개선안을 도출합니다.</>,
    icon: Layout,
    articles: [
      { id: 1, title: 'Nielsen\'s Heuristics Adapted for AI', excerpt: 'How the classic 10 usability heuristics apply to modern generative AI interfaces and conversational agents.', date: 'Mar 18, 2026', readTime: '10 min read', tag: 'Analytics' },
      { id: 2, title: 'Evaluating AI Transparency and Explainability', excerpt: 'Methods for assessing how well an AI system communicates its capabilities, limitations, and reasoning to users.', date: 'Mar 12, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 3, title: 'The Trust Heuristic: Designing for Confidence', excerpt: 'Measuring and improving user trust in AI systems through interface cues and feedback loops.', date: 'Feb 28, 2026', readTime: '6 min read', tag: 'Research' },
      { id: 4, title: 'Measuring Cognitive Load in AI Interactions', excerpt: 'Techniques to ensure your AI features reduce, rather than increase, the user\'s cognitive burden.', date: 'Feb 20, 2026', readTime: '8 min read', tag: 'UX Research' },
      { id: 5, title: 'Heuristics for Voice and Multimodal Interfaces', excerpt: 'Expanding evaluation criteria beyond screens to include voice, gesture, and spatial AI interactions.', date: 'Feb 14, 2026', readTime: '9 min read', tag: 'Analytics' },
      { id: 6, title: 'Error Recovery in Generative AI Systems', excerpt: 'Evaluating how gracefully an AI system handles misunderstandings, bad outputs, and user corrections.', date: 'Feb 05, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 7, title: 'Assessing Bias and Fairness in UX', excerpt: 'A heuristic approach to identifying and mitigating algorithmic bias within the user interface.', date: 'Jan 29, 2026', readTime: '11 min read', tag: 'Analytics' },
      { id: 8, title: 'The Control Heuristic: User Override in AI', excerpt: 'Why users need the ability to override AI decisions, and how to evaluate the effectiveness of these controls.', date: 'Jan 22, 2026', readTime: '6 min read', tag: 'Framework' },
      { id: 9, title: 'Evaluating the "Magic" vs. "Utility" Balance', excerpt: 'Finding the sweet spot between impressive generative capabilities and practical, predictable utility.', date: 'Jan 15, 2026', readTime: '5 min read', tag: 'Strategy' }
    ]
  },
  'glossary-of-ai-ux-interaction': {
    title: 'Glossary of UX Interaction',
    description: <>전 구성원이 혼선 없이 소통하고 지능형 워크플로우에 적응할 수 있도록, <br />표준화된 공통 언어와 가이드를 제공하는 지식 생태계입니다.</>,
    icon: BookOpen,
    articles: [
      { id: 1, title: '프로덕트 디자인의 본질: 비즈니스와 UX의 교차점', excerpt: '단순히 심미적인 디자인을 넘어, 비즈니스 목표를 달성하고 사용자 문제를 해결하는 프로덕트 디자인의 핵심 역할을 탐구합니다.', date: 'Mar 20, 2026', readTime: '4 min read', tag: 'Foundation' },
      { id: 2, title: '정보 구조(IA)와 내비게이션 설계의 원칙', excerpt: '복잡한 정보와 기능을 사용자가 직관적으로 탐색할 수 있도록 돕는 탄탄한 뼈대와 내비게이션 설계 방법을 알아봅니다.', date: 'Mar 19, 2026', readTime: '5 min read', tag: 'Architecture' },
      { id: 3, title: '사용자를 이끄는 인터랙션 디자인', excerpt: '사용자의 행동을 유도하고 피드백을 제공하여 매끄러운 경험을 완성하는 마이크로 인터랙션과 디테일 설계.', date: 'Mar 18, 2026', readTime: '6 min read', tag: 'Interaction' },
      { id: 4, title: '멘탈 모델과 어포던스: 직관적인 UI의 비밀', excerpt: '사용자의 기존 경험과 심리적 기대치를 바탕으로, 설명서 없이도 자연스럽게 사용할 수 있는 화면을 설계하는 방법.', date: 'Mar 10, 2026', readTime: '5 min read', tag: 'Psychology' },
      { id: 5, title: 'UX 라이팅과 마이크로카피의 힘', excerpt: '단어 하나가 사용자의 행동을 바꿉니다. 명확하고 일관된 보이스앤톤으로 프로덕트의 완성도를 높이는 텍스트 설계.', date: 'Mar 05, 2026', readTime: '4 min read', tag: 'UX Writing' },
      { id: 6, title: '확장성을 고려한 디자인 시스템 구축', excerpt: '파편화된 UI를 통합하고, 디자인과 개발의 효율성을 극대화하는 컴포넌트 기반의 시스템 설계 가이드.', date: 'Feb 28, 2026', readTime: '7 min read', tag: 'System' },
      { id: 7, title: '데이터 기반의 사용성 테스트와 개선', excerpt: '정성적 관찰과 정량적 데이터를 결합하여 디자인 가설을 검증하고 프로덕트를 지속적으로 발전시키는 방법.', date: 'Feb 20, 2026', readTime: '5 min read', tag: 'Research' },
      { id: 8, title: '모두를 위한 포용적 디자인과 접근성', excerpt: '다양한 환경과 능력을 가진 모든 사용자가 장벽 없이 사용할 수 있는 보편적이고 포용적인 프로덕트 만들기.', date: 'Feb 12, 2026', readTime: '6 min read', tag: 'Accessibility' },
      { id: 9, title: '온보딩: 첫인상에서 충성 고객으로', excerpt: '신규 사용자가 프로덕트의 핵심 가치를 빠르게 경험하고 정착할 수 있도록 돕는 전략적인 온보딩 여정 설계.', date: 'Feb 05, 2026', readTime: '5 min read', tag: 'Strategy' }
    ]
  }
};

export default function KnowledgeCategory() {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-display mb-4">Category not found</h1>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F5F7] pt-28 pb-12 px-8 min-h-[320px] md:min-h-[384px] flex flex-col items-center justify-center text-center mb-16">
        <div className="max-w-[1300px] mx-auto w-full">     
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>
      </div>

      {/* Content List Section */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 pb-32">
        
        {data.articles.length > 0 && (() => {
          const articlesWithMeta = data.articles.map((article: any) => ({
            ...article,
            image: `https://picsum.photos/seed/${category}-${article.id}/800/400`,
            author: 'Yun Geun Sik',
            authorRole: 'AI ORCHESTRATOR'
          }));

          const featuredArticle = articlesWithMeta[0];
          const gridArticles = articlesWithMeta.slice(1);

          return (
            <>
              {/* Featured Article */}
              <Link to="#" className="block mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-900 relative overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <AvatarIcon className="w-10 h-10 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-gray-900">{featuredArticle.author}</div>
                        <div className="text-xs text-gray-500">{featuredArticle.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                      <span>{featuredArticle.date}</span>
                      <span className="text-xs font-bold text-gray-900">{featuredArticle.tag}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid Articles */}
              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridArticles.map((article: any) => (
                    <Link key={article.id} to="#" className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="w-full aspect-[16/9] bg-gray-900 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-display font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4">
                          <div className="flex items-center gap-2">
                            <AvatarIcon className="w-6 h-6 shrink-0" />
                            <span className="text-xs font-bold text-gray-900">{article.author}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                            <span>{article.date}</span>
                            <span className="font-bold text-gray-900">{article.tag}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          );
        })()}

        {/* Read More Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
