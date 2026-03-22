import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Layout, BookOpen, Clock, Search } from 'lucide-react';

const categoryData: Record<string, any> = {
  'contextual-prompt-engineering': {
    title: 'Contextual Prompt Engineering',
    description: 'Master the art of crafting precise AI prompts for optimal UX outcomes. Learn how to structure context, define constraints, and guide AI models to generate user-centric interfaces and content.',
    icon: Sparkles,
    articles: [
      {
        id: 1,
        title: 'The Anatomy of a Perfect UX Prompt',
        excerpt: 'Discover the core components that make up an effective prompt for generating UI layouts and user flows.',
        date: 'Mar 15, 2026',
        readTime: '5 min read',
        tag: 'Guide'
      },
      {
        id: 2,
        title: 'Context Windows and Memory Management',
        excerpt: 'How to effectively utilize large context windows to maintain design consistency across complex AI interactions.',
        date: 'Mar 10, 2026',
        readTime: '8 min read',
        tag: 'Technical'
      },
      {
        id: 3,
        title: 'Zero-shot vs Few-shot Prompting in UX Design',
        excerpt: 'Comparing different prompting strategies and when to use them for generating design systems and components.',
        date: 'Mar 02, 2026',
        readTime: '6 min read',
        tag: 'Research'
      },
      {
        id: 4,
        title: 'Handling Hallucinations in UI Generation',
        excerpt: 'Strategies to prevent and mitigate AI hallucinations when generating structural UI code and layouts.',
        date: 'Feb 24, 2026',
        readTime: '7 min read',
        tag: 'Best Practices'
      }
    ]
  },
  'ai-ux-heuristic-evaluation': {
    title: 'AI-UX Heuristic Evaluation',
    description: 'Evaluate AI interfaces using specialized usability heuristics. A framework for assessing the usability, transparency, and trustworthiness of AI-powered products.',
    icon: Layout,
    articles: [
      {
        id: 1,
        title: 'Nielsen\'s Heuristics Adapted for AI',
        excerpt: 'How the classic 10 usability heuristics apply to modern generative AI interfaces and conversational agents.',
        date: 'Mar 18, 2026',
        readTime: '10 min read',
        tag: 'Framework'
      },
      {
        id: 2,
        title: 'Evaluating AI Transparency and Explainability',
        excerpt: 'Methods for assessing how well an AI system communicates its capabilities, limitations, and reasoning to users.',
        date: 'Mar 12, 2026',
        readTime: '7 min read',
        tag: 'Methodology'
      },
      {
        id: 3,
        title: 'The Trust Heuristic: Designing for Confidence',
        excerpt: 'Measuring and improving user trust in AI systems through interface cues and feedback loops.',
        date: 'Feb 28, 2026',
        readTime: '6 min read',
        tag: 'Research'
      }
    ]
  },
  'glossary-of-ai-ux-interaction': {
    title: 'Glossary of AI-UX Interaction',
    description: 'Comprehensive definitions of key terms in AI and user experience. Your definitive reference guide for the intersection of artificial intelligence and human-centered design.',
    icon: BookOpen,
    articles: [
      {
        id: 1,
        title: 'A-C: From Agentic UI to Context Window',
        excerpt: 'Essential terms starting with A through C, including Agentic UI, Anthropomorphism, and Context Window.',
        date: 'Mar 20, 2026',
        readTime: '4 min read',
        tag: 'Reference'
      },
      {
        id: 2,
        title: 'D-L: From Diffusion Models to LLMs',
        excerpt: 'Key concepts including Diffusion Models, Hallucination, Heuristics, and Large Language Models.',
        date: 'Mar 19, 2026',
        readTime: '5 min read',
        tag: 'Reference'
      },
      {
        id: 3,
        title: 'M-Z: From Multimodal to Zero-shot',
        excerpt: 'Advanced terminology including Multimodal Interfaces, Prompt Chaining, System Prompts, and Zero-shot Learning.',
        date: 'Mar 18, 2026',
        readTime: '6 min read',
        tag: 'Reference'
      }
    ]
  }
};

export default function KnowledgeCategory() {
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
      <div className="bg-[#F5F5F7] pt-40 pb-24 px-8 text-center mb-16">
        <div className="max-w-3xl mx-auto">     
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 text-gray-900">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans mb-12">
            {data.description}
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto flex items-center border-b border-gray-300 pb-3 px-2 group focus-within:border-black transition-colors">
            <Search size={16} className="text-gray-400 group-focus-within:text-black transition-colors mr-3" />
            <input 
              type="text" 
              placeholder={`Search ${data.title}`} 
              className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400 text-gray-900" 
            />
          </div>
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
