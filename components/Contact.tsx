import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Reveal } from './MotionWrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Accelerate?</h2>
            <p className="text-xl text-white/50 mb-12 leading-relaxed">
              Connect with our India regional headquarters to explore staffing solutions, 
              custom software projects, or corporate training partnerships.
            </p>
            
            <div className="space-y-8">
              {/* --- UPDATED EMAIL SECTION --- */}
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-[#FF9933]/10 text-[#FF9933]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <a 
                    href="mailto:manager@cygnisoft.com" 
                    className="text-white/40 hover:text-[#FF9933] transition-colors duration-300"
                  >
                    hr@cygnisoft.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-[#138808]/10 text-[#138808]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sales & Partnerships</h4>
                  <p className="text-white/40">+91 8460160882</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-card p-8 md:p-12 rounded-[40px] border-white/10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF9933] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Business Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF9933] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Service Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF9933] transition-colors appearance-none">
                      <option className="bg-[#111]">Select a Service</option>
                      <option className="bg-[#111]">Elite Tech Staffing</option>
                      <option className="bg-[#111]">Custom Software Development</option>
                      <option className="bg-[#111]">Corporate Training Programs</option>
                      <option className="bg-[#111]">Offshore Managed Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Your Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your project or staffing needs..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF9933] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => {
                    const subject = encodeURIComponent("Inquiry from CygniSoft India Website");
                    window.location.href = `mailto:hr@cygnisoft.com?subject=${subject}`;
                  }}
                  className="w-full py-5 bg-[#FF9933] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#e68a2e] transition-all group"
                >
                  Connect with CygniSoft India
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;