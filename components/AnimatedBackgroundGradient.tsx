import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedBackgroundGradient: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <div
        ref={elementRef}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, #b78829, #9e7323, #7d591f, #523c1b)',
          backgroundSize: '400% 400%',
          animation: isVisible ? 'gradientShift 15s ease infinite' : 'none',
        }}
      ></div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </>
  );
};

export default AnimatedBackgroundGradient;
