import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentPosts = [
  {
    id: 1,
    title: 'AI Chatbots for Ecommerce: How to Increase Sales and Reduce Support Requests',
    desc: 'How AI chatbots boost ecommerce revenue, recover abandoned carts, reduce support costs with 24/7 automation.',
    category: 'Customer Experience',
    date: 'Apr 16, 2026',
    image: 'https://picsum.photos/seed/ai-chat1/600/400'
  },
  {
    id: 2,
    title: 'How to Automate Customer Support Without Losing the Human Touch',
    desc: 'Automate routine support with AI, keep humans for complex cases, set smooth handoffs, and track key metrics.',
    category: 'Automation & AI Trends',
    date: 'Apr 11, 2026',
    image: 'https://picsum.photos/seed/human-touch1/600/400'
  },
  {
    id: 3,
    title: 'Conversational AI for Business: What It Is and Why It Matters',
    desc: 'Conversational AI cuts support costs, speeds responses, automates routine workflows, and improves customer satisfaction.',
    category: 'AI Agents',
    date: 'Apr 9, 2026',
    image: 'https://picsum.photos/seed/conv-ai1/600/400'
  }
];

export default function BlogPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Our Blog</span>
            </div>
            <h2 className="text-[3.5rem] lg:text-[5rem] font-display font-medium leading-[1] tracking-[-0.03em] text-[#0a0a0a]">
              Latest from<br className="hidden md:block" />
              <span className="text-gray-400"> IPARTNERS.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors group px-5 py-2.5 rounded-full border border-gray-200 hover:border-blue-200 hover:bg-blue-50 shadow-sm"
            >
              View all posts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Post Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {recentPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link 
                to="/blog"
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-50/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                     </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center text-xs font-medium text-gray-400 mb-4">
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pt-4 border-t border-gray-50">
                    Read article <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
