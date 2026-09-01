import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  color?: 'gold' | 'white';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ en, ja, color = 'gold' }) => {
  const light = color === 'white';

  return (
    <div className="text-center mb-14 md:mb-16">
      <p className={`font-display tracking-[0.35em] uppercase text-sm mb-5 ${light ? 'text-base-100/70' : 'text-oak-600'}`}>
        {en}
      </p>
      <h3 className={`text-2xl md:text-3xl font-serif font-semibold tracking-[0.06em] ${light ? 'text-base-50' : 'text-ink'}`}>
        {ja}
      </h3>
      <span className={`block w-10 h-px mx-auto mt-6 ${light ? 'bg-base-100/50' : 'bg-oak-500/60'}`}></span>
    </div>
  );
};

export default SectionTitle;
