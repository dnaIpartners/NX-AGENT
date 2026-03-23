import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Future of Spatial Computing and AI in UX Design',
    excerpt: 'Explore how artificial intelligence is shaping user interactions in augmented and virtual reality environments over the next decade.',
    date: '2026.04.10',
    author: 'NX Team',
    tag: 'Trend Analysis',
    image: 'https://picsum.photos/seed/spatial/1600/900?blur=2'
  },
  {
    id: 2,
    title: 'IPARTNERS NX Wins Design Excellence Award',
    excerpt: 'We are thrilled to announce that our recent enterprise AI project has been recognized for outstanding AI-UX integration.',
    date: '2026.04.01',
    author: 'NX Team',
    tag: 'Company News',
    image: 'https://picsum.photos/seed/award/1200/1000'
  },
  {
    id: 3,
    title: 'Q1 2026 AI-UX Industry Report',
    excerpt: 'Key findings from our quarterly survey of 500+ design leaders on the adoption of generative AI tools in their daily workflows.',
    date: '2026.03.15',
    author: 'Research Lab',
    tag: 'Research',
    image: 'https://picsum.photos/seed/report/1200/1000'
  },
  {
    id: 4,
    title: 'A New Framework for LLM Evaluation in Interfaces',
    excerpt: 'How to measure the effectiveness, tone, and accuracy of Large Language Models when embedded directly into consumer-facing applications.',
    date: '2026.03.02',
    author: 'Tech Team',
    tag: 'Methodology',
    image: 'https://picsum.photos/seed/llm/1200/1000'
  },
  {
    id: 5,
    title: 'Designing Trustworthy Voice Interfaces',
    excerpt: 'Best practices for creating voice AI that users feel comfortable interacting with, focusing on transparency and feedback loops.',
    date: '2026.02.20',
    author: 'UX Design',
    tag: 'Best Practices',
    image: 'https://picsum.photos/seed/voice/1200/1000'
  },
  {
    id: 6,
    title: 'Ethics in AI-Driven Personalization',
    excerpt: 'Balancing hyper-personalized user experiences with privacy concerns and algorithmic bias in modern digital products.',
    date: '2026.02.05',
    author: 'Strategy',
    tag: 'Ethics',
    image: 'https://picsum.photos/seed/ethics/1200/1000'
  },
  {
    id: 7,
    title: 'The Rise of Agentic UI',
    excerpt: 'Moving beyond chat interfaces: How autonomous AI agents are changing the fundamental structure of graphical user interfaces.',
    date: '2026.01.28',
    author: 'NX Team',
    tag: 'Trend Analysis',
    image: 'https://picsum.photos/seed/agent/1200/1000'
  }
];

export default function InsightsNewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Minimal Centered Hero Section with Gray Tone */}
      <div className="bg-[#F5F5F7] pt-40 pb-24 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            Insights & News
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans mb-12">
            Insights and perspectives from the team
          </p>
        </div>
      </div>

      {/* Article Grid Section */}
      <div className="w-full bg-white px-2 md:px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {articles.map((article, index) => {
            const isFeatured = index === 0;
            return (
              <Link 
                key={article.id} 
                to="#" 
                className={`group relative overflow-hidden bg-gray-900 block w-full ${
                  isFeatured ? 'md:col-span-2 aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3] md:aspect-[16/11]'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay for Text Readability (Top to Bottom) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500"></div>
                
                {/* Content (Top Aligned) */}
                <div className={`absolute top-0 left-0 w-full flex flex-col justify-start h-full ${
                  isFeatured ? 'p-8 md:p-16' : 'p-8 md:p-12'
                }`}>
                  <div className="max-w-3xl">
                    <h2 className={`text-white font-display font-medium mb-3 leading-tight ${
                      isFeatured ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl'
                    }`}>
                      {article.title}
                    </h2>
                    <p className={`text-white/80 font-sans ${
                      isFeatured ? 'text-base md:text-xl' : 'text-sm md:text-base'
                    }`}>
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-32 md:py-40 bg-[#0a0a0a] overflow-hidden">
        {/* Background Image with heavy overlay */}
        <img 
          src="https://picsum.photos/seed/meeting/1920/1080" 
          alt="Meeting"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#FF5722] mb-8 ring-4 ring-[#FF5722]/20"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 tracking-tight">
            We transform brands.<br />
            <span className="text-[#FF5722]">Your success is next.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-12 max-w-xl mx-auto">
            Start your project now by booking a one-on-one consultation with our expert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white font-medium">
            <Link to="#" className="hover:text-[#FF5722] transition-colors border-b border-white/30 hover:border-[#FF5722] pb-1">book a call</Link>
            <Link to="#" className="hover:text-[#FF5722] transition-colors border-b border-white/30 hover:border-[#FF5722] pb-1">chat on whatsapp</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
