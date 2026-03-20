import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react';

const featuredArticle = {
  id: 'featured',
  title: 'The Future of Spatial Computing and AI in UX Design',
  excerpt: 'Explore how artificial intelligence is shaping user interactions in augmented and virtual reality environments over the next decade. We dive deep into predictive interfaces, gaze-tracking AI, and contextual awareness.',
  date: 'April 10, 2026',
  readTime: '8 min read',
  tag: 'Trend Analysis',
  image: 'https://picsum.photos/seed/spatial/1200/800?blur=2'
};

const articles = [
  {
    id: 1,
    title: 'IPARTNERS NX Wins Design Excellence Award',
    excerpt: 'We are thrilled to announce that our recent enterprise AI project has been recognized for outstanding AI-UX integration at the Global Design Awards.',
    date: 'April 01, 2026',
    readTime: '3 min read',
    tag: 'Company News',
    image: 'https://picsum.photos/seed/award/800/600'
  },
  {
    id: 2,
    title: 'Q1 2026 AI-UX Industry Report',
    excerpt: 'Key findings from our quarterly survey of 500+ design leaders on the adoption of generative AI tools in their daily workflows.',
    date: 'March 15, 2026',
    readTime: '12 min read',
    tag: 'Research',
    image: 'https://picsum.photos/seed/report/800/600'
  },
  {
    id: 3,
    title: 'A New Framework for LLM Evaluation in Interfaces',
    excerpt: 'How to measure the effectiveness, tone, and accuracy of Large Language Models when embedded directly into consumer-facing applications.',
    date: 'March 02, 2026',
    readTime: '6 min read',
    tag: 'Methodology',
    image: 'https://picsum.photos/seed/llm/800/600'
  },
  {
    id: 4,
    title: 'Designing Trustworthy Voice Interfaces',
    excerpt: 'Best practices for creating voice AI that users feel comfortable interacting with, focusing on transparency and feedback loops.',
    date: 'February 20, 2026',
    readTime: '7 min read',
    tag: 'Best Practices',
    image: 'https://picsum.photos/seed/voice/800/600'
  },
  {
    id: 5,
    title: 'Ethics in AI-Driven Personalization',
    excerpt: 'Balancing hyper-personalized user experiences with privacy concerns and algorithmic bias in modern digital products.',
    date: 'February 05, 2026',
    readTime: '9 min read',
    tag: 'Ethics',
    image: 'https://picsum.photos/seed/ethics/800/600'
  },
  {
    id: 6,
    title: 'The Rise of Agentic UI',
    excerpt: 'Moving beyond chat interfaces: How autonomous AI agents are changing the fundamental structure of graphical user interfaces.',
    date: 'January 28, 2026',
    readTime: '5 min read',
    tag: 'Trend Analysis',
    image: 'https://picsum.photos/seed/agent/800/600'
  }
];

export default function InsightsNewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-[1100px] mx-auto px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-black transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-[1.1] tracking-tight mb-6">
            Insights & News
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans leading-relaxed max-w-[600px]">
            Stay updated with the latest trends, research, and news in the world of AI and User Experience design.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-24">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Featured Story</h2>
          <Link to="#" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] lg:aspect-[4/4] overflow-hidden rounded-[32px] bg-gray-100">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                  {featuredArticle.tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                  <Clock size={12} />
                  {featuredArticle.readTime}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                {featuredArticle.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                Read full story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Latest Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article) => (
              <Link key={article.id} to="#" className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gray-100 mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-display font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-900 group-hover:text-blue-600 transition-colors mt-auto pt-4 border-t border-gray-50">
                  Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="px-8 py-4 rounded-full border border-gray-200 text-sm font-medium text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
            Load More Articles
          </button>
        </div>

      </div>
    </div>
  );
}
