import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Recipe from './components/Recipe';
import HowItWorks from './components/HowItWorks';
import InsightsNews from './components/InsightsNews';
import Knowledge from './components/Knowledge';
import Abouts from './components/Abouts';
import Footer from './components/Footer';
import KnowledgeCategory from './pages/KnowledgeCategory';
import ContentCategory from './pages/ContentCategory';

function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Recipe />
      <HowItWorks />
      <InsightsNews />
      <Knowledge />
      <Abouts />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fcfcfc] text-[#111] relative overflow-hidden font-sans selection:bg-black selection:text-white">
        {/* Background Grid - Very faint and large */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none"></div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge/:category" element={<KnowledgeCategory />} />
          <Route path="/content/:category" element={<ContentCategory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
