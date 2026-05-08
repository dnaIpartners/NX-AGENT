import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-7 bg-[#0a0a0a] text-white pt-24 md:pt-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between mb-16 lg:mb-24 gap-16 lg:gap-12">
          {/* Brand Info */}
          <div className="max-w-sm">
             <div className="mb-8">
               <img src="/asset/ipartners-ci.svg" alt="IPARTNERS" className="h-7 md:h-8 invert opacity-90 object-left object-contain w-auto" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
               단순한 도구를 넘어, 기업의 역량을 증폭시키는 지능형 워크플로우를 구축합니다.<br/> 
               실무자와 AI가 완벽하게 조율된 미래의 근무 환경을 제안합니다.
             </p>
             <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <span className="text-xs font-bold">LI</span>
                </a>
             </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 font-light">
            {/* Column 1 */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Platform</h4>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">HOME</Link>
              <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">HOW IT WORKS</Link>
              <Link to="/nx-agent-architecture" className="text-gray-400 hover:text-white transition-colors text-sm">ARCHITECTURE</Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">BLOG</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link>
            </div>
            
            {/* Column 2 & 3 combined on desktop */}
            <div className="flex flex-col space-y-4 col-span-2 md:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">Knowledge</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                <Link to="/knowledge/ai-prompt-library" className="text-gray-400 hover:text-white transition-colors text-sm">Prompt Library</Link>
                <Link to="/knowledge/contextual-prompt-engineering" className="text-gray-400 hover:text-white transition-colors text-sm">Contextual Prompt Engineering</Link>
                <Link to="/knowledge/ai-ux-heuristic-evaluation" className="text-gray-400 hover:text-white transition-colors text-sm">UX Heuristic Evaluation</Link>
                <Link to="/knowledge/glossary-of-ai-ux-interaction" className="text-gray-400 hover:text-white transition-colors text-sm">Glossary of AI & UX</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-8 border-t border-white/10 text-xs md:text-sm text-gray-500 pb-12 lg:pb-16">
          <div>&copy; 2026 IPARTNERS NX Agent. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>      
    </footer>
  );
}
