
import React from 'react';
import { Linkedin, Facebook, Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <a href="/" className="flex items-center">
                <img 
                  src="/img/cygnisoft.png" 
                  alt="Logo" 
                  className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                />
              </a>
            </div>
            <p className="text-white/40 leading-relaxed mb-8">
              Empowering global enterprise innovation through elite Indian engineering and cutting-edge software solutions.
            </p>
           <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cygnisoft/"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"
              >
                <Linkedin size={18} />
              </a>

              {/* Updated Facebook Link */}
              <a 
                href="https://www.facebook.com/profile.php?id=61588040461783"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"
              >
                <Facebook size={18} />
              </a>

              {/* New Instagram Link */}
              <a 
                href="https://www.instagram.com/cygnisoftstaffingindia"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all"
              >
                <Instagram size={18} />
              </a>

              {/* X (Formerly Twitter) */}
              <a 
                href="https://x.com/cygnisoft" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 text-white/40 hover:text-[#FF9933] hover:bg-white/10 transition-all flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                </svg>
              </a>
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
                <p className="text-white/40 mt-1">974/1 GICD Makarpura Road, Vadodara, Gujarat, India 390010</p>
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
            <a href="https://cygnisoft.com//privacy-policy/" target="_blank" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://cygnisoft.com/employee-handbook/" target="_blank" className="hover:text-white transition-colors">Employee Handbook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
