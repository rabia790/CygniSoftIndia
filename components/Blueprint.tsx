
import React from 'react';
import { BLUEPRINT_STEPS } from '../constants';
import { Reveal } from './MotionWrapper';

const Blueprint: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Agile Blueprint</h2>
            <p className="text-white/50 text-lg">
              A battle-tested methodology designed for offshore speed and enterprise-grade precision.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white/40">
              <span>Standardized</span>
              <div className="w-12 h-px bg-white/20" />
              <span>Scalable</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/5 z-0" />
          
          {BLUEPRINT_STEPS.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="relative z-10">
              <div className="glass-card p-10 rounded-3xl group hover:bg-white/5 transition-all duration-500 min-h-[300px] flex flex-col">
                <span className="text-6xl font-black text-white/5 absolute top-4 right-6 group-hover:text-[#FF9933]/10 transition-colors pointer-events-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-[#FF9933] mb-8 bg-[#050505] group-hover:border-[#FF9933] transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
