import React from 'react';

export default function Navbar() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-[1100px] mx-auto">
      <div className="flex items-center gap-1">
        <span className="text-xl font-display font-medium tracking-tight">IPARTNERS NX</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[13px] text-gray-500 font-medium">
        <a href="#" className="hover:text-black transition-colors">RECIPE</a>
        <a href="#" className="hover:text-black transition-colors">How it works</a>
        <a href="#" className="hover:text-black transition-colors">INSIGHTS NEWS</a>
        <a href="#" className="hover:text-black transition-colors">KNOWLEDGE</a>
        <a href="#" className="hover:text-black transition-colors">ABOUTS</a>
      </div>
      
      <div className="flex items-center gap-6 text-[13px] font-medium">   
        <button className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
         IPARTNES CO.
        </button>
      </div>
    </nav>
  );
}
