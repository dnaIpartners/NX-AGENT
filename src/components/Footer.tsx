import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-7 bg-[#0a0a0a] text-white pt-20">
      <div className="max-w-[1300px] mx-auto px-4">
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
