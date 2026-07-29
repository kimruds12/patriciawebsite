import React, { useState } from 'react';
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
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold tracking-tight text-primary transition-transform hover:scale-105 active:scale-95 cursor-pointer font-sans hover:ring-4 hover:ring-primary/10 rounded-lg px-2 py-1"
        >
          PATRICIA<span className="text-secondary font-medium">.DEV</span>
        </button>

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

        {/* Right CTA Button (Highlight on hover) */}
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-secondary-dark hover:text-primary hover:ring-4 hover:ring-primary/10 rounded-full transition-colors cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left py-2 font-semibold font-sans transition-colors cursor-pointer rounded-lg hover:bg-gray-50 ${
                activeSection === link.id ? 'text-primary border-l-2 border-primary pl-3' : 'text-secondary-dark hover:text-primary pl-3'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="/Patricia_Arlie_Miguel_Resume.pdf"
            download="Patricia_Arlie_Miguel_Resume.pdf"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-bold text-sm shadow-premium transition-all duration-300 hover:ring-4 hover:ring-primary/25 active:scale-95 font-sans cursor-pointer"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};
