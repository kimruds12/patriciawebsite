import React from 'react';
import { MapPin, Calendar, BookOpen, MessageSquare } from 'lucide-react';
import image4 from '../assets/image4.jpg';

export const About: React.FC = () => {
  const details = [
    { icon: <MapPin size={18} className="text-primary" />, label: 'Location', value: 'Valenzuela City, PH' },
    { icon: <Calendar size={18} className="text-primary" />, label: 'Experience', value: '2+ Years' },
    { icon: <BookOpen size={18} className="text-primary" />, label: 'Education', value: 'B.S. Business Administration' },
    { icon: <MessageSquare size={18} className="text-primary" />, label: 'Languages', value: 'English, Tagalog' }
  ];

  const stats = [
    { value: '100%', label: 'Accuracy Rate' },
    { value: '4k+', label: 'Operational Hours' },
    { value: '1.2k', label: 'Coffee Cups' }
  ];

  return (
    <section 
      id="about" 
      className="scroll-section w-full min-h-dvh flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Tilted Profile Image Card wrapped in Animated Border */}
        <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
          <div className="relative w-64 h-80 md:w-72 md:h-[380px]">
            {/* Tilted background block */}
            <div className="absolute inset-0 bg-tertiary-light rounded-2xl transform rotate-6 scale-95 shadow-lg opacity-65" />
            
            {/* Main image container wrapped in Animated Gradient Border */}
            <div className="absolute inset-0 animated-border-container transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-tilted">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                <img 
                  src={image4} 
                  alt="Patricia Arlie Miguel - Credentials" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Biography content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left order-1 lg:order-2">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase font-sans">
              BIOGRAPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textDark font-sans leading-tight">
              Bridging Operations, Finance & Integrity
            </h2>
          </div>

          <div className="space-y-4 text-secondary-dark text-sm md:text-base font-normal leading-relaxed font-sans max-w-2xl">
            <p>
              With over two years of experience supporting family business operations, I've dedicated my work to structured administration, accurate bookkeeping, and implementing digital enterprise systems like SAP Business One. I believe that the most effective business operations are those that remain highly organized, detail-oriented, and client-centric.
            </p>
            <p>
              My academic background in Banking and Finance at Our Lady of Fatima University gives me a solid foundation in asset management, accounting logs, and financial statement review. Whether I am balancing records, compiling logistics lists, or handling customer communications, my ultimate goal is to deliver reliability, precision, and efficiency.
            </p>
          </div>

          {/* Details Grid (2x2) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {details.map((detail, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-bgGradientEnd/60 p-4 rounded-xl border border-gray-100 hover:border-primary-light/50 transition-colors shadow-premium"
              >
                <div className="p-2.5 bg-white rounded-lg shadow-sm">
                  {detail.icon}
                </div>
                <div className="text-left font-sans">
                  <p className="text-[11px] font-bold text-neutral uppercase tracking-wider">{detail.label}</p>
                  <p className="text-sm font-bold text-textDark mt-0.5">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="w-full grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left font-sans">
                <p className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-[11px] md:text-xs font-bold text-secondary uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
