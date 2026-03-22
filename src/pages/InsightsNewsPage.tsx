import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

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
          
          {/* Search Input */}
          <div className="max-w-md mx-auto flex items-center border-b border-gray-300 pb-3 px-2 group focus-within:border-black transition-colors">
            <Search size={16} className="text-gray-400 group-focus-within:text-black transition-colors mr-3" />
            <input 
              type="text" 
              placeholder="Search Articles" 
              className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400 text-gray-900" 
            />
          </div>
        </div>
      </div>

      {/* Full-Bleed Wide Cinematic Section */}
      <div className="w-full pb-32 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
          {articles.map((article, index) => {
            const isFeatured = index === 0;
            return (
              <Link 
                key={article.id} 
                to="#" 
                className={`group relative overflow-hidden bg-gray-900 block w-full ${
                  isFeatured ? 'md:col-span-2 aspect-[4/3] md:aspect-[21/9] lg:aspect-[24/7]' : 'aspect-[4/3] md:aspect-[16/9]'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500"></div>
                
                {/* Content (Bottom Aligned for Cinematic Feel) */}
                <div className={`absolute bottom-0 left-0 w-full flex flex-col justify-end h-full ${
                  isFeatured ? 'p-6 md:p-12 lg:p-20' : 'p-6 md:p-10'
                }`}>
                  <div className={`${isFeatured ? 'max-w-7xl mx-auto w-full' : 'w-full'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full">
                        {article.tag}
                      </span>
                      <span className="text-sm text-white/70 font-mono">{article.date}</span>
                    </div>
                    <h2 className={`text-white font-display font-medium mb-4 leading-tight ${
                      isFeatured ? 'text-3xl md:text-5xl lg:text-6xl max-w-4xl' : 'text-2xl md:text-3xl lg:text-4xl max-w-2xl'
                    }`}>
                      {article.title}
                    </h2>
                    <p className={`text-white/80 font-sans line-clamp-2 ${
                      isFeatured ? 'text-base md:text-xl max-w-2xl md:line-clamp-none' : 'text-sm md:text-base max-w-xl'
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
    </div>
  );
}
