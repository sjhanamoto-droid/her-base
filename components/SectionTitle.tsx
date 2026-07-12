import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  color?: 'gold' | 'white';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, color = 'gold' }) => {
  const enColor = color === 'white' ? 'text-white' : 'text-gold-500';
  const jaColor = color === 'white' ? 'text-white' : 'text-stone-800';
  const lineColor = color === 'white' ? 'bg-white/50' : 'bg-gold-400';

  return (
    <div className="text-center mb-16">
      <h2 className={`font-cinzel text-5xl md:text-6xl font-bold opacity-10 mb-[-1.5rem] ${enColor} tracking-[0.2em] uppercase`}>
        {en}
      </h2>
      <div className="relative inline-block">
        <h3 className={`text-2xl md:text-3xl font-bold font-serif ${jaColor} relative z-10`}>
          {ja}
        </h3>
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 ${lineColor} rounded-full`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
