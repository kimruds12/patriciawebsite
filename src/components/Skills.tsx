import React from 'react';
import { CreditCard, Users, HeartHandshake, Check } from 'lucide-react';
import image3 from '../assets/image3.jpg';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'financial',
      title: 'Financial Support',
      icon: <CreditCard size={20} className="text-primary" />,
      bullets: [
        'SAP Business One — ERP software',
        'Bookkeeping support & ledger entry',
        'Financial statement formatting'
      ],
      positionClass: 'lg:absolute lg:top-[12%] lg:left-[8%] xl:left-[12%] lg:w-[280px]'
    },
    {
      id: 'client',
      title: 'Client Relations',
      icon: <Users size={20} className="text-primary" />,
      bullets: [
        'Relationship management & retention',
        'Inquiry handling & resolution',
        'Cross-team client coordination'
      ],
      positionClass: 'lg:absolute lg:top-[38%] lg:right-[8%] xl:right-[12%] lg:w-[280px]'
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <HeartHandshake size={20} className="text-primary" />,
      bullets: [
        'Interpersonal communication',
        'Microsoft Office (Word, Excel)',
        'Canva graphic presentation layouts'
      ],
      positionClass: 'lg:absolute lg:bottom-[8%] lg:left-[8%] xl:left-[12%] lg:w-[280px]'
    }
  ];

  return (
    <section 
      id="skills" 
      className="scroll-section w-full min-h-dvh flex flex-col items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-bgGradientStart to-bgGradientEnd"
    >
      <div className="max-w-7xl w-full flex flex-col items-center h-full relative my-auto">
        {/* Title */}
        <div className="text-center mb-10 z-10">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase font-sans">
            EXPERT SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textDark font-sans mt-2">
            My Expertise
          </h2>
        </div>

        {/* Outer Layout wrapper */}
        <div className="w-full flex-1 flex flex-col lg:block relative min-h-[500px]">
          {/* Center Portrait - Visible on Desktop */}
          <div className="hidden lg:flex justify-center items-center absolute inset-0 pointer-events-none">
            <div className="w-60 h-[340px] animated-border-container pointer-events-auto shadow-tilted">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                <img 
                  src={image3} 
                  alt="Patricia Arlie Miguel - Skills" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Cards container: stacks on mobile, absolute positioning on desktop */}
          <div className="w-full flex flex-col gap-6 lg:block h-full">
            {skillCategories.map((cat) => (
              <div 
                key={cat.id}
                className={`glass-card p-6 rounded-2xl flex flex-col space-y-4 text-left ${cat.positionClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-textDark font-sans">{cat.title}</h3>
                </div>
                
                <ul className="space-y-2.5">
                  {cat.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-sans text-secondary-dark">
                      <span className="text-primary mt-0.5 flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Staggered Portrait for Mobile (only visible on mobile/tablet) */}
          <div className="flex lg:hidden justify-center items-center mt-8">
            <div className="w-48 h-64 bg-white p-2.5 rounded-2xl shadow-premium border border-white/60">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src={image3} 
                  alt="Patricia Arlie Miguel - Mobile Skills" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
