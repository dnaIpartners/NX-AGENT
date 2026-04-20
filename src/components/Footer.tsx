import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-7 bg-[#0a0a0a] text-white pt-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pb-16">
          {/* Menu Info */}
          <div className="md:col-span-5 lg:col-span-6">
            <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-8">Menu</h3>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link>
                <Link to="/content/how-it-works" className="text-gray-300 hover:text-white transition-colors">HOW IT WORKS</Link>
                <Link to="/nx-agent-architecture" className="text-gray-300 hover:text-white transition-colors">NX AGENT ARCHITECTURE</Link>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">BLOG</Link>
              </div>
              <div className="flex flex-col space-y-4">
                <span className="text-gray-300 cursor-default">KNOWLEDGE</span>
                <div className="flex flex-col space-y-3 pl-4 border-l border-white/10">
                  <Link to="/knowledge/ai-prompt-library" className="text-gray-400 hover:text-white transition-colors text-xs">Prompt Library</Link>
                  <Link to="/knowledge/ai-ux-heuristic-evaluation" className="text-gray-400 hover:text-white transition-colors text-xs">UX Heuristic Evaluation</Link>
                  <Link to="/knowledge/contextual-prompt-engineering" className="text-gray-400 hover:text-white transition-colors text-xs">Contextual Prompt Engineering</Link>
                  <Link to="/knowledge/glossary-of-ai-ux-interaction" className="text-gray-400 hover:text-white transition-colors text-xs">Glossary of UX Interaction</Link>
                </div>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors mt-2">FAQ</Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-7 lg:col-span-6">
            <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-8">Newsletter</h3>
            <h4 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-4">
              Stay ahead with AI insights.
            </h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              아이파트너즈의 최신 소식과 AI 트렌드, 인사이트를 이메일로 받아보세요.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="이메일 주소를 입력해주세요" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm flex-1 focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-colors whitespace-nowrap"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500 mb-20">
          <div>&copy; All content ©IPARTNERS NX Agent.2026</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">LI</a>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden flex items-end">
        <img 
          src="/asset/ipartners-ci.svg" 
          alt="IPARTNERS" 
          className="w-full h-auto invert opacity-90" 
          referrerPolicy="no-referrer" 
        />
      </div>
    </footer>
  );
}
