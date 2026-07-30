import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Account for fixed header height so target section is visible on mobile
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    // If using custom scroll container (desktop), scroll that container.
    const container = containerRef.current;
    if (container && window.innerWidth >= 1024) {
      const top = (element as HTMLElement).offsetTop - headerHeight;
      container.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    // For window scrolling (mobile), compute absolute position minus header
    const rect = element.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset - headerHeight - 8; // small extra offset
    window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.innerWidth >= 1024 
        ? containerRef.current?.scrollTop || 0
        : window.scrollY;
      setShowScrollTop(scrollPos > 300);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'credentials', 'contact'];
    const isDesktop = window.innerWidth >= 1024;
    
    const options = {
      root: isDesktop ? containerRef.current : null,
      rootMargin: isDesktop ? '-30% 0px -30% 0px' : '-20% 0px -20% 0px',
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

  // Handle direct hash navigation (deployed links like /#contact).
  // Some hosting environments or slow image/layout loads can trigger the
  // hash before the target element exists — retry until present.
  useEffect(() => {
    const scrollToIdWhenReady = (id: string) => {
      let attempts = 0;
      const maxAttempts = 40; // ~4 seconds at 100ms interval

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          scrollToSection(id);
          try {
            // restore hash without jumping
            history.replaceState(null, '', window.location.pathname + window.location.search + '#' + id);
          } catch {}
          return;
        }
        attempts += 1;
        if (attempts <= maxAttempts) {
          setTimeout(tryScroll, 100);
        }
      };

      requestAnimationFrame(tryScroll);
    };

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#')) {
        const id = hash.replace('#', '');

        // Prevent browser's automatic anchor scrolling which may occur before React mounts.
        try {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch {}

        scrollToIdWhenReady(id);
      }
    };

    // Run once on mount in case page was opened with a hash
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const observerRoot = isDesktop ? containerRef.current : null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: observerRoot,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.scroll-section'));
    sections.forEach((section) => observer.observe(section));

    // Mobile safety fallback: force-show all sections after a short delay
    // in case IntersectionObserver doesn't fire (e.g., some in-app browsers)
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    if (!isDesktop) {
      fallbackTimer = setTimeout(() => {
        sections.forEach((section) => section.classList.add('is-visible'));
      }, 1200);
    }

    return () => {
      observer.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden bg-bgLight">
      {/* Fixed top Navbar Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} scrollToSection={scrollToSection} />
      
      {/* Scroll Snapping Container */}
      <div 
        ref={containerRef} 
        className="scroll-container w-full h-full main-background"
      >
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Credentials />
        <Contact />
      </div>



      {/* Floating Interactive Scroll-To-Top Pop-up Button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`arrow-top-button fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-primary hover:bg-primary-dark text-white shadow-premium border border-white/20 transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 cursor-pointer ${
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
