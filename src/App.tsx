import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Recipe from './components/Recipe';
import HowItWorks from './components/HowItWorks';
import InsightsNews from './components/InsightsNews';
import Knowledge from './components/Knowledge';
import Abouts from './components/Abouts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111] relative overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Background Grid - Very faint and large */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      
      <Navbar />
      <Hero />
      <Capabilities />
      <Recipe />
      <HowItWorks />
      <InsightsNews />
      <Knowledge />
      <Abouts />
      <Footer />
    </div>
  );
}
