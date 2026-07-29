import React from 'react';
import { MapPin, Calendar, BookOpen, MessageSquare } from 'lucide-react';
import image4 from '../assets/image4.jpg';

export const About: React.FC = () => {
  const details = [
    {
      icon: <BookOpen size={18} className="text-primary" />,
      label: 'School',
      value: 'Our Lady of Fatima University (OLFU) - Valenzuela Campus'
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      label: 'Location',
      value: 'Valenzuela City, PH'
    },
    {
      icon: <Calendar size={18} className="text-primary" />,
      label: 'Degree',
      value: 'B.S. Business Administration - Banking & Finance'
    },
    {
      icon: <MessageSquare size={18} className="text-primary" />,
      label: 'Languages',
      value: 'English, Tagalog'
    }
  ];

  return (
    <section
      id="about"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-white"
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textDark font-sans leading-tight">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-secondary-dark text-sm md:text-base font-normal leading-relaxed font-sans max-w-2xl">
            <p>
              I am a Bachelor of Science in Business Administration majoring in Banking and Finance at Our Lady of Fatima University. I am passionate about learning, developing new skills, and continuously improving myself through academic experiences, training, and certifications.
            </p>
            <p>
              I strive to apply my knowledge in business and finance while building strong communication, teamwork, and problem-solving skills. As I continue my professional journey, I am committed to growth, lifelong learning, and making meaningful contributions in the workplace.
            </p>
          </div>

          {/* Details Grid (2x2) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-bgGradientEnd/60 p-4 rounded-xl border border-gray-100 hover:border-primary-light/50 transition-colors shadow-premium"
              >
                <div className="p-2.5 bg-white rounded-lg shadow-sm flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="text-left font-sans">
                  <p className="text-[11px] font-bold text-neutral uppercase tracking-wider">{detail.label}</p>
                  <p className="text-xs md:text-sm font-bold text-textDark mt-0.5 leading-snug">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
