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

  // Helper function to handle smooth scroll while allowing the URL to update
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/img/cygnisoft.png" 
            alt="Logo" 
            className="h-20 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => handleScrollToSection(link.href.replace('#', ''))}
              className="text-sm font-medium text-white/70 hover:text-[#FF9933] transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          {/* Updated Contact Link - No preventDefault() here so ID adds to URL */}
          <a 
            href="#contact"
            onClick={() => handleScrollToSection('contact')}
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-[#FF9933] hover:text-white transition-all duration-300"
          >
            Contact
          </a>
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
              onClick={() => handleScrollToSection(link.href.replace('#', ''))}
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#contact"
            onClick={() => handleScrollToSection('contact')}
            className="w-full py-3 bg-[#FF9933] text-white font-bold rounded-lg text-center"
          >
            Contact Team
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;