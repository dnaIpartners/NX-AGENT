import React from 'react';
import { Link } from 'react-router-dom';

export default function Knowledge() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Knowledge</span>
        </div>
        <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
          Deep dives.<br />
          <span className="text-gray-400">Technical resources.</span>
        </h2>
      </div>
      <div className="flex flex-col border-t border-gray-900">
        {/* Board Item 01 */}
        <Link to="/knowledge/contextual-prompt-engineering" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Whitepaper</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">PDF</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              Contextual Prompt Engineering
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Read &rarr;</span>
        </Link>
        {/* Board Item 02 */}
        <Link to="/knowledge/ai-ux-heuristic-evaluation" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Documentation</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">Guide</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              AI-UX Heuristic Evaluation
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Read &rarr;</span>
        </Link>
        {/* Board Item 03 */}
        <Link to="/knowledge/glossary-of-ai-ux-interaction" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Webinar</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">Video</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              Glossary of AI-UX Interaction
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Read &rarr;</span>
        </Link>
      </div>

      {/* Read More Button */}
      <div className="mt-16 flex justify-center">
        <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
          Read More
        </button>
      </div>
    </section>
  );
}
