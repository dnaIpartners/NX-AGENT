import React from 'react';

export default function Knowledge() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Knowledge</span>
        </div>
        <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
          Deep dives.<br />
          <span className="text-gray-400">Technical resources.</span>
        </h2>
      </div>
      <div className="flex flex-col border-t border-gray-900">
        {/* Board Item 01 */}
        <a href="#" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Whitepaper</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">PDF</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              Security best practices for distributed systems
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Download &darr;</span>
        </a>
        {/* Board Item 02 */}
        <a href="#" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Documentation</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">Guide</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              API Reference and Integration Guide v2.0
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Read &rarr;</span>
        </a>
        {/* Board Item 03 */}
        <a href="#" className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors group px-4 -mx-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
            <span className="text-sm font-mono text-gray-400 w-32 shrink-0">Webinar</span>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 shrink-0 text-center w-20">Video</span>
            <h3 className="text-lg font-display font-medium text-[#0a0a0a] group-hover:text-blue-600 transition-colors line-clamp-1">
              Mastering the NX Agent ecosystem
            </h3>
          </div>
          <span className="hidden md:block text-gray-400 group-hover:translate-x-1 transition-transform">Watch &rarr;</span>
        </a>
      </div>
    </section>
  );
}
