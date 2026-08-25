import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const ease = (d: number) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 1s ease-out ${d}s, transform 1s ease-out ${d}s`,
  });

  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col bg-cream-50 overflow-hidden">
      {/* Background photo */}
      <img
        src="/images/photo/hero001.jpg"
        alt="HER BASE"
        className="absolute inset-0 w-full h-full object-cover object-[50%_38%]"
        style={{ transform: isLoaded ? 'scale(1)' : 'scale(1.06)', transition: 'transform 2.2s ease-out' }}
      />

      {/* Scrims for readability */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(253,248,239,0.97) 0%, rgba(253,248,239,0.92) 24%, rgba(253,248,239,0.58) 44%, rgba(253,248,239,0) 66%), linear-gradient(to top, rgba(253,248,239,0.85) 0%, rgba(253,248,239,0) 26%)',
        }}
      ></div>
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(253,248,239,0.98) 0%, rgba(253,248,239,0.9) 34%, rgba(253,248,239,0.35) 58%, rgba(253,248,239,0.1) 100%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end md:items-center">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 pb-28 md:pb-24 pt-28">
          <div className="max-w-xl">
            <div className="w-px h-16 bg-gold-500 mb-8 hidden md:block" style={{ height: isLoaded ? '64px' : '0px', transition: 'height 1s ease-out 0.4s' }}></div>

            <span
              className="inline-block border border-gold-500 text-gold-700 bg-cream-50/70 px-3 py-1 text-xs font-bold tracking-[0.2em] mb-6 uppercase font-cinzel"
              style={ease(0.2)}
            >
              Private Closed Community
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold font-serif leading-[1.25] mb-6 tracking-tight text-ink"
              style={ease(0.4)}
            >
              ひとりじゃない、と<br />
              <span className="text-gold-600">思える</span>場所へ。
            </h1>

            <p className="text-stone-700 text-lg md:text-xl font-medium mb-10 leading-relaxed" style={ease(0.6)}>
              アスリートを支える人のための、<br />
              審査制のクローズドコミュニティ。
            </p>

            <div style={ease(0.85)}>
              <Button variant="ink" size="lg" withArrow>
                お悩みをお聞かせください
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Marquee */}
      <div className="relative z-20 w-full overflow-hidden border-y border-black/10 bg-cream-50/95 py-3">
        <div style={{ display: 'inline-flex', animation: 'marquee 32s linear infinite', willChange: 'transform' }} className="whitespace-nowrap items-center">
          {Array.from({ length: 2 }).map((_, r) => (
            <React.Fragment key={r}>
              <span className="text-xl font-cinzel font-bold uppercase tracking-[0.2em] mx-8 text-ink">Safe Space</span>
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-xl font-cinzel font-bold uppercase tracking-[0.2em] mx-8 stroke-text">Peer Connection</span>
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-xl font-cinzel font-bold uppercase tracking-[0.2em] mx-8 text-ink">Expert Talks</span>
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-xl font-cinzel font-bold uppercase tracking-[0.2em] mx-8 stroke-text">Closed Community</span>
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-xl font-cinzel font-bold uppercase tracking-[0.2em] mx-8 text-ink">Not Alone</span>
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default Hero;
