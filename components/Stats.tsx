
import React from 'react';
import { STATS } from '../constants';
import { Reveal } from './MotionWrapper';

const Stats: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:border-[#FF9933]/30 transition-all duration-500 hover-glow">
                <div className="mb-6 p-4 rounded-xl bg-white/5 group-hover:bg-[#FF9933]/10 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-white/40 group-hover:text-white/60 transition-colors">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
