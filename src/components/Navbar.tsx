import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Sparkles, Layout, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-6 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-1">
          <Link to="/">
            <img src="/asset/ipartners-ci.svg" alt="IPARTNERS NX" className="h-5 sm:h-6 w-auto" referrerPolicy="no-referrer" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] text-gray-500 font-medium">
          <Link to="/content/how-it-works" className="hover:text-black transition-colors">HOW IT WORKS</Link>
          <Link to="/insights-news" className="hover:text-black transition-colors">INSIGHTS NEWS</Link>
          <Link to="/case-studies" className="hover:text-black transition-colors">CASE STUDIES</Link>
          <button 
            onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
            className={`transition-colors flex items-center gap-1 ${isKnowledgeOpen ? 'text-black' : 'hover:text-black'}`}
          >
            KNOWLEDGE {isKnowledgeOpen ? '-' : '+'}
          </button>
          <Link to="/faq" className="hover:text-black transition-colors">FAQ</Link>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <span className="font-display font-bold text-base md:text-lg tracking-tight text-gray-900">
            AI Partners
          </span>
          <button 
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu */}
      {isKnowledgeOpen && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl pb-12 pt-10">
          <div className="max-w-[1100px] mx-auto px-8 flex gap-12">
            {/* Left Column */}
            <div className="w-1/4 flex flex-col justify-center">
              <h2 className="text-3xl font-display font-medium text-gray-900 mb-4">Knowledge</h2>
            </div>
            
            {/* Divider */}
            <div className="w-px bg-gray-200"></div>

            {/* Right Column */}
            <div className="w-3/4">
              <h3 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-6">AI Resources</h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Card 1 */}
                <Link 
                  to="/knowledge/contextual-prompt-engineering" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className="group block bg-[#F5F5F7] p-6 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Sparkles size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-gray-900 mb-2 leading-tight">Contextual Prompt Engineering</h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">Master the art of crafting precise AI prompts for optimal UX outcomes.</p>
                </Link>
                {/* Card 2 */}
                <Link 
                  to="/knowledge/ai-ux-heuristic-evaluation" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className="group block bg-[#F5F5F7] p-6 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Layout size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-gray-900 mb-2 leading-tight">AI-UX Heuristic Evaluation</h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">Evaluate AI interfaces using specialized usability heuristics.</p>
                </Link>
                {/* Card 3 */}
                <Link 
                  to="/knowledge/glossary-of-ai-ux-interaction" 
                  onClick={() => setIsKnowledgeOpen(false)}
                  className="group block bg-[#F5F5F7] p-6 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <BookOpen size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-gray-900 mb-2 leading-tight">Glossary of AI-UX Interaction</h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">Comprehensive definitions of key terms in AI and user experience.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col px-8 py-6 gap-4">
          <Link to="/content/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors py-2">How it works</Link>
          <Link to="/insights-news" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors py-2">INSIGHTS NEWS</Link>
          
          {/* Mobile Knowledge Accordion */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors py-2 flex items-center justify-between"
            >
              KNOWLEDGE <span className="text-lg font-light">{isKnowledgeOpen ? '-' : '+'}</span>
            </button>
            {isKnowledgeOpen && (
              <div className="flex flex-col gap-3 pl-4 py-2 border-l-2 border-gray-100 ml-2 mt-1">
                <Link to="/knowledge/contextual-prompt-engineering" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-black transition-colors">Contextual Prompt Engineering</Link>
                <Link to="/knowledge/ai-ux-heuristic-evaluation" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-black transition-colors">AI-UX Heuristic Evaluation</Link>
                <Link to="/knowledge/glossary-of-ai-ux-interaction" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-black transition-colors">Glossary of AI-UX Interaction</Link>
              </div>
            )}
          </div>

          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors py-2">FAQ</Link>
        </div>
      )}
    </div>
  );
}
