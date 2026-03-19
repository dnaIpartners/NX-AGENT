import React from 'react';

export default function Abouts() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">About Us</span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-8">
            Built for the<br />
            <span className="text-gray-400">next era.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-12">
            We are a team of engineers, designers, and strategists dedicated to building intelligent systems that scale. Our mission is to democratize access to advanced AI infrastructure.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-display font-medium text-[#0a0a0a] mb-2">10x</div>
              <div className="text-sm font-mono text-gray-500">Performance increase</div>
            </div>
            <div>
              <div className="text-4xl font-display font-medium text-[#0a0a0a] mb-2">99.9%</div>
              <div className="text-sm font-mono text-gray-500">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-display font-medium text-[#0a0a0a] mb-2">24/7</div>
              <div className="text-sm font-mono text-gray-500">Global support</div>
            </div>
            <div>
              <div className="text-4xl font-display font-medium text-[#0a0a0a] mb-2">50+</div>
              <div className="text-sm font-mono text-gray-500">Enterprise clients</div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
            alt="Team collaboration" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-lg font-medium">"Innovation is not about ideas. It's about making ideas happen."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
