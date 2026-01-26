
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#FF9933]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#138808]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">
            India Global Excellence Hub
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8"
        >
          Bridging Indian Talent <br />
          <span className="gradient-text-saffron">with Global Innovation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
        >
          Bespoke software solutions and elite technical staffing from the heart of India. 
          Empowering global enterprises with high-performance engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group w-full sm:w-auto px-10 py-5 bg-[#FF9933] text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#e68a2e] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#FF9933]/20">
            Talk to Our India Team
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
          onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
          className="group w-full sm:w-auto px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all transform hover:-translate-y-1">
            Explore Capabilities
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
