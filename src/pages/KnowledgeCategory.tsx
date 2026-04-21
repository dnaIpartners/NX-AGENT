import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Layout, BookOpen, Clock, Search, User, Tag, Calendar } from 'lucide-react';

const categoryData: Record<string, any> = {
  'contextual-prompt-engineering': {
    title: 'Prompt Engineering',
    description: <>단순한 기계적 입력을 넘어, 실무 전문가가 고객사 고유의 비즈니스 맥락을 완벽히 해석하여<br />AI가 최상의 산출물을 내도록 조율합니다.</>,
    icon: Sparkles,
    articles: [
      { id: 1, title: '비즈니스 맥락을 이해하는 프롬프트 설계의 시작', excerpt: '단순한 명령어 입력을 넘어, 고객사의 산업 특성과 비즈니스 목표를 AI에게 정확히 인지시키는 맥락 설계 방법론을 알아봅니다.', date: 'Mar 22, 2026', readTime: '5 min read', tag: 'Strategy' },
      { id: 2, title: '도메인 지식과 AI의 결합: 실무 전문가의 역할', excerpt: 'AI가 최상의 산출물을 내기 위해 필수적인 실무 전문가의 개입 포인트와 도메인 지식 주입 노하우를 공유합니다.', date: 'Mar 18, 2026', readTime: '6 min read', tag: 'Expertise' },
      { id: 3, title: '고객사 맞춤형 페르소나 및 톤앤매너 최적화', excerpt: '브랜드 아이덴티티에 부합하는 AI 페르소나를 구축하고, 일관된 톤앤매너를 유지하도록 프롬프트를 조율하는 기법.', date: 'Mar 15, 2026', readTime: '4 min read', tag: 'Branding' },
      { id: 4, title: '복잡한 비즈니스 로직을 AI에게 학습시키는 방법론', excerpt: '예외 처리, 정책, 제약 조건 등 까다로운 비즈니스 룰을 프롬프트 내에 구조화하여 오류를 방지하는 설계 팁.', date: 'Mar 10, 2026', readTime: '7 min read', tag: 'Architecture' },
      { id: 5, title: '모호한 요구사항을 명확한 AI 지시어로 번역하기', excerpt: '고객의 추상적인 니즈를 AI가 완벽히 이해하고 실행할 수 있는 구체적이고 실행 가능한 프롬프트로 변환하는 과정.', date: 'Mar 05, 2026', readTime: '5 min read', tag: 'Communication' },
      { id: 6, title: '프롬프트 체이닝을 활용한 다단계 문제 해결', excerpt: '단일 프롬프트의 한계를 극복하고, 여러 단계의 프롬프트를 연결하여 복잡한 비즈니스 시나리오를 해결하는 전략.', date: 'Feb 28, 2026', readTime: '8 min read', tag: 'Advanced' },
      { id: 7, title: 'AI 산출물의 품질을 높이는 제약 조건(Constraint) 설계', excerpt: 'AI의 환각(Hallucination)을 줄이고 실무에 즉시 적용 가능한 결과물을 얻기 위한 정교한 제약 조건 설정법.', date: 'Feb 20, 2026', readTime: '6 min read', tag: 'Quality Control' },
      { id: 8, title: '산업군별 특성을 반영한 프롬프트 엔지니어링 사례', excerpt: '금융, 커머스, 헬스케어 등 다양한 산업군의 실제 프로젝트에서 활용된 맥락 맞춤형 프롬프트 설계 케이스 스터디.', date: 'Feb 12, 2026', readTime: '7 min read', tag: 'Case Study' },
      { id: 9, title: '지속 가능한 프롬프트 자산화 및 버전 관리', excerpt: '성공적으로 설계된 프롬프트를 조직의 자산으로 내재화하고, 모델 업데이트에 대응하여 지속적으로 관리하는 방법.', date: 'Feb 05, 2026', readTime: '5 min read', tag: 'Management' }
    ]
  },
  'ai-ux-heuristic-evaluation': {
    title: 'UX Heuristic Evaluation',
    description: <>전문가의 통찰과 AI 에이전트를 결합하여 기존 서비스의 사용자 경험(UX)을 빠르고 정교하게 진단하고, <br />실질적인 개선안을 도출합니다.</>,
    icon: Layout,
    articles: [
      { id: 1, title: 'AI 에이전트를 활용한 휴리스틱 평가의 패러다임 전환', excerpt: '전통적인 전문가 평가 방식에 AI의 데이터 처리 능력을 결합하여, 더 빠르고 객관적인 UX 진단을 수행하는 방법론.', date: 'Mar 21, 2026', readTime: '5 min read', tag: 'Innovation' },
      { id: 2, title: '전문가의 직관과 AI 분석의 시너지 창출하기', excerpt: 'AI가 놓치기 쉬운 감성적, 맥락적 사용성 문제를 전문가의 통찰로 보완하여 완벽한 진단 리포트를 완성하는 과정.', date: 'Mar 17, 2026', readTime: '6 min read', tag: 'Synergy' },
      { id: 3, title: '기존 서비스 UX 진단을 위한 AI 프롬프트 설계법', excerpt: '화면 구조, 사용자 플로우, 인터랙션 요소를 AI가 정확히 분석할 수 있도록 지시하는 UX 진단 특화 프롬프팅.', date: 'Mar 12, 2026', readTime: '7 min read', tag: 'Methodology' },
      { id: 4, title: '닐슨의 10가지 휴리스틱 원칙, AI 환경에 맞게 재해석하다', excerpt: '제이콥 닐슨의 고전적인 사용성 원칙을 현대의 복잡한 디지털 프로덕트와 AI 인터페이스 진단에 적용하는 가이드.', date: 'Mar 08, 2026', readTime: '5 min read', tag: 'Foundation' },
      { id: 5, title: '정성적 UX 문제를 정량적 데이터로 변환하는 AI 기법', excerpt: '모호한 사용성 이슈를 AI를 통해 수치화하고 우선순위를 매겨, 객관적인 의사결정을 지원하는 진단 프레임워크.', date: 'Mar 01, 2026', readTime: '6 min read', tag: 'Analytics' },
      { id: 6, title: 'AI 기반 UX 진단 리포트: 실질적인 액션 아이템 도출', excerpt: '단순한 문제 지적을 넘어, 즉시 개발 및 디자인에 적용 가능한 구체적인 UX/UI 개선안을 AI와 함께 도출하는 방법.', date: 'Feb 24, 2026', readTime: '5 min read', tag: 'Actionable' },
      { id: 7, title: '다크 패턴(Dark Patterns) 탐지를 위한 AI 에이전트 활용', excerpt: '사용자를 기만하거나 불편하게 만드는 숨겨진 다크 패턴을 AI로 스캐닝하고 윤리적인 UX로 개선하는 전략.', date: 'Feb 15, 2026', readTime: '4 min read', tag: 'Ethics' },
      { id: 8, title: '접근성(Accessibility) 및 포용성 진단을 위한 AI 자동화', excerpt: 'WCAG 가이드라인을 기반으로 시각, 청각, 인지적 접근성 문제를 AI로 빠르게 진단하고 개선 방향을 수립하는 팁.', date: 'Feb 08, 2026', readTime: '6 min read', tag: 'Accessibility' },
      { id: 9, title: '신속한 사용성 테스트를 위한 AI 유저 시뮬레이션', excerpt: '실제 사용자 테스트(UT) 전, 다양한 페르소나를 가진 AI 에이전트를 활용해 예상되는 사용성 병목 구간을 미리 찾아내기.', date: 'Feb 02, 2026', readTime: '7 min read', tag: 'Simulation' }
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
      {/* Header Section */}
      <div className="pt-24 md:pt-28 pb-16 px-6 max-w-[1280px] mx-auto text-center flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#d1f4e0] text-[#1b6e4e] rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6">
          <Tag size={16} className="fill-[#1b6e4e]/20" />
          <span>The IPARTNERS Knowledge</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-8 text-black">
          {data.title}
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl">
          {data.description}
        </p>
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
              <Link to="#" className="block mb-12 bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Image */}
                  <div className="w-full lg:w-3/5 bg-gray-100 relative overflow-hidden aspect-[16/9] lg:aspect-auto">
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#25c481] text-white text-[11px] font-bold tracking-wide rounded-full uppercase">
                      Featured
                    </div>
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-[#d1f4e0] text-[#1b6e4e] rounded-full text-xs font-semibold">
                        {featuredArticle.tag}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs md:text-sm font-medium gap-1.5">
                        <Calendar size={14} />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs md:text-sm font-medium gap-1.5">
                        <Clock size={14} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-[32px] md:leading-[1.25] font-display font-bold text-gray-900 mb-4 group-hover:text-[#1b6e4e] transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-500 text-sm md:text-base mb-8 line-clamp-4 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-gray-500 text-sm font-medium">
                        von {featuredArticle.author}
                      </span>
                      <span className="text-[#1b6e4e] text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Weiterlesen <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid Articles */}
              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridArticles.map((article: any) => (
                    <Link key={article.id} to="#" className="flex flex-col bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
                      <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col flex-1">
                        <div className="mb-4">
                          <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-[11px] font-semibold tracking-wide">
                            {article.tag}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-[#1b6e4e] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-gray-400 text-xs font-medium pt-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <span>{article.readTime}</span>
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
