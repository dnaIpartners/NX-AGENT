import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Layout, BookOpen, Clock, Search } from 'lucide-react';

const categoryData: Record<string, any> = {
  'contextual-prompt-engineering': {
    title: 'Contextual Prompt Engineering',
    description: 'Master the art of crafting precise AI prompts for optimal UX outcomes. Learn how to structure context, define constraints, and guide AI models to generate user-centric interfaces and content.',
    icon: Sparkles,
    articles: [
      { id: 1, title: 'The Anatomy of a Perfect UX Prompt', excerpt: 'Discover the core components that make up an effective prompt for generating UI layouts and user flows.', date: 'Mar 15, 2026', readTime: '5 min read', tag: 'Analytics' },
      { id: 2, title: 'Context Windows and Memory Management', excerpt: 'How to effectively utilize large context windows to maintain design consistency across complex AI interactions.', date: 'Mar 10, 2026', readTime: '8 min read', tag: 'Technical' },
      { id: 3, title: 'Zero-shot vs Few-shot Prompting in UX Design', excerpt: 'Comparing different prompting strategies and when to use them for generating design systems and components.', date: 'Mar 02, 2026', readTime: '6 min read', tag: 'Research' },
      { id: 4, title: 'Handling Hallucinations in UI Generation', excerpt: 'Strategies to prevent and mitigate AI hallucinations when generating structural UI code and layouts.', date: 'Feb 24, 2026', readTime: '7 min read', tag: 'Best Practices' },
      { id: 5, title: 'Prompt Chaining for Complex User Flows', excerpt: 'Learn how to link multiple prompts together to handle multi-step user journeys and complex logic.', date: 'Feb 18, 2026', readTime: '9 min read', tag: 'Analytics' },
      { id: 6, title: 'System Prompts: Setting the AI Persona', excerpt: 'Best practices for defining the core behavior, tone, and constraints of your AI agent through system prompts.', date: 'Feb 10, 2026', readTime: '6 min read', tag: 'Analytics' },
      { id: 7, title: 'Evaluating Prompt Effectiveness in UX', excerpt: 'Metrics and frameworks for measuring how well your prompts are performing in real-world user scenarios.', date: 'Feb 05, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 8, title: 'The Role of Temperature in Creative UI Generation', excerpt: 'Understanding how the temperature parameter affects the creativity and reliability of generated interfaces.', date: 'Jan 28, 2026', readTime: '5 min read', tag: 'Analytics' },
      { id: 9, title: 'Security and Safety in Prompt Engineering', excerpt: 'Protecting your AI interfaces from prompt injection attacks and ensuring safe, predictable outputs.', date: 'Jan 20, 2026', readTime: '8 min read', tag: 'Analytics' }
    ]
  },
  'ai-ux-heuristic-evaluation': {
    title: 'AI-UX Heuristic Evaluation',
    description: 'Evaluate AI interfaces using specialized usability heuristics. A framework for assessing the usability, transparency, and trustworthiness of AI-powered products.',
    icon: Layout,
    articles: [
      { id: 1, title: 'Nielsen\'s Heuristics Adapted for AI', excerpt: 'How the classic 10 usability heuristics apply to modern generative AI interfaces and conversational agents.', date: 'Mar 18, 2026', readTime: '10 min read', tag: 'Analytics' },
      { id: 2, title: 'Evaluating AI Transparency and Explainability', excerpt: 'Methods for assessing how well an AI system communicates its capabilities, limitations, and reasoning to users.', date: 'Mar 12, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 3, title: 'The Trust Heuristic: Designing for Confidence', excerpt: 'Measuring and improving user trust in AI systems through interface cues and feedback loops.', date: 'Feb 28, 2026', readTime: '6 min read', tag: 'Research' },
      { id: 4, title: 'Measuring Cognitive Load in AI Interactions', excerpt: 'Techniques to ensure your AI features reduce, rather than increase, the user\'s cognitive burden.', date: 'Feb 20, 2026', readTime: '8 min read', tag: 'UX Research' },
      { id: 5, title: 'Heuristics for Voice and Multimodal Interfaces', excerpt: 'Expanding evaluation criteria beyond screens to include voice, gesture, and spatial AI interactions.', date: 'Feb 14, 2026', readTime: '9 min read', tag: 'Analytics' },
      { id: 6, title: 'Error Recovery in Generative AI Systems', excerpt: 'Evaluating how gracefully an AI system handles misunderstandings, bad outputs, and user corrections.', date: 'Feb 05, 2026', readTime: '7 min read', tag: 'Analytics' },
      { id: 7, title: 'Assessing Bias and Fairness in UX', excerpt: 'A heuristic approach to identifying and mitigating algorithmic bias within the user interface.', date: 'Jan 29, 2026', readTime: '11 min read', tag: 'Analytics' },
      { id: 8, title: 'The Control Heuristic: User Override in AI', excerpt: 'Why users need the ability to override AI decisions, and how to evaluate the effectiveness of these controls.', date: 'Jan 22, 2026', readTime: '6 min read', tag: 'Framework' },
      { id: 9, title: 'Evaluating the "Magic" vs. "Utility" Balance', excerpt: 'Finding the sweet spot between impressive generative capabilities and practical, predictable utility.', date: 'Jan 15, 2026', readTime: '5 min read', tag: 'Strategy' }
    ]
  },
  'glossary-of-ai-ux-interaction': {
    title: 'Glossary of AI-UX Interaction',
    description: 'Comprehensive definitions of key terms in AI and user experience. Your definitive reference guide for the intersection of artificial intelligence and human-centered design.',
    icon: BookOpen,
    articles: [
      { id: 1, title: 'A-C: From Agentic UI to Context Window', excerpt: 'Essential terms starting with A through C, including Agentic UI, Anthropomorphism, and Context Window.', date: 'Mar 20, 2026', readTime: '4 min read', tag: 'Reference' },
      { id: 2, title: 'D-L: From Diffusion Models to LLMs', excerpt: 'Key concepts including Diffusion Models, Hallucination, Heuristics, and Large Language Models.', date: 'Mar 19, 2026', readTime: '5 min read', tag: 'Reference' },
      { id: 3, title: 'M-Z: From Multimodal to Zero-shot', excerpt: 'Advanced terminology including Multimodal Interfaces, Prompt Chaining, System Prompts, and Zero-shot Learning.', date: 'Mar 18, 2026', readTime: '6 min read', tag: 'Reference' },
      { id: 4, title: 'Understanding \'Temperature\' and \'Top-P\'', excerpt: 'A designer\'s guide to the parameters that control the randomness and creativity of AI model outputs.', date: 'Mar 10, 2026', readTime: '5 min read', tag: 'Deep Dive' },
      { id: 5, title: 'What is \'Prompt Chaining\'?', excerpt: 'Defining the process of linking multiple AI prompts to accomplish complex, multi-step tasks.', date: 'Mar 05, 2026', readTime: '4 min read', tag: 'Concept' },
      { id: 6, title: 'Decoding \'Retrieval-Augmented Generation (RAG)\'', excerpt: 'How RAG works and why it\'s crucial for designing AI systems that rely on proprietary or real-time data.', date: 'Feb 28, 2026', readTime: '7 min read', tag: 'Architecture' },
      { id: 7, title: 'The Definition of \'Hallucination\' in UX', excerpt: 'What it means when an AI hallucinates, and the design patterns used to mitigate its impact on users.', date: 'Feb 20, 2026', readTime: '5 min read', tag: 'Concept' },
      { id: 8, title: '\'Few-Shot Learning\' Explained for Designers', excerpt: 'How providing a few examples in a prompt can drastically improve the quality and consistency of AI outputs.', date: 'Feb 12, 2026', readTime: '6 min read', tag: 'Deep Dive' },
      { id: 9, title: '\'Tokenization\' and Its Impact on UI', excerpt: 'Understanding how AI models process text into tokens, and why it matters for input limits and cost.', date: 'Feb 05, 2026', readTime: '5 min read', tag: 'Technical' }
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
      <div className="bg-[#F5F5F7] pt-28 pb-12 px-8 min-h-[320px] md:min-h-[384px] flex flex-col items-center justify-center text-center mb-16">
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
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pb-32">
        
        {data.articles.length > 0 && (() => {
          const articlesWithMeta = data.articles.map((article: any) => ({
            ...article,
            image: `https://picsum.photos/seed/${category}-${article.id}/800/400`,
            author: 'Yun Geun Sik',
            authorRole: 'AI ORCHESTRATOR',
            authorAvatar: `https://i.pravatar.cc/150?u=${category}-${article.id}`,
          }));

          const featuredArticle = articlesWithMeta[0];
          const gridArticles = articlesWithMeta.slice(1);

          return (
            <>
              {/* Featured Article */}
              <Link to="#" className="block mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-900 relative overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={featuredArticle.authorAvatar} alt={featuredArticle.author} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                      <div>
                        <div className="text-sm font-bold text-gray-900">{featuredArticle.author}</div>
                        <div className="text-xs text-gray-500">{featuredArticle.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                      <span>{featuredArticle.date}</span>
                      <span className="text-xs font-bold text-gray-900">{featuredArticle.tag}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid Articles */}
              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridArticles.map((article: any) => (
                    <Link key={article.id} to="#" className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="w-full aspect-[16/9] bg-gray-900 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-display font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4">
                          <div className="flex items-center gap-2">
                            <img src={article.authorAvatar} alt={article.author} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                            <span className="text-xs font-bold text-gray-900">{article.author}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                            <span>{article.date}</span>
                            <span className="font-bold text-gray-900">{article.tag}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          );
        })()}

        {/* Read More Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
