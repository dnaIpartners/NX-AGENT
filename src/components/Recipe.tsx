import React from 'react';

export default function Recipe() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Recipe</span>
        </div>
        <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
          Our Secret Sauce.<br />
          <span className="text-gray-400">Proven methodologies.</span>
        </h2>
      </div>
      <div className="flex flex-col">
        {/* Item 01 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">01</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Data-Driven Strategy</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                We base our decisions on hard data, ensuring every step is calculated and optimized for success.
              </p>
            </div>
          </div>
        </div>
        {/* Item 02 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">02</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Agile Execution</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                Iterative and flexible processes allow us to adapt to changes quickly and deliver value continuously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
