import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, FileText, Settings, Newspaper, Info } from 'lucide-react';

const categoryData: Record<string, any> = {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#F5F5F7] pt-32 pb-16 px-8 min-h-[400px] md:min-h-[480px] flex flex-col items-center justify-center text-center mb-16">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>
      </div>

      {/* Content List Section */}
      <div className="max-w-[900px] mx-auto px-8 pb-32">
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

        {/* Read More Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
