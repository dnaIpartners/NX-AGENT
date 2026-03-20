import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, FileText, Settings, Newspaper, Info } from 'lucide-react';

const categoryData: Record<string, any> = {
  'recipe': {
    title: 'Recipe',
    description: 'Explore our curated collection of AI-UX design recipes. Step-by-step guides to building intuitive, intelligent, and user-centric interfaces.',
    icon: FileText,
    articles: [
      {
        id: 1,
        title: 'Designing Conversational Interfaces',
        excerpt: 'A comprehensive recipe for building chatbots that feel natural, helpful, and aligned with your brand voice.',
        date: 'Apr 02, 2026',
        readTime: '8 min read',
        tag: 'UX Recipe'
      },
      {
        id: 2,
        title: 'Integrating Generative AI in E-commerce',
        excerpt: 'How to use AI to personalize product recommendations and streamline the checkout process.',
        date: 'Mar 28, 2026',
        readTime: '6 min read',
        tag: 'Case Study'
      },
      {
        id: 3,
        title: 'Predictive Search Patterns',
        excerpt: 'Implementing search experiences that anticipate user needs before they finish typing.',
        date: 'Mar 15, 2026',
        readTime: '5 min read',
        tag: 'Pattern'
      }
    ]
  },
  'how-it-works': {
    title: 'How It Works',
    description: 'Dive deep into the mechanics of our AI Strategy Lab. Understand our methodology, processes, and the technology powering our solutions.',
    icon: Settings,
    articles: [
      {
        id: 1,
        title: 'Our AI-First Design Methodology',
        excerpt: 'An overview of how we integrate AI considerations from the very beginning of the design process.',
        date: 'Apr 05, 2026',
        readTime: '7 min read',
        tag: 'Methodology'
      },
      {
        id: 2,
        title: 'The Technology Stack Behind IPARTNERS NX',
        excerpt: 'A technical deep dive into the tools and frameworks we use to build scalable AI-UX solutions.',
        date: 'Mar 22, 2026',
        readTime: '10 min read',
        tag: 'Engineering'
      },
      {
        id: 3,
        title: 'From Concept to Deployment',
        excerpt: 'Follow the lifecycle of an AI-UX project, from initial ideation to final launch and iteration.',
        date: 'Mar 10, 2026',
        readTime: '6 min read',
        tag: 'Process'
      }
    ]
  },
  'insights-news': {
    title: 'Insights & News',
    description: 'Stay updated with the latest trends, research, and news in the world of AI and User Experience design.',
    icon: Newspaper,
    articles: [
      {
        id: 1,
        title: 'The Future of Spatial Computing and AI',
        excerpt: 'Exploring how AI will shape user interactions in AR and VR environments over the next decade.',
        date: 'Apr 10, 2026',
        readTime: '5 min read',
        tag: 'Trend'
      },
      {
        id: 2,
        title: 'IPARTNERS NX Wins Design Excellence Award',
        excerpt: 'We are thrilled to announce that our recent project has been recognized for outstanding AI-UX integration.',
        date: 'Apr 01, 2026',
        readTime: '3 min read',
        tag: 'Company News'
      },
      {
        id: 3,
        title: 'Q1 2026 AI-UX Industry Report',
        excerpt: 'Key findings from our quarterly survey of design leaders on the adoption of AI tools in their workflows.',
        date: 'Mar 15, 2026',
        readTime: '12 min read',
        tag: 'Research'
      }
    ]
  },
  'abouts': {
    title: 'Abouts',
    description: 'Learn more about IPARTNERS NX, our mission, our team, and our commitment to pioneering the future of AI-UX design.',
    icon: Info,
    articles: [
      {
        id: 1,
        title: 'Our Vision for the Future of Design',
        excerpt: 'Why we believe AI is not just a tool, but a fundamental shift in how we interact with technology.',
        date: 'Jan 15, 2026',
        readTime: '4 min read',
        tag: 'Vision'
      },
      {
        id: 2,
        title: 'Meet the Leadership Team',
        excerpt: 'Get to know the experts driving innovation at the IPARTNERS NX AI Strategy Lab.',
        date: 'Jan 10, 2026',
        readTime: '5 min read',
        tag: 'Team'
      },
      {
        id: 3,
        title: 'Careers at IPARTNERS NX',
        excerpt: 'Join us in shaping the next generation of intelligent interfaces. View our open positions.',
        date: 'Ongoing',
        readTime: '2 min read',
        tag: 'Careers'
      }
    ]
  }
};

export default function ContentCategory() {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-display mb-4">Category not found</h1>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      {/* Hero Section */}
      <div className="max-w-[900px] mx-auto px-8 mb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-black transition-colors mb-12 uppercase tracking-widest">
          <ArrowLeft size={14} /> Back
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-[#F5F5F7] rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div className="h-[1px] flex-1 bg-gray-100"></div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-[1.1] tracking-tight mb-6">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-sans leading-relaxed max-w-[700px]">
          {data.description}
        </p>
      </div>

      {/* Content List Section */}
      <div className="max-w-[900px] mx-auto px-8">
        <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Latest Articles</h2>
          <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{data.articles.length} Items</span>
        </div>

        <div className="flex flex-col gap-8">
          {data.articles.map((article: any) => (
            <article 
              key={article.id} 
              className="group relative bg-[#F5F5F7] rounded-[24px] p-8 md:p-10 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-gray-100 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                      {article.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Clock size={12} />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[600px] mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    Read article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="hidden md:block text-xs font-medium text-gray-400 shrink-0 pt-2">
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
