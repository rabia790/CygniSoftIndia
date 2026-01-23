
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#FF9933] to-[#138808] rounded-lg flex items-center justify-center font-bold text-white italic">
            C
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            CygniSoft <span className="text-[#FF9933]">India</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[#FF9933] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-[#FF9933] hover:text-white transition-all duration-300">
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-white/70 hover:text-[#FF9933]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full py-3 bg-[#FF9933] text-white font-bold rounded-lg">
            Contact Team
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
