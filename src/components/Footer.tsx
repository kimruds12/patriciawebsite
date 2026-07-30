import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-textDark border-t-2 border-primary py-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-center font-sans text-xs md:text-sm">
        {/* Left: Copyright */}
        <p className="text-black-300 text-center font-medium tracking-wide">
          ©2026 Designed and Developed by Patricia Miguel
        </p>
      </div>
    </footer>
  );
};
