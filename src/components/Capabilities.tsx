import React, { useRef } from 'react';
import { Layers, Network, Users, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Capabilities() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });
  
  // 4 slides -> 400vw total width. To show the last slide, we translate by -75%
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="relative z-10 border-t border-gray-100 bg-white">
      {/* Horizontal Parallax Scroll Section */}
      <div ref={horizontalScrollRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#fafafa]">
          
          {/* Section Indicator */}
          <div className="absolute top-12 md:top-16 lg:top-24 left-6 md:left-12 lg:left-24 z-50 flex items-center gap-4">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Capabilities</span>
          </div>

          <motion.div style={{ x }} className="flex w-[400vw] h-full items-center">
            
            {/* Slide 01 */}
            <div className="w-screen h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white">
              <div className="flex items-start mb-8 lg:mb-16">
                <h3 className="text-[2.0rem] sm:text-[3rem] md:text-[5.0rem] lg:text-[6rem] font-display font-medium leading-[0.9] tracking-tight text-[#0a0a0a]">
                  Integrate the process
                </h3>
                <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light ml-2 md:ml-4 lg:ml-6 mt-1 md:mt-2 lg:mt-4">01</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
                <div className="lg:col-span-7 w-full">
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] grid grid-cols-4 grid-rows-3 gap-2 md:gap-4">
                    <div className="col-span-2 row-span-3 bg-[#4ade80] rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/40 shadow-2xl">
                        <Layers className="w-10 h-10 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="col-span-1 row-span-2 bg-[#0f172a] rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4">
                      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#4ade80]"></div>
                      <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-white/20"></div>
                    </div>
                    <div className="col-span-1 row-span-1 bg-[#fde047] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-1 row-span-1 bg-[#bbf7d0] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-2 row-span-1 bg-[#f8fafc] rounded-xl md:rounded-2xl flex items-center px-4 md:px-8">
                      <div className="w-full h-1 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-[#4ade80]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col items-start">
                  <p className="text-lg md:text-2xl lg:text-[2.25rem] text-[#0a0a0a] leading-[1.3] tracking-tight mb-8 md:mb-12">
                    기획과 동시에 프로토타입을 눈으로 확인합니다. 디자이너가 구현하고 개발자가 설계하는 '경계의 붕괴'를 통해 파편화 없는 무결점의 지능형 프로세스를 완성합니다.
                  </p>                 
                </div>
              </div>
            </div>

            {/* Slide 02 */}
            <div className="w-screen h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white">
              <div className="flex items-start mb-8 lg:mb-16">
                <h3 className="text-[2.0rem] sm:text-[3rem] md:text-[5.0rem] lg:text-[6rem] font-display font-medium leading-[0.9] tracking-tight text-[#0a0a0a]">
                  Systemize the knowledge
                </h3>
                <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light ml-2 md:ml-4 lg:ml-6 mt-1 md:mt-2 lg:mt-4">02</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
                <div className="lg:col-span-7 w-full">
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] grid grid-cols-4 grid-rows-3 gap-2 md:gap-4">
                    <div className="col-span-1 row-span-3 bg-[#f8fafc] rounded-xl md:rounded-2xl flex flex-col gap-2 p-2 md:p-3">
                      <div className="flex-1 bg-[#e0e7ff] rounded-lg md:rounded-xl"></div>
                      <div className="flex-1 bg-[#c7d2fe] rounded-lg md:rounded-xl"></div>
                      <div className="flex-1 bg-[#a5b4fc] rounded-lg md:rounded-xl"></div>
                    </div>
                    <div className="col-span-2 row-span-2 bg-[#6366f1] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Network className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="col-span-1 row-span-2 bg-[#1e1b4b] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-3 row-span-1 bg-[#fef08a] rounded-xl md:rounded-2xl flex items-center justify-between px-6 md:px-10">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black/20"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black/20"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black/20"></div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black/40" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col items-start">
                  <p className="text-lg md:text-2xl lg:text-[2.25rem] text-[#0a0a0a] leading-[1.3] tracking-tight mb-8 md:mb-12">
                    에이전시의 숙련도에 의존하지 않습니다. 성공적인 프로젝트 경험과 전문가의 노하우를 내부 통합 플랫폼에 systemize하여 영구적인 지식 자산으로 보존합니다.
                  </p>
                                 </div>
              </div>
            </div>

            {/* Slide 03 */}
            <div className="w-screen h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white">
              <div className="flex items-start mb-8 lg:mb-16">
                <h3 className="text-[2.0rem] sm:text-[3rem] md:text-[5.0rem] lg:text-[6rem] font-display font-medium leading-[0.9] tracking-tight text-[#0a0a0a]">
                  Elevate your brand
                </h3>
                <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light ml-2 md:ml-4 lg:ml-6 mt-1 md:mt-2 lg:mt-4">03</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
                <div className="lg:col-span-7 w-full">
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] grid grid-cols-4 grid-rows-3 gap-2 md:gap-4">
                    <div className="col-span-3 row-span-2 bg-[#f3e8ff] rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d8b4fe] to-transparent"></div>
                      <Users className="w-16 h-16 md:w-24 md:h-24 text-[#9333ea] relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="col-span-1 row-span-1 bg-[#3b0764] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-1 row-span-2 bg-[#fbcfe8] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-2 row-span-1 bg-[#f8fafc] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <div className="flex -space-x-3 md:-space-x-4">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#d8b4fe] border-2 border-white"></div>
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#c084fc] border-2 border-white"></div>
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#a855f7] border-2 border-white"></div>
                      </div>
                    </div>
                    <div className="col-span-1 row-span-1 bg-[#f3e8ff] rounded-xl md:rounded-2xl"></div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col items-start">
                  <p className="text-lg md:text-2xl lg:text-[2.25rem] text-[#0a0a0a] leading-[1.3] tracking-tight mb-8 md:mb-12">
                    AI는 전문가를 대체하지 않고 역량을 끌어올립니다. 반복 업무를 AI에게 위임하여 확보한 시간은 오직 고부가가치 창출에 집중되어 고객의 브랜드를 elevate 시킵니다.
                  </p>                 
                </div>
              </div>
            </div>

            {/* Slide 04 */}
            <div className="w-screen h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white">
              <div className="flex items-start mb-8 lg:mb-16">
                <h3 className="text-[2.0rem] sm:text-[3rem] md:text-[5.0rem] lg:text-[6rem]font-display font-medium leading-[0.9] tracking-tight text-[#0a0a0a]">
                  Scale your Future
                </h3>
                <span className="text-xl md:text-3xl lg:text-5xl text-gray-400 font-light ml-2 md:ml-4 lg:ml-6 mt-1 md:mt-2 lg:mt-4">04</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
                <div className="lg:col-span-7 w-full">
                  <div className="w-full aspect-[16/10] md:aspect-[16/9] grid grid-cols-4 grid-rows-3 gap-2 md:gap-4">
                    <div className="col-span-1 row-span-1 bg-[#ffedd5] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-2 row-span-3 bg-[#ea580c] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="col-span-1 row-span-2 bg-[#431407] rounded-xl md:rounded-2xl"></div>
                    <div className="col-span-1 row-span-2 bg-[#f8fafc] rounded-xl md:rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-[#fdba74] border-t-[#ea580c]"></div>
                    </div>
                    <div className="col-span-1 row-span-1 bg-[#ffedd5] rounded-xl md:rounded-2xl"></div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col items-start">
                  <p className="text-lg md:text-2xl lg:text-[2.25rem] text-[#0a0a0a] leading-[1.3] tracking-tight mb-8 md:mb-12">
                    구축이 끝이 아닙니다. 운영 단계에서 AI 분석 데이터를 기반으로 새로운 비즈니스 기회를 선제적으로 역제안하여 고객사의 미래 비즈니스를 무한히 scale 합니다.
                  </p>                 
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
