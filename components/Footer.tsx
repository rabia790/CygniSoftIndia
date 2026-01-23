
import React from 'react';
import { Linkedin, Twitter, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#FF9933] to-[#138808] rounded-lg flex items-center justify-center font-bold text-white italic">
                C
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                CygniSoft <span className="text-[#FF9933]">India</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed mb-8">
              Empowering global enterprise innovation through elite Indian engineering and cutting-edge software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#talent" className="hover:text-white transition-colors">Talent Solutions</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology Stack</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training Hub</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Open Roles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Global Locations</h4>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF9933]">Global HQ</span>
                <p className="text-white/40 mt-1">Etobicoke, Ontario, Canada</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#138808]">India Hub</span>
                <p className="text-white/40 mt-1">Noida IT Park, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Our Mission</h4>
            <p className="text-white/40 leading-relaxed italic">
              "To bridge the gap between world-class Indian talent and global innovation hurdles."
            </p>
            <div className="mt-8 flex items-center gap-2 text-[#FF9933] font-bold text-sm">
              <Globe size={16} />
              One Team. Global Scale.
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/20">
          <p>© {new Date().getFullYear()} CygniSoft Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
