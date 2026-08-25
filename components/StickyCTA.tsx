import React, { useState, useEffect } from 'react';
import { PREREGISTER_URL } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <a
        href={PREREGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-ink text-cream-50 py-4 text-center font-cinzel font-bold tracking-[0.15em] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      >
        お悩みをお聞かせください
      </a>
    </div>
  );
};

export default StickyCTA;
