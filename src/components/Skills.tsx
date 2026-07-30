import React from 'react';
import { CreditCard, Users, HeartHandshake, Check } from 'lucide-react';
import image5 from '../assets/image5.jpg';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'financial',
      title: 'Financial Support',
      icon: <CreditCard size={22} className="text-primary" />,
      bullets: [
        'SAP Business One — ERP software',
        'Bookkeeping support & ledger entry',
        'Financial statement formatting'
      ],
      positionClass: 'lg:absolute lg:top-[8%] lg:left-[4%] xl:left-[8%] lg:w-[300px]'
    },
    {
      id: 'client',
      title: 'Client Relations',
      icon: <Users size={22} className="text-primary" />,
      bullets: [
        'Relationship management & retention',
        'Inquiry handling & resolution',
        'Cross-team client coordination'
      ],
      positionClass: 'lg:absolute lg:top-[32%] lg:right-[4%] xl:right-[8%] lg:w-[300px]'
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <HeartHandshake size={22} className="text-primary" />,
      bullets: [
        'Interpersonal communication',
        'Microsoft Office (Word, Excel)',
        'Canva graphic presentation layouts'
      ],
      positionClass: 'lg:absolute lg:bottom-[5%] lg:left-[4%] xl:left-[8%] lg:w-[300px]'
    }
  ];

  return (
    <section
      id="skills"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex flex-col items-center justify-start pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-transparent"
    >

      <div className="max-w-7xl w-full flex flex-col items-center h-full relative my-auto">
        {/* Title */}
        <div className="text-center mb-8 lg:mb-12 z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textDark font-sans mt-2">
            My Expertise
          </h2>
        </div>

        {/* Outer Layout wrapper */}
        <div className="w-full flex-1 flex flex-col lg:block relative min-h-[520px]">
          {/* Center Portrait - Visible on Desktop (Enlarged with Running Glowing Border) */}
          <div className="hidden lg:flex justify-center items-center absolute inset-0 pointer-events-none">
            <div className="w-72 h-[410px] xl:w-80 xl:h-[450px] animated-border-container pointer-events-auto shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden bg-white">
                <img
                  src={image5}
                  alt="Patricia Arlie Miguel - Skills"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Cards container: stacks on mobile, absolute positioning on desktop */}
          <div className="w-full flex flex-col gap-6 lg:block h-full z-10">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className={`glass-card p-6 rounded-2xl flex flex-col space-y-4 text-left ${cat.positionClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-textDark font-sans">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-secondary-dark">
                      <span className="text-primary mt-0.5 flex-shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Center Portrait for Mobile & Tablet (Enlarged with Running Glowing Border) */}
          <div className="flex lg:hidden justify-center items-center mt-10">
            <div className="w-60 h-[340px] md:w-64 md:h-[370px] animated-border-container shadow-2xl">
              <div className="w-full h-full rounded-[1.25rem] overflow-hidden bg-white">
                <img
                  src={image5}
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

