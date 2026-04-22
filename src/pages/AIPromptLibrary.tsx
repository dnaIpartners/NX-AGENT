import React, { useState, useEffect } from 'react';
import { Search, Copy, Check, Sparkles, Tag } from 'lucide-react';
import SEO from '../components/SEO';

const prompts = [
  {
    id: 1,
    title: 'UX Writing: Tone of Voice Generator',
    description: '브랜드의 특정 톤앤매너 가이드라인에 맞춰 일관된 UI 카피를 생성하는 프롬프트입니다.',
    promptText: '당신은 전문 UX 라이터입니다. 다음 브랜드 가이드라인을 바탕으로 [기능/화면]에 들어갈 버튼 레이블, 에러 메시지, 툴팁을 각각 3가지 버전으로 작성해 주세요.\n\n브랜드 톤앤매너: [친근한, 전문적인, 간결한 등]',
    category: 'UX Writing'
  },
  {
    id: 2,
    title: 'User Persona Creator',
    description: '인구통계학적 데이터와 행동 인사이트를 바탕으로 상세하고 현실적인 유저 페르소나를 생성합니다.',
    promptText: '다음 타겟 고객 데이터를 바탕으로 상세한 유저 페르소나를 2개 작성해 주세요. 이름, 나이, 직업, 목표, 페인포인트(Pain points), 사용 기기, 그리고 우리 서비스를 사용하는 주요 시나리오를 포함해야 합니다.\n\n타겟 데이터: [데이터 입력]',
    category: 'Research'
  },
  {
    id: 3,
    title: 'Component State Matrix Generator',
    description: '새로운 UI 컴포넌트에 필요한 모든 상태(hover, active, disabled 등)를 빠르게 매핑합니다.',
    promptText: '새로 디자인할 [컴포넌트 이름] UI 컴포넌트의 상태 매트릭스를 작성해 주세요. Default, Hover, Active, Disabled, Focus, Error 상태에 대한 시각적 변화(색상, 테두리, 그림자 등)와 접근성 고려사항을 표 형태로 정리해 주세요.',
    category: 'UI Design'
  },
  {
    id: 4,
    title: 'Accessibility Audit Prompt',
    description: 'HTML/CSS 구조를 WCAG 가이드라인에 맞춰 평가하고 개선 가능한 액션 아이템을 얻습니다.',
    promptText: '다음 HTML/CSS 코드를 WCAG 2.1 AA 기준에 따라 접근성 감사를 진행해 주세요. 대비, ARIA 속성, 키보드 네비게이션 측면에서 문제점을 찾고, 이를 해결하기 위한 구체적인 수정 코드를 제안해 주세요.\n\n코드: [코드 입력]',
    category: 'Accessibility'
  },
  {
    id: 5,
    title: 'Interview Question Synthesizer',
    description: '정제되지 않은 유저 인터뷰 스크립트를 구조화된 테마, 인용구, 실행 가능한 인사이트로 변환합니다.',
    promptText: '다음 유저 인터뷰 스크립트를 분석하여 주요 테마 3가지를 도출해 주세요. 각 테마별로 사용자의 핵심 니즈, 관련된 인상적인 인용구(Quote), 그리고 프로덕트 팀이 바로 실행할 수 있는 인사이트를 요약해 주세요.\n\n스크립트: [스크립트 입력]',
    category: 'Research'
  },
  {
    id: 6,
    title: 'Design System Documentation Writer',
    description: '디자인 토큰과 컴포넌트에 대한 포괄적인 문서를 자동으로 생성합니다.',
    promptText: '우리 디자인 시스템의 [컴포넌트 이름]에 대한 가이드라인 문서를 작성해 주세요. 컴포넌트의 목적, 사용 시기(When to use)와 사용하면 안 되는 시기(When not to use), 해부도(Anatomy), 그리고 주요 속성(Props)에 대한 설명을 포함해 주세요.',
    category: 'Design Systems'
  },
  {
    id: 7,
    title: 'Competitor Analysis Framework',
    description: '경쟁사의 UX 플로우를 분석하고 차별화할 수 있는 기회를 식별하기 위한 구조화된 프롬프트입니다.',
    promptText: '우리 서비스인 [서비스 A]와 주요 경쟁사인 [서비스 B]의 [특정 기능/플로우]를 UX 관점에서 비교 분석해 주세요. 사용성, 시각적 계층 구조, 마찰(Friction) 요소 측면에서 차이점을 찾고, 우리가 우위를 점할 수 있는 차별화 전략을 3가지 제안해 주세요.',
    category: 'Strategy'
  },
  {
    id: 8,
    title: 'Microcopy Variations Generator',
    description: '버튼 레이블, 에러 메시지, 툴팁 등의 마이크로카피 변형을 10개 이상 생성하여 A/B 테스트에 활용합니다.',
    promptText: '현재 [상황/맥락]에서 사용자에게 보여줄 마이크로카피를 작성하려고 합니다. 기존 문구인 "[기존 문구]"를 대체할 수 있는 창의적이고 명확한 변형 문구를 10가지 제안해 주세요. 길이는 20자 이내로 제한합니다.',
    category: 'UX Writing'
  },
  {
    id: 9,
    title: 'Journey Map Scenario Builder',
    description: '페인포인트, 감정, 터치포인트를 포함한 상세한 유저 저니 시나리오를 생성합니다.',
    promptText: '우리 프로덕트의 [특정 목표]를 달성하려는 [페르소나 이름]의 유저 저니 맵 시나리오를 작성해 주세요. 인지, 탐색, 결정, 사용, 유지 단계별로 사용자의 행동, 터치포인트, 감정 상태(긍정/부정), 그리고 주요 페인포인트를 표 형태로 정리해 주세요.',
    category: 'UX Design'
  }
];

const categories = ['All', 'UX Writing', 'Research', 'UI Design', 'Accessibility', 'Design Systems', 'Strategy'];

export default function AIPromptLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = activeCategory === 'All' || prompt.category === activeCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prompt.promptText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Prompt Library" 
        description="실무에 즉시 적용 가능한 검증된 AI 프롬프트 템플릿과 활용 가이드를 제공하여 업무 효율을 극대화합니다." 
      />
      {/* Header Section */}
      <div className="pt-24 md:pt-28 pb-16 px-6 max-w-[1280px] mx-auto text-center flex flex-col items-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#d1f4e0] text-[#1b6e4e] rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6">
          <Tag size={16} className="fill-[#1b6e4e]/20" />
          <span>The IPARTNERS Knowledge</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-8 text-black">
          AI Prompt Library
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl">
          개인에게 파편화되어 사라지던 노하우를 조직 전체의 영구적인 경험 자산으로 내재화하여, 실무에 즉시 투입 가능한 최적화된 프롬프트 킷을 제공합니다.
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto px-6 md:px-8 pb-32">
        {/* Filters and Search Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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

          <div className="flex items-center gap-4 w-full lg:w-auto shrink-0">
            <div className="text-xs font-medium text-gray-500 whitespace-nowrap hidden md:block">
              총 <span className="text-gray-900 font-bold">{filteredPrompts.length}</span>개의 프롬프트
            </div>
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="프롬프트를 검색해보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Prompts Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map(prompt => (
              <div key={prompt.id} className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {prompt.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-gray-900 mb-2">
                    {prompt.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    {prompt.description}
                  </p>
                  
                  {/* Prompt Text Box */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 flex-1 border border-gray-100 relative group">
                    <p className="text-sm text-gray-700 font-mono leading-relaxed whitespace-pre-wrap">
                      {prompt.promptText}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(prompt.id, prompt.promptText)}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      copiedId === prompt.id
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={18} />
                        복사 완료
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        프롬프트 복사
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
            <Sparkles className="text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-display font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어를 입력하거나 필터를 변경해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
