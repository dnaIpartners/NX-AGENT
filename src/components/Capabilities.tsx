import React from 'react';
import { Layers, Network, Users, ShieldCheck } from 'lucide-react';

export default function Capabilities() {
  return (
    <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Capabilities</span>
        </div>
        <h2 className="text-[3rem] sm:text-[4rem] font-display font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
         Integrate the process, Systemize the knowledge. Elevate your brand, and Scale your future.<br />
          <span className="text-gray-400">and Scale your future.</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Item 01 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">01</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Integrate the Workflow</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                기획과 동시에 프로토타입을 눈으로 확인합니다. 디자이너가 구현하고 개발자가 설계하는 '경계의 붕괴'를 통해 파편화 없는 무결점의 지능형 워크플로우를 완성합니다
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
            <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Layers className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Item 02 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">02</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Systemize the Intelligence </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                에이전시의 숙련도에 의존하지 않습니다. 성공적인 프로젝트 경험과 전문가의 노하우를 내부 통합 플랫폼(i-AX)에 systemize하여 영구적인 자산으로 보존합니다
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
            <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Network className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Item 03 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">03</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Elevate the Expertise</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
              AI는 전문가를 대체하지 않고 끌어올립니다(Level Up). 반복 업무를 AI 에이전트에게 위임하여 절감된 30%의 시간은 오직 고부가가치 창출에 집중되어 산출물의 품질을 elevate 시킵니다
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
            <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Users className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Item 04 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-100 group">
          <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
            <span className="text-xs font-mono text-gray-400 mt-2">04</span>
            <div>
              <h3 className="text-[1.75rem] font-display font-medium tracking-tight text-[#0a0a0a] mb-3">Scale the Business</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
               구축이 끝이 아닙니다. 운영 단계에서 AI 분석 데이터를 기반으로 새로운 비즈니스 기회를 선제적으로 역제안하여 고객사의 성장을 무한히 scale 합니다
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
            <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <ShieldCheck className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-16 flex justify-center">
        <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2">
          Read More
        </button>
      </div>
    </section>
  );
}
