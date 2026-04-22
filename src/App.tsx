import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import Knowledge from './components/Knowledge';
import BlogPreview from './components/BlogPreview';
import NextExperience from './components/NextExperience';
import Footer from './components/Footer';
import FloatingBadge from './components/FloatingBadge';
import KnowledgeCategory from './pages/KnowledgeCategory';
import ContentCategory from './pages/ContentCategory';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import AIPromptLibrary from './pages/AIPromptLibrary';
import HowItWorksPage from './pages/HowItWorksPage';
import NxAgentArchitecturePage from './pages/NxAgentArchitecturePage';
import SEO from './components/SEO';

import { motion } from 'motion/react';

const FadeSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function Home() {
  return (
    <>
      <SEO 
        title="홈" 
        description="IPARTNERS NX - AI Agent 기반의 새로운 비즈니스 솔루션과 혁신적인 사용자 경험을 제공합니다." 
      />
      <Hero />
      <Capabilities />
      <FadeSection><HowItWorks /></FadeSection>
      <FadeSection><BlogPreview /></FadeSection>
      <FadeSection><Knowledge /></FadeSection>
      <FadeSection><NextExperience /></FadeSection>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#fcfcfc] text-[#111] relative overflow-x-clip font-sans selection:bg-black selection:text-white">
          {/* Background Grid - Very faint and large */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none"></div>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge/ai-prompt-library" element={<AIPromptLibrary />} />
            <Route path="/knowledge/:category" element={<KnowledgeCategory />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/nx-agent-architecture" element={<NxAgentArchitecturePage />} />
            <Route path="/content/:category" element={<ContentCategory />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
