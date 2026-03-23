import React from 'react';

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24 lg:py-0 lg:min-h-[800px] flex items-center border-t border-gray-100">
      {/* Right Side Background Image (Full Bleed on Desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <img 
          src="https://picsum.photos/seed/process/1200/1500" 
          alt="Design Process" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Floating Box Content for Desktop */}
        <div className="absolute bottom-32 -left-24 bg-white p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] max-w-[420px] z-20">
          <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">
            Box Content
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Continuous feedback loops and agile methodologies allow us to adapt quickly and deliver exceptional results that exceed expectations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-24 py-12 lg:py-32 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-medium leading-[1.1] tracking-tight text-gray-900 mb-8">
            Design &<br />Development<br />Process
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-[420px]">
            We combine strategic thinking with technical excellence to deliver solutions that drive real business value. Our iterative process ensures alignment and quality at every step.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-800 transition-colors">
            Explore Our Process
          </button>
        </div>

        {/* Mobile/Tablet Image & Box (Hidden on Desktop) */}
        <div className="w-full lg:hidden relative mt-8 px-8 md:px-12">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/process/1200/1500" 
              alt="Design Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Box Content for Mobile */}
          <div className="relative -mt-20 mx-4 md:-mt-24 md:mx-12 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20">
            <h3 className="text-xl font-display font-medium text-gray-900 mb-3">
              Box Content
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Continuous feedback loops and agile methodologies allow us to adapt quickly and deliver exceptional results that exceed expectations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
