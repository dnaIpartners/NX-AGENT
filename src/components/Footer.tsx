import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#f4f4f4] text-[#0a0a0a] pt-32 pb-8 px-8 border-t border-gray-200">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-medium tracking-tight mb-8">IPARTNERS NX</div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Building the infrastructure for the next generation of intelligent applications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-[0.15em] mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Infrastructure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-[0.15em] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 text-sm text-gray-500 mb-20">
          <div>&copy; 2026 IPARTNERS NX. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Full-width Logo Section */}
      <div className="w-full max-w-[1920px] mx-auto relative mt-10">
        <img 
          src="/asset/ipartners-ci.svg" 
          alt="IPARTNERS" 
          className="w-full h-auto object-contain" 
          referrerPolicy="no-referrer"
        />
        <button 
          onClick={scrollToTop}
          className="absolute bottom-[10%] right-[2%] w-10 h-10 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </div>
    </footer>
  );
}
