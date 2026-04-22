import React, { useState, useEffect } from 'react';
import { Search, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const categories = [
  'All (82)', 
  'AI Agents (17)', 
  'Customer Experience (15)', 
  'Automation & AI Trends (27)', 
  'Best Practices (4)',
  'Lead Generation (4)',
  'Business Growth (8)',
  'Industry Use Cases (2)',
  'ChatSpark Updates (2)'
];

const blogPosts = [
  {
    id: 1,
    title: 'AI Chatbots for Ecommerce: How to Increase Sales and Reduce Support Requests',
    desc: 'How AI chatbots boost ecommerce revenue, recover abandoned carts, reduce support costs with 24/7 automation.',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 16, 2026',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/ai-chat1/600/400'
  },
  {
    id: 2,
    title: 'How to Automate Customer Support Without Losing the Human Touch',
    desc: 'Automate routine support with AI, keep humans for complex cases, set smooth handoffs, and track key metrics.',
    categories: ['Customer Experience', 'Automation & AI Trends'],
    date: 'Apr 11, 2026',
    readTime: '11 min read',
    image: 'https://picsum.photos/seed/human-touch1/600/400'
  },
  {
    id: 3,
    title: 'Conversational AI for Business: What It Is and Why It Matters',
    desc: 'Conversational AI cuts support costs, speeds responses, automates routine workflows, and improves customer satisfaction across channels.',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 9, 2026',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/conv-ai1/600/400'
  },
  {
    id: 4,
    title: 'AI for Customer Support: 12 Ways Businesses Are Using It Today',
    desc: 'AI is reshaping support by automating tasks and improving response times across multiple areas. Routing, analytics, and multilingual...',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 8, 2026',
    readTime: '23 min read',
    image: 'https://picsum.photos/seed/support-ai1/600/400'
  },
  {
    id: 5,
    title: 'How AI Chatbots Improve Customer Response Time and Satisfaction',
    desc: 'AI chatbots cut response times, lower support costs, and boost satisfaction with 24/7 personalized answers and high resolution rates.',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 8, 2026',
    readTime: '11 min read',
    image: 'https://picsum.photos/seed/cs-bot1/600/400'
  },
  {
    id: 6,
    title: 'AI Customer Service vs Human Support: Finding the Right Balance',
    desc: 'AI delivers speed; human agents build trust—hybrid support balances both to cut costs and boost satisfaction.',
    categories: ['Customer Experience', 'AI Agents'],
    date: 'Apr 7, 2026',
    readTime: '14 min read',
    image: 'https://picsum.photos/seed/balance1/600/400'
  },
  {
    id: 7,
    title: 'How AI Customer Service Automation is Transforming Support Teams',
    desc: 'Automate routine support to cut costs, speed responses, and deliver 24/7 routing vs personalized customer service.',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 7, 2026',
    readTime: '12 min read',
    image: 'https://picsum.photos/seed/transform1/600/400'
  },
  {
    id: 8,
    title: 'Why Every Business Needs an AI Customer Service Agent in 2026',
    desc: 'AI customer service agents cut costs, speed responses, and provide 24/7 reliable support while freeing humans for complex issues.',
    categories: ['AI Agents', 'Customer Experience'],
    date: 'Apr 6, 2026',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/every-biz1/600/400'
  },
  {
    id: 9,
    title: 'The Hidden Cost of Manual Customer Support (And How AI Fixes It)',
    desc: 'Manual support hides big costs in turnover, errors, and slow replies. AI cuts expenses, speeds responses, and scales support.',
    categories: ['Customer Experience', 'Automation & AI Trends'],
    date: 'Apr 6, 2026',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/manual-cost1/600/400'
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All (82)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-24">
      <SEO 
        title="Blog" 
        description="Insights on AI, Automation, and Business Growth - Expert perspectives on AI Agents, customer service automation, lead generation, and building better businesses" 
      />
      {/* Header Section */}
      <div className="pt-24 md:pt-28 pb-16 px-6 max-w-[1280px] mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#d1f4e0] text-[#1b6e4e] rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6">
          <Tag size={16} className="fill-[#1b6e4e]/20" />
          <span>The IPARTNERS Blog</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-8 text-black">
          Insights on AI, Automation, <br className="hidden md:block" /> and Business Growth
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl">
          Expert perspectives on AI Agents, customer service automation, lead generation, and building better businesses
        </p>
      </div>

      {/* Filter and Search Container */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex flex-wrap gap-2 flex-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-xs md:text-sm transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white border-gray-900 font-medium' 
                  : 'bg-[#f8fafc] text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
       
      </div>

      {/* Featured Latest Post */}
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-[#e6f0fd] to-[#d6e8fb] rounded-[32px] overflow-hidden flex flex-col-reverse lg:flex-row items-center border border-blue-50/50">
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">LATEST</span>
              <span className="bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Customer Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              How Conversational AI Is Changing Customer Engagement Across Channels
            </h2>
            <p className="text-gray-700 font-light text-lg mb-8 leading-relaxed">
              How conversational AI boosts omnichannel customer engagement, reduces costs, and improves response times and personalization.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium tracking-wide mb-8">
              <span>Apr 18, 2026</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>14 min read</span>
            </div>
            <a href="#" className="inline-flex items-center text-blue-600 font-bold text-sm tracking-wide gap-2 hover:text-blue-700 transition-colors">
              READ ARTICLE <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] relative p-6 lg:p-10">
            <div className="absolute inset-4 lg:inset-8 overflow-hidden rounded-[24px] shadow-sm">
              <img 
                src="https://picsum.photos/seed/conversational-ai1/1000/800" 
                alt="Conversational AI Graphic" 
                className="w-full h-full object-cover rounded-[24px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Posts */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.a
              href="#"
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col bg-white rounded-3xl border border-gray-200/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#f8fafc] flex items-center justify-center p-6 relative">
                 <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 shadow-sm"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold tracking-tight leading-snug text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 flex-1">
                  {post.desc}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6 mt-auto">
                  {post.categories.map((cat, idx) => {
                     // Determine badge colors based on category loosely
                     const isCX = cat === 'Customer Experience';
                     const isLead = cat === 'Lead Generation';
                     const isAuto = cat === 'Automation & AI Trends';
                     
                     let bgClass = "bg-[#f1f5f9]";
                     let textClass = "text-[#334155]";
                     let borderClass = "border-[#e2e8f0]";
                     
                     if (isCX) {
                        bgClass = "bg-[#f0fdf4]"; textClass = "text-[#16a34a]"; borderClass = "border-[#bbf7d0]";
                     } else if (isLead) {
                        bgClass = "bg-[#fdf4ff]"; textClass = "text-[#c026d3]"; borderClass = "border-[#fbcfe8]";
                     } else if (isAuto) {
                        bgClass = "bg-[#fff7ed]"; textClass = "text-[#ea580c]"; borderClass = "border-[#ffedd5]";
                     } else {
                        bgClass = "bg-[#eff6ff]"; textClass = "text-[#2563eb]"; borderClass = "border-[#bfdbfe]";
                     }

                    return (
                      <span 
                        key={idx} 
                        className={`${bgClass} ${textClass} border ${borderClass} text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm`}
                      >
                        {cat}
                      </span>
                    )
                  })}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium tracking-wide">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
