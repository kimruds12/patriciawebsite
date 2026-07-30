import React from 'react';
import { ArrowRight, Layers, Award } from 'lucide-react';
import image1 from '../assets/image1.jpg';

interface HomeProps {
  scrollToSection: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-transparent"
    >

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <span className="text-sm font-extrabold tracking-widest text-primary uppercase font-sans">
            HELLO, I'M
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-textDark font-sans leading-tight">
            Patricia Arlie Miguel
          </h1>

          {/* Custom Badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-tertiary/20 text-textDark border border-tertiary/30 font-sans shadow-sm">
              Financial Support
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-neutral/15 text-textDark border border-neutral/20 font-sans shadow-sm">
              SAP Business One ERP
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-textDark border border-primary/20 font-sans shadow-sm">
              Business Support
            </span>
          </div>

          <p className="text-base md:text-lg text-secondary-dark font-normal leading-relaxed max-w-xl font-sans">
            Crafting digital systems at the intersection of business administration, financial tracking, and enterprise software. Specialized in building seamless client workflows, bookkeeping support, and SAP Business One logistics and financials modules.
          </p>

          {/* Action Buttons with Glowing Highlight Outline */}
          <div className="flex flex-row items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold text-sm shadow-premium transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-primary/25 focus:ring-4 focus:ring-primary/35 active:scale-95 cursor-pointer font-sans"
            >
              Let's Connect
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('credentials')}
              className="px-6 py-3 rounded-full font-bold text-sm border-2 border-neutral hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-primary/20 focus:ring-4 focus:ring-primary/30 active:scale-95 cursor-pointer text-secondary-dark font-sans"
            >
              View Credentials
            </button>

          </div>
        </div>

        {/* Right Column: Visual Portrait & Floating Glass Cards */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
          <div className="relative w-72 h-80 md:w-80 md:h-[400px] flex justify-center items-center">
            {/* Soft decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/35 to-tertiary-light/35 rounded-3xl blur-2xl z-0" />

            {/* Profile Image card wrapped inside the Animated Gradient Border */}
            <div className="relative w-full h-full animated-border-container z-10 shadow-tilted">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                <img
                  src={image1}
                  alt="Patricia Arlie Miguel"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-750"
                />
              </div>
            </div>

            {/* Floating Glassmorphism Cards */}

            {/* Top Right: SAP Business One (Tiny Tag) */}
            <div className="absolute -top-4 right-6 z-20 glass-card px-3.5 py-1.5 rounded-full animate-float-medium">
              <span className="text-[10px] font-bold text-textDark uppercase tracking-wider font-sans">
                💻 SAP Business One
              </span>
            </div>

            {/* Right Middle: 10+ Projects */}
            <div className="absolute top-1/3 -right-8 md:-right-16 z-20 glass-card p-3 rounded-xl flex items-center gap-2.5 animate-float-fast max-w-[150px]">
              <div className="p-2 bg-tertiary/20 rounded-lg text-tertiary-dark">
                <Layers size={16} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-secondary-dark uppercase tracking-wider leading-none">Operations</p>
                <p className="text-xs font-bold text-textDark leading-tight mt-0.5">10+ Projects</p>
              </div>
            </div>

            {/* Bottom Left: Dean's Lister */}
            <div className="absolute bottom-10 -left-6 md:-left-12 z-20 glass-card p-3 rounded-xl flex items-center gap-2.5 animate-float-medium max-w-[160px]">
              <div className="p-2 bg-neutral/10 rounded-lg text-neutral-dark">
                <Award size={16} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-neutral-dark uppercase tracking-wider leading-none">Honors</p>
                <p className="text-xs font-bold text-textDark leading-tight mt-0.5">Dean's Lister</p>
              </div>
            </div>

            {/* Bottom Right: Logistics & Finance (Tiny Tag) */}
            <div className="absolute -bottom-4 right-10 z-20 glass-card px-3.5 py-1.5 rounded-full animate-float-slow">
              <span className="text-[10px] font-bold text-textDark uppercase tracking-wider font-sans">
                📊 Logistics & Finance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
