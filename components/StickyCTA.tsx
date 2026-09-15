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
        className="block w-full bg-brand-500 text-ink py-4 text-center text-sm tracking-[0.22em] shadow-[0_-4px_20px_rgba(42,32,22,0.18)]"
      >
        お問い合わせ
      </a>
    </div>
  );
};

export default StickyCTA;
