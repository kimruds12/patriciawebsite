import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Credentials', id: 'credentials' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  // Lock body scroll when mobile side drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Mobile Hamburger Button & Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button on Upper Left */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-secondary-dark hover:text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold tracking-tight text-primary transition-transform hover:scale-105 active:scale-95 cursor-pointer font-sans hover:ring-4 hover:ring-primary/10 rounded-lg px-2 py-1"
            >
              PATRICIA<span className="text-secondary font-medium">.DEV</span>
            </button>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-all cursor-pointer font-sans hover:scale-105 rounded-md px-2 ${
                  activeSection === link.id ? 'text-primary' : 'text-secondary-dark hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/Patricia_Arlie_Miguel_Resume.pdf"
              download="Patricia_Arlie_Miguel_Resume.pdf"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-premium transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-primary/25 focus:ring-4 focus:ring-primary/35 active:scale-95 cursor-pointer font-sans"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Side-Drawer Backdrop & Panel opening from the UPPER LEFT */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-start">
          {/* Dark Blur Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-In Side Drawer Container on Upper Left (matching Image 5 exact styling) */}
          <div className="relative w-[280px] sm:w-[320px] max-w-[85vw] h-full bg-[#181617] text-white p-6 shadow-2xl flex flex-col justify-between z-10 border-r border-white/10 animate-fade-in">
            
            {/* Top Bar: NAVIGATION Title on Upper Left & Close Button on Upper Right */}
            <div>
              <div className="flex items-center justify-between pb-4">
                <span className="text-xs font-extrabold tracking-[0.2em] text-primary uppercase font-sans">
                  NAVIGATION
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full border-b border-white/10" />
            </div>

            {/* Navigation Links with Active Accent Bar (Image 5 style) */}
            <nav className="flex flex-col space-y-3 my-auto py-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative w-full text-left px-5 py-3.5 rounded-xl text-base font-bold font-sans transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      isActive 
                        ? 'bg-[#2E292B] text-white shadow-md' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {/* Active Accent Bar on the Left */}
                    {isActive && (
                      <span className="w-1 h-5 bg-primary rounded-full flex-shrink-0" />
                    )}
                    <span className={isActive ? 'text-white font-extrabold' : ''}>
                      {link.name}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom CTA Button inside Side Drawer (Terracotta Download CV) */}
            <div>
              <div className="w-full border-t border-white/10 mb-5" />
              <a
                href="/Patricia_Arlie_Miguel_Resume.pdf"
                download="Patricia_Arlie_Miguel_Resume.pdf"
                className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all duration-300 active:scale-95 font-sans cursor-pointer"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
