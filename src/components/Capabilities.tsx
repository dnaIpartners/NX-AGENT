import React, { useRef } from 'react';
import { Layers, Network, Users, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

const textLines = [
  "Integrate the process,",
  "Systemize the knowledge.",
  "Elevate your brand,",
  "and Scale your future."
];

const Character = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const color = useTransform(progress, range, ["#E2E2E2", "#0a0a0a"]);
  return <motion.span style={{ color }}>{children}</motion.span>;
};

export default function Capabilities() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 40%"]
  });
  
  const totalChars = textLines.join("").length;
  let charCount = 0;

  return (
    <section className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-8 py-24 lg:py-32 border-t border-gray-100">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Capabilities</span>
        </div>
        <h2 
          ref={textRef}
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-display font-medium leading-[1.1] tracking-[-0.02em] max-w-[1000px] flex flex-col"
        >
          {textLines.map((line, lineIndex) => (
            <span key={lineIndex} className="block">
              {line.split("").map((char, charIndex) => {
                const start = charCount / totalChars;
                const end = start + (1 / totalChars);
                charCount++;
                return (
                  <Character key={charIndex} progress={scrollYProgress} range={[start, end]}>
                    {char === " " ? "\u00A0" : char}
                  </Character>
                );
              })}
            </span>
          ))}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Item 01 */}
        <div className="group relative bg-[#F5F5F7] rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col min-h-[380px]">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 transform translate-x-8 -translate-y-8 pointer-events-none">
            <Layers className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex justify-between items-start mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-mono text-gray-400 font-medium">01</span>
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Integrate the Workflow</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
              기획과 동시에 프로토타입을 눈으로 확인합니다. 디자이너가 구현하고 개발자가 설계하는 '경계의 붕괴'를 통해 파편화 없는 무결점의 지능형 워크플로우를 완성합니다
            </p>
          </div>
        </div>

        {/* Item 02 */}
        <div className="group relative bg-[#F5F5F7] rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col min-h-[380px]">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 transform translate-x-8 -translate-y-8 pointer-events-none">
            <Network className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex justify-between items-start mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Network className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-mono text-gray-400 font-medium">02</span>
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Systemize the Intelligence</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
              에이전시의 숙련도에 의존하지 않습니다. 성공적인 프로젝트 경험과 전문가의 노하우를 내부 통합 플랫폼(i-AX)에 systemize하여 영구적인 자산으로 보존합니다
            </p>
          </div>
        </div>

        {/* Item 03 */}
        <div className="group relative bg-[#F5F5F7] rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col min-h-[380px]">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 transform translate-x-8 -translate-y-8 pointer-events-none">
            <Users className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex justify-between items-start mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-mono text-gray-400 font-medium">03</span>
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Elevate the Expertise</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
              AI는 전문가를 대체하지 않고 끌어올립니다(Level Up). 반복 업무를 AI 에이전트에게 위임하여 절감된 30%의 시간은 오직 고부가가치 창출에 집중되어 산출물의 품질을 elevate 시킵니다
            </p>
          </div>
        </div>

        {/* Item 04 */}
        <div className="group relative bg-[#F5F5F7] rounded-[2rem] p-10 lg:p-12 overflow-hidden hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col min-h-[380px]">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 transform translate-x-8 -translate-y-8 pointer-events-none">
            <ShieldCheck className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex justify-between items-start mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-mono text-gray-400 font-medium">04</span>
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Scale the Business</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed break-keep">
              구축이 끝이 아닙니다. 운영 단계에서 AI 분석 데이터를 기반으로 새로운 비즈니스 기회를 선제적으로 역제안하여 고객사의 성장을 무한히 scale 합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
