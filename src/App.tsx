import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import InsightsNews from './components/InsightsNews';
import Knowledge from './components/Knowledge';
import NextExperience from './components/NextExperience';
import Footer from './components/Footer';
import FloatingBadge from './components/FloatingBadge';
import KnowledgeCategory from './pages/KnowledgeCategory';
import ContentCategory from './pages/ContentCategory';
import InsightsNewsPage from './pages/InsightsNewsPage';
import FaqPage from './pages/FaqPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AIPromptLibrary from './pages/AIPromptLibrary';
import HowItWorksPage from './pages/HowItWorksPage';
import ObservabilityPage from './pages/ObservabilityPage';

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <HowItWorks />
      <InsightsNews />
      <Knowledge />
      <NextExperience />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfcfc] text-[#111] relative overflow-x-clip font-sans selection:bg-black selection:text-white">
        {/* Background Grid - Very faint and large */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none"></div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge/ai-prompt-library" element={<AIPromptLibrary />} />
          <Route path="/knowledge/:category" element={<KnowledgeCategory />} />
          <Route path="/content/how-it-works" element={<HowItWorksPage />} />
          <Route path="/observability" element={<ObservabilityPage />} />
          <Route path="/content/:category" element={<ContentCategory />} />
          <Route path="/insights-news" element={<InsightsNewsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
