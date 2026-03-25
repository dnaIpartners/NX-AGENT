import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Sparkles, Layout, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const isActive = (path: string) => location.pathname.startsWith(path);

  useEffect(() => {
    setIsKnowledgeOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutside(event: MouseEvent | FocusEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsKnowledgeOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('focusin', handleOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('focusin', handleOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={navRef} 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm text-gray-900' 
          : `bg-transparent border-b border-transparent ${isMainPage ? 'text-white' : 'text-[#001641]'}`
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-6 max-w-[1300px] mx-auto">
        <div className="flex items-center gap-1">
          <Link to="/" className="font-display font-bold text-xl tracking-tight">
            Next Experience
          </Link>
        </div>
        
        <div className={`hidden md:flex items-center gap-10 text-[13px] font-medium ${isScrolled ? 'text-gray-500' : (isMainPage ? 'text-white/80' : 'text-[#001641]/80')}`}>
          <Link to="/content/how-it-works" className={`transition-colors ${isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]')} ${isActive('/content/how-it-works') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}>HOW IT WORKS</Link>
          <Link to="/infinite-strategies" className={`transition-colors ${isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]')} ${isActive('/infinite-strategies') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}>INFINITE STRATEGIES</Link>
          <Link to="/insights-news" className={`transition-colors ${isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]')} ${isActive('/insights-news') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}>INSIGHTS NEWS</Link>
          <Link to="/case-studies" className={`transition-colors ${isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]')} ${isActive('/case-studies') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}>CASE STUDIES</Link>
          <button 
            onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
            className={`transition-colors flex items-center gap-1 ${isKnowledgeOpen ? (isScrolled ? 'text-black' : (isMainPage ? 'text-white' : 'text-[#001641]')) : (isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]'))} ${isActive('/knowledge') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}
          >
            KNOWLEDGE {isKnowledgeOpen ? '-' : '+'}
          </button>
          <Link to="/faq" className={`transition-colors ${isScrolled ? 'hover:text-black' : (isMainPage ? 'hover:text-white' : 'hover:text-[#001641]')} ${isActive('/faq') ? (isScrolled ? 'text-black font-bold' : (isMainPage ? 'text-white font-bold' : 'text-[#001641] font-bold')) : ''}`}>FAQ</Link>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="https://www.ipartners.co.kr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img 
              src="/asset/ipartners-ci.svg" 
              alt="AI Partners" 
              className={`h-3 md:h-4 w-auto transition-all duration-300 ${
                isScrolled 
                  ? 'brightness-0 opacity-80 hover:opacity-100' 
                  : (isMainPage ? 'brightness-0 invert opacity-90 hover:opacity-100' : 'brightness-0 opacity-80 hover:opacity-100')
              }`}
            />
          </a>
          <button 
            className={`md:hidden p-2 -mr-2 transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : (isMainPage ? 'text-white/80 hover:text-white' : 'text-[#001641]/80 hover:text-[#001641]')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu */}
      {isKnowledgeOpen && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl pb-12 pt-10 text-gray-900">
          <div className="max-w-[1300px] mx-auto px-8 flex gap-12">
            {/* Left Column */}
            <div className="w-1/4 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Knowledge</h2>            
            </div>
            
            {/* Divider */}
            <div className="w-px bg-gray-200"></div>

            {/* Right Column */}
            <div className="w-3/4 flex flex-col justify-center pl-4">
              <h3 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">AI Resources</h3>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                <Link 
                  to="/knowledge/ai-prompt-library" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className={`text-[22px] hover:text-blue-600 transition-colors ${isActive('/knowledge/ai-prompt-library') ? 'font-bold text-blue-600' : 'font-medium text-gray-900'}`}
                >
                  Prompt Library
                </Link>
                <Link 
                  to="/knowledge/ai-ux-heuristic-evaluation" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className={`text-[22px] hover:text-blue-600 transition-colors ${isActive('/knowledge/ai-ux-heuristic-evaluation') ? 'font-bold text-blue-600' : 'font-medium text-gray-900'}`}
                >
                 UX Heuristic Evaluation
                </Link>
                <Link 
                  to="/knowledge/contextual-prompt-engineering" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className={`text-[22px] hover:text-blue-600 transition-colors ${isActive('/knowledge/contextual-prompt-engineering') ? 'font-bold text-blue-600' : 'font-medium text-gray-900'}`}
                >
                 Contextual Prompt Engineering
                </Link>
                <Link 
                  to="/knowledge/glossary-of-ai-ux-interaction" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className={`text-[22px] hover:text-blue-600 transition-colors ${isActive('/knowledge/glossary-of-ai-ux-interaction') ? 'font-bold text-blue-600' : 'font-medium text-gray-900'}`}
                >
               Glossary of UX Interaction
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col px-8 py-6 gap-4 text-gray-900">
          <Link to="/content/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm hover:text-black transition-colors py-2 ${isActive('/content/how-it-works') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>How it works</Link>
          <Link to="/infinite-strategies" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm hover:text-black transition-colors py-2 ${isActive('/infinite-strategies') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>INFINITE STRATEGIES</Link>
          <Link to="/insights-news" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm hover:text-black transition-colors py-2 ${isActive('/insights-news') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>INSIGHTS NEWS</Link>
          <Link to="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm hover:text-black transition-colors py-2 ${isActive('/case-studies') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>CASE STUDIES</Link>
          
          {/* Mobile Knowledge Accordion */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
              className={`text-sm hover:text-black transition-colors py-2 flex items-center justify-between ${isActive('/knowledge') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}
            >
              KNOWLEDGE <span className="text-lg font-light">{isKnowledgeOpen ? '-' : '+'}</span>
            </button>
            {isKnowledgeOpen && (
              <div className="flex flex-col gap-3 pl-4 py-2 border-l-2 border-gray-100 ml-2 mt-1">
                <Link to="/knowledge/ai-prompt-library" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs hover:text-black transition-colors ${isActive('/knowledge/ai-prompt-library') ? 'font-bold text-black' : 'text-gray-500'}`}>Prompt Library</Link>
                <Link to="/knowledge/ai-ux-heuristic-evaluation" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs hover:text-black transition-colors ${isActive('/knowledge/ai-ux-heuristic-evaluation') ? 'font-bold text-black' : 'text-gray-500'}`}>UX Heuristic Evaluation</Link>
                <Link to="/knowledge/contextual-prompt-engineering" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs hover:text-black transition-colors ${isActive('/knowledge/contextual-prompt-engineering') ? 'font-bold text-black' : 'text-gray-500'}`}>Contextual Prompt Engineering</Link>
                <Link to="/knowledge/glossary-of-ai-ux-interaction" onClick={() => setIsMobileMenuOpen(false)} className={`text-xs hover:text-black transition-colors ${isActive('/knowledge/glossary-of-ai-ux-interaction') ? 'font-bold text-black' : 'text-gray-500'}`}>Glossary of UX Interaction</Link>
              </div>
            )}
          </div>

          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm hover:text-black transition-colors py-2 ${isActive('/faq') ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>FAQ</Link>
        </div>
      )}
    </div>
  );
}
