import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import patLogo from '../assets/patlogo.jpg';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Credentials', id: 'credentials' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
    setIsOpen(false);
  };

  // Lock body scroll and hide page UI when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.classList.toggle('menu-open', isOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Mobile Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <img
              src={patLogo}
              alt="Patricia logo"
              className="w-10 h-10 rounded-full object-cover border border-white/80 shadow-sm"
            />
          </button>

          {/* Desktop Navigation */}
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

          {/* Right: Mobile hamburger and desktop CTA/logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-secondary-dark hover:text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>

            <div className="hidden md:flex items-center gap-4">
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
        </div>
      </header>

      {/* Side-Drawer Backdrop & Panel opening from the UPPER LEFT */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          {/* Light Blur Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-In Side Drawer Container on Upper Right */}
          <div className="relative w-[280px] sm:w-[320px] max-w-[85vw] h-full bg-white/95 text-textDark p-6 shadow-2xl flex flex-col justify-between z-10 border-l border-primary/10 animate-fade-in">
            {/* Top Bar: NAVIGATION Title on Upper Left & Close Button on Upper Right */}
            <div>
              <div className="flex items-center justify-between pb-4">
                <span className="text-xs font-extrabold tracking-[0.2em] text-primary uppercase font-sans">
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-secondary-dark hover:text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="w-full border-b border-primary/15" />
            </div>

            {/* Navigation Links with light palette style */}
            <nav className="flex flex-col space-y-3 pt-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative w-full text-left px-5 py-4 rounded-3xl text-base font-semibold font-sans transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      isActive 
                        ? 'bg-primary/10 text-primary shadow-sm border border-primary/20' 
                        : 'text-secondary-dark hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-6 bg-primary rounded-full flex-shrink-0" />
                    )}
                    <span className={isActive ? 'text-primary font-bold' : 'text-secondary-dark'}>
                      {link.name}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom CTA Button inside Side Drawer */}
            <div>
              <div className="w-full border-t border-primary/15 mb-5" />
              <a
                href="/Patricia_Arlie_Miguel_Resume.pdf"
                download="Patricia_Arlie_Miguel_Resume.pdf"
                className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-3xl font-bold text-sm shadow-lg transition-all duration-300 active:scale-95 font-sans cursor-pointer"
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
