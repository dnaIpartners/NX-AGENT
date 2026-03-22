import React from 'react';

export default function HowItWorks() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">How it works</span>
        </div>
        <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
          Simple process.<br />
          <span className="text-gray-400">Powerful results.</span>
        </h2>
      </div>
      <div className="flex flex-col">
        {/* Item 01 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">01</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Discover & Plan</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                We start by understanding your goals, analyzing the market, and creating a comprehensive roadmap.
              </p>
            </div>
          </div>
        </div>
        {/* Item 02 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">02</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Design & Build</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                Our team crafts intuitive designs and robust architectures tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
        {/* Item 03 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">03</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Launch & Scale</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                We deploy your solution with precision and provide ongoing support to ensure sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-16 flex justify-center">
        <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
          Read More
        </button>
      </div>
    </section>
  );
}
