import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Show scroll-to-top button after scrolling past 300px
        setShowScrollTop(containerRef.current.scrollTop > 300);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'contact'];
    
    const options = {
      root: containerRef.current, // Target scroll tracking inside container
      rootMargin: '-30% 0px -30% 0px', // Trigger activation in middle of view
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bgLight select-none">
      {/* Fixed top Navbar Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Scroll Snapping Container */}
      <div 
        ref={containerRef} 
        className="scroll-container w-full h-full"
      >
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Contact />
      </div>

      {/* Floating Interactive Scroll-To-Top Pop-up Button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-primary hover:bg-primary-dark text-white shadow-premium border border-white/20 transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 cursor-pointer ${
          showScrollTop ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-0 opacity-0 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default App;
