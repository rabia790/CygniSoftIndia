
import React from 'react';
import { PILLARS } from '../constants';
import { Reveal } from './MotionWrapper';

const Pillars: React.FC = () => {
  return (
    <section id="technology" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Pillars</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF9933] to-[#138808] mx-auto rounded-full" />
            <p className="mt-8 text-white/50 max-w-2xl mx-auto text-lg">
              Combining technical mastery with global delivery frameworks to drive digital transformation from India.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PILLARS.map((pillar, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="h-full glass-card p-10 rounded-3xl border border-white/5 hover:border-[#138808]/40 transition-all duration-500 group flex flex-col">
                <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#138808] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-lg flex-grow">
                  {pillar.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-sm font-bold flex items-center gap-2 text-[#FF9933] hover:underline">
                    Learn More 
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
