import React from 'react';
import { Link } from 'react-router-dom';

export default function InsightsNews() {
  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-8 py-24 lg:py-25 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Insights News</span>
        </div>
        <h2 className="text-[2.5rem] sm:text-[3.5rem] font-display font-medium leading-[1.1] tracking-[-0.03em] text-[#0a0a0a] max-w-[1000px] break-keep">
          AI와 디지털 트랜스포메이션의 미래를 만들어가는 최신 트렌드, 심층 분석, 그리고 기업 소식을 만나보세요.
        </h2>
      </div>
      <div className="flex flex-col border-t border-gray-900">
        {/* Board Item 01 */}
        <Link to="/insights-news" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">2026.03.19</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-28">보도자료</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              아이파트너즈 NX, 새로운 AI 기반 워크플로우 통합 솔루션 발표
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
        {/* Board Item 02 */}
        <Link to="/insights-news" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">2026.03.15</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-28">기술 블로그</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              클라우드 시대의 엔터프라이즈 아키텍처의 미래
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
        {/* Board Item 03 */}
        <Link to="/insights-news" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">2026.03.10</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-28">구축 사례</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              글로벌 핀테크 플랫폼을 1,000만 사용자 규모로 확장한 방법
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
      
    </section>
  );
}
