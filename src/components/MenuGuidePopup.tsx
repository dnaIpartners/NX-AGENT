import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, Newspaper, BookOpen, FolderOpen, HelpCircle, Home } from 'lucide-react';

export default function MenuGuidePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Removed sessionStorage check so it always pops up for demonstration
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const menus = [
    {
      icon: Layers,
      title: 'HOW IT WORKS',
      desc: 'AI 도입 및 지능형 동시 구현 프로세스',
    },
    {
      icon: Newspaper,
      title: 'INSIGHTS NEWS',
      desc: '최신 트렌드, 심층 분석 및 기업 소식',
    },
    {
      icon: FolderOpen,
      title: 'CASE STUDIES',
      desc: 'AI 전환 및 디지털 전환 케이스 스터디',
    },
     {
      icon: FolderOpen,
      title: 'NX AGENT ( 준비중 )',
      desc: '아이파트너즈 AI AGENT ',
    },
    {
      icon: BookOpen,
      title: 'KNOWLEDGE',
      desc: 'AI/UX 관련 지식 라이브러리 및 아티클',
      subItems: [
        'Prompt Library',
        'UX Heuristic Evaluation',
        'Contextual Prompt Engineering',
        'Glossary of UX Interaction'
      ]
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      desc: '자주 묻는 질문 및 답변',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
          >
            <div className="p-6 flex-1 overflow-y-auto scrollbar-hide">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-display font-medium text-gray-900">
                    Site Map
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    아이파트너즈 NX의 전체 메뉴 구조입니다.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                {/* Root Node */}
                <div className="flex items-center gap-3 mb-1 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shadow-md">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-display font-semibold text-lg text-gray-900">IPARTNERS NX</span>
                </div>

                {/* Tree Container */}
                <div className="ml-5">
                  {menus.map((menu, idx) => {
                    const isLast = idx === menus.length - 1;
                    const Icon = menu.icon;
                    return (
                      <div key={idx} className="relative pl-8 py-2">
                        {/* Main Vertical Line */}
                        <div className={`absolute left-0 top-0 w-px bg-gray-300 ${isLast ? 'h-[24px]' : 'h-full'}`} />
                        {/* Main Horizontal Line */}
                        <div className="absolute left-0 top-[24px] w-8 h-px bg-gray-300" />

                        <div className="flex items-start gap-3 relative z-10">
                          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                            <Icon className="w-4 h-4 text-gray-700" />
                          </div>
                          <div className="pt-1.5">
                            <h3 className="text-sm font-bold text-gray-900 tracking-tight">{menu.title}</h3>
                            {menu.desc && <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">{menu.desc}</p>}
                          </div>
                        </div>

                        {menu.subItems && (
                          <div className="relative mt-1">
                            {/* Connecting line to bridge gap between icon and sub-items */}
                            <div className="absolute left-[16px] top-[-8px] w-px h-[8px] bg-gray-300" />
                            {menu.subItems.map((item, i) => {
                              const isLastSub = i === menu.subItems.length - 1;
                              return (
                                <div key={i} className="relative pl-[40px] py-1.5">
                                  {/* Sub Vertical Line */}
                                  <div className={`absolute left-[16px] top-0 w-px bg-gray-300 ${isLastSub ? 'h-[16px]' : 'h-full'}`} />
                                  {/* Sub Horizontal Line */}
                                  <div className="absolute left-[16px] top-[16px] w-[24px] h-px bg-gray-300" />

                                  <div className="flex items-center gap-2.5 relative z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                    <span className="text-[13px] text-gray-600 font-medium">{item}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
