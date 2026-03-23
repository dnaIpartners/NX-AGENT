import React from 'react';

export default function FloatingBadge() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 top-1/3 z-60 flex flex-col items-center justify-center bg-black py-6 px-2 shadow-xl hover:translate-x-1 transition-transform duration-300"
      style={{ borderTopRightRadius: '4px', borderBottomRightRadius: '4px' }}
      aria-label="iPartners"
    >
      <div className="w-2.5 h-[80px] flex items-center justify-center">
        <img 
          src="/asset/ipartners-ci.svg" 
          alt="iPartners" 
          className="w-[100px] max-w-none -rotate-90 invert"
        />
      </div>
    </a>
  );
}
