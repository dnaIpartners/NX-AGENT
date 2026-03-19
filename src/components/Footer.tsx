import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a0a] text-white pt-32 pb-16 px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-medium tracking-tight mb-8">NX Agent</div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Building the infrastructure for the next generation of intelligent applications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-mono text-gray-500 uppercase tracking-[0.15em] mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-mono text-gray-500 uppercase tracking-[0.15em] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <div>&copy; 2026 NX Agent. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
