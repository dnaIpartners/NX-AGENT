import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Cloud, Cpu, GitPullRequest, CheckCircle2, Activity, Search } from 'lucide-react';

export default function ObservabilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden pt-24">
      {/* Background Stars/Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-sm bg-blue-900/40 text-blue-300 text-[10px] font-bold tracking-widest mb-6 uppercase border border-blue-500/30"
          >
            Why IPARTNERS NX?
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            Observability on Autopilot
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Collection, detection, remediation - automated.
          </motion.p>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full min-h-[800px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[30%] z-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Zero Instrumentation.<br/>E2E Observability.
            </h2>
            <p className="text-gray-400 text-sm mb-2">One helm install, that's it.</p>
            <p className="text-gray-400 text-sm mb-8">Our collectors are powered by eBPF, we get everything from the kernel.</p>
            
            <ul className="space-y-5">
              {[
                "See inside any application, whether you have the source code or not",
                "1 Minute install",
                "Zero code changes required"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-purple-500/10 p-1 rounded-full text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-300 text-sm leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center Diagram Area */}
          <div className="w-full lg:w-[40%] relative min-h-[600px] flex flex-col items-center justify-center z-10">
            {/* SVG Connecting Lines - Hidden on mobile for simplicity */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: -1 }}>
                <path d="M 50% 15% L 50% 25%" stroke="#00A3FF" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 50% 45% L 50% 55%" stroke="#00A3FF" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 50% 70% L 50% 80%" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 50% 95% L 50% 105%" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            </svg>

            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                
                {/* Terminal Node */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 w-64 shadow-2xl relative"
                >
                    <div className="text-[10px] text-gray-500 mb-2 font-mono">Terminal</div>
                    <div className="font-mono text-green-400 text-xs">$ helm install ipartners-nx</div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-[10px] px-2 py-1 rounded whitespace-nowrap hidden lg:block">
                        Deploys Agent
                    </div>
                </motion.div>

                {/* Kubernetes Node */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5 w-full shadow-2xl mt-4 relative"
                >
                    <div className="text-sm font-bold mb-4 text-gray-200">Kubernetes Cluster</div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#111] border border-gray-800 rounded p-2">
                            <div className="text-[10px] font-bold text-blue-400 mb-2">Node 1</div>
                            <div className="space-y-1">
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">frontend</div>
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">api</div>
                            </div>
                        </div>
                        <div className="bg-[#111] border border-gray-800 rounded p-2">
                            <div className="text-[10px] font-bold text-blue-400 mb-2">Node 2</div>
                            <div className="space-y-1">
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">worker</div>
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">redis</div>
                            </div>
                        </div>
                        <div className="bg-[#111] border border-gray-800 rounded p-2">
                            <div className="text-[10px] font-bold text-blue-400 mb-2">Node 3</div>
                            <div className="space-y-1">
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">postgres</div>
                                <div className="bg-[#1a1a1a] text-[9px] text-gray-400 p-1 rounded border border-gray-800">kafka</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 bg-purple-900/20 border border-purple-500/30 rounded p-2 flex justify-between items-center">
                        <span className="text-[10px] text-purple-400 font-bold">NX eBPF Agent</span>
                        <span className="text-[10px] text-purple-400 font-bold">NX eBPF Agent</span>
                        <span className="text-[10px] text-purple-400 font-bold">NX eBPF Agent</span>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-green-400 text-[10px] whitespace-nowrap font-mono hidden lg:block">
                        Traces, Metrics, Logs, Profiling
                    </div>
                </motion.div>

                {/* Cloud Node */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 w-64 shadow-2xl mt-4 relative"
                >
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 text-orange-400 text-[10px] whitespace-nowrap font-mono hidden lg:block">
                        Observability Data
                    </div>
                    <div className="text-sm font-bold mb-1 flex items-center gap-2 text-gray-200">
                        <Cloud size={14} className="text-blue-400"/> NX Cloud
                    </div>
                    <div className="text-[10px] text-gray-500 mb-3">Data Storage & Analytics</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#111] border border-gray-800 rounded p-1.5 text-[10px] text-center text-green-400 font-mono">.Metrics</div>
                        <div className="bg-[#111] border border-gray-800 rounded p-1.5 text-[10px] text-center text-blue-400 font-mono">.Logs</div>
                        <div className="bg-[#111] border border-gray-800 rounded p-1.5 text-[10px] text-center text-purple-400 font-mono">.Traces</div>
                        <div className="bg-[#111] border border-gray-800 rounded p-1.5 text-[10px] text-center text-orange-400 font-mono">.Profiling</div>
                    </div>
                </motion.div>

                {/* AI Node */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 w-full shadow-2xl mt-4 relative"
                >
                    <div className="text-sm font-bold mb-1 flex items-center gap-2 text-gray-200">
                        <Cpu size={14} className="text-purple-400"/> NX AI
                    </div>
                    <div className="text-[10px] text-gray-500 mb-3">Observability Agent</div>
                    <div className="space-y-2">
                        <div className="bg-[#111] border border-orange-900/30 rounded p-2">
                            <div className="text-[10px] font-bold text-orange-400 flex items-center gap-1"><Activity size={10}/> Anomaly Detection</div>
                            <div className="text-[9px] text-gray-500 mt-1">Detects unusual patterns in your envs</div>
                        </div>
                        <div className="bg-[#111] border border-blue-900/30 rounded p-2">
                            <div className="text-[10px] font-bold text-blue-400 flex items-center gap-1"><Search size={10}/> Autonomous Root Causing</div>
                            <div className="text-[9px] text-gray-500 mt-1">Analyzes observability data and code to root cause issues</div>
                        </div>
                        <div className="bg-[#111] border border-green-900/30 rounded p-2">
                            <div className="text-[10px] font-bold text-green-400 flex items-center gap-1"><GitPullRequest size={10}/> PRs for fixes</div>
                            <div className="text-[9px] text-gray-500 mt-1">Creates pull requests to fix detected root causes</div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-900/30 border border-orange-500/30 text-orange-400 text-[10px] px-2 py-1 rounded whitespace-nowrap hidden lg:block">
                        Creates PRs to fix root causes
                    </div>
                </motion.div>

                {/* PR Node */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 w-full shadow-2xl mt-8"
                >
                    <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold mb-2">
                        <GitPullRequest size={12} /> Open
                    </div>
                    <div className="text-xs font-bold text-gray-200 mb-1">fix: Handle LLM call failure gracefully #247</div>
                    <div className="text-[9px] text-gray-500 mb-3">opened 2 hours ago by nx-guardian</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="text-green-400">+152</span>
                        <span className="text-red-400">-48</span>
                        <span className="text-gray-400">12 files</span>
                    </div>
                    <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-green-500 w-[70%]"></div>
                        <div className="h-full bg-red-500 w-[30%]"></div>
                    </div>
                </motion.div>

            </div>
          </div>

          {/* Right Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[30%] z-20 mt-12 lg:mt-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Find and fix issues <span className="line-through text-red-500 decoration-2">quickly</span> <span className="text-blue-400">automatically</span>.
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              IPARTNERS NX autonomously detects issues, finds the root cause and <span className="text-green-400 font-medium">raises a PR</span>.
            </p>
            
            <ul className="space-y-5">
              {[
                "Examines traces, logs and metrics in real time",
                "Correlates telemetry with your code to confirm root causes",
                "Raises a fix for you to review"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-purple-500/10 p-1 rounded-full text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-300 text-sm leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
