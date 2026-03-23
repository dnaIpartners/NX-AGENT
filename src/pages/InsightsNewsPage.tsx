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

      {/* Clean Grid Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pb-32 bg-white mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {articles.map((article, index) => {
            const isFeatured = index === 0;
            return (
              <Link 
                key={article.id} 
                to="#" 
                className={`group flex flex-col ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                {/* Thumbnail Image */}
                <div className={`relative overflow-hidden rounded-2xl mb-6 bg-gray-100 ${
                  isFeatured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'
                }`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-sm font-medium">
                    <span className="text-blue-600 uppercase tracking-wider text-xs">
                      {article.tag}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-mono text-xs">{article.date}</span>
                  </div>
                  
                  <h2 className={`font-display font-medium text-gray-900 mb-3 transition-colors group-hover:text-blue-600 ${
                    isFeatured ? 'text-3xl md:text-5xl lg:text-5xl max-w-4xl leading-tight' : 'text-2xl md:text-3xl leading-snug'
                  }`}>
                    {article.title}
                  </h2>
                  
                  <p className={`text-gray-500 font-sans ${
                    isFeatured ? 'text-lg md:text-xl max-w-3xl' : 'text-base line-clamp-2'
                  }`}>
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Read More Button */}
        <div className="mt-24 flex justify-center">
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-medium tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
