import React, { useEffect, useState } from 'react';
import { PREREGISTER_URL } from '../constants';

const STRIP_WORDS = ['Challenge Together', 'Design Your Life', 'Mindset', 'Life Design', 'Not Alone'];

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const ease = (d: number) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 1.1s ease-out ${d}s, transform 1.1s ease-out ${d}s`,
  });

  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col bg-base-100 overflow-hidden">
      {/* Background photo（差し替えは /public/images/photo/hero_beach.jpg を置き換えるだけ） */}
      <img
        src="/images/photo/hero_beach.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[74%_42%] md:object-[50%_42%]"
        style={{ transform: isLoaded ? 'scale(1)' : 'scale(1.05)', transition: 'transform 2.4s ease-out' }}
      />

      {/* Scrim：左側をクリームで覆いテキストの可読性を確保 */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(243,239,232,0.99) 0%, rgba(243,239,232,0.97) 34%, rgba(243,239,232,0.9) 46%, rgba(243,239,232,0.68) 58%, rgba(243,239,232,0.34) 70%, rgba(243,239,232,0) 82%)',
        }}
      ></div>
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(243,239,232,0.98) 0%, rgba(243,239,232,0.9) 30%, rgba(243,239,232,0.35) 58%, rgba(243,239,232,0.05) 100%)',
        }}
      ></div>

      {/* Handwritten overlay */}
      <div
        className="absolute z-10 hidden md:block select-none pointer-events-none"
        style={{
          left: '45%',
          top: '38%',
          transform: 'rotate(-7deg)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1.6s ease-out 1.1s',
        }}
      >
        <p className="font-script text-4xl lg:text-[3.2rem] text-ink/70 leading-[1.4]">Challenge together.</p>
        <p className="font-script text-4xl lg:text-[3.2rem] text-ink/70 leading-[1.4] pl-14">Design your life.</p>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end md:items-center">
        <div className="w-full max-w-[1760px] mx-auto px-6 md:px-12 lg:px-20 pb-24 md:pb-16 pt-32 md:pt-40">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] md:text-xs tracking-[0.35em] text-ink/80 mb-5 md:mb-7" style={ease(0.15)}>
              MEMBERSHIP / LIFE SUPPORT SERVICE
            </p>

            <h1
              className="font-display font-medium text-[3rem] md:text-[4.4rem] lg:text-[5.2rem] tracking-[0.14em] leading-none text-ink mb-7 md:mb-10"
              style={ease(0.3)}
            >
              HERBASE
            </h1>

            <p
              className="font-serif font-semibold text-[1.9rem] md:text-[2.6rem] lg:text-[2.9rem] tracking-[0.1em] leading-[1.6] text-ink mb-7 md:mb-9"
              style={ease(0.45)}
            >
              アスリートを支える妻も、<br />
              挑戦する人へ。
            </p>

            <p
              className="font-serif text-[0.95rem] md:text-lg leading-[2.1] tracking-[0.05em] text-ink/85 mb-10 md:mb-12"
              style={ease(0.6)}
            >
              アスリートの挑戦を、そばで支えるあなたへ。<br />
              自分の人生も、あきらめない。<br />
              一人じゃない。あなたの人生は、もっと自由にデザインできる。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5" style={ease(0.75)}>
              <a
                href="#about"
                className="group inline-flex items-center justify-between gap-8 bg-ink text-base-50 px-8 py-4 text-[0.8rem] tracking-[0.2em] hover:bg-ink/80 transition-colors"
              >
                HERBASEについて
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
              <a
                href={PREREGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-8 border border-ink/60 text-ink bg-base-50/40 px-8 py-4 text-[0.8rem] tracking-[0.2em] hover:bg-ink hover:text-base-50 transition-colors"
              >
                お問い合わせはこちら
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom words strip */}
      <div className="relative z-20 w-full bg-base-100 border-t border-ink/10">
        {/* Desktop: static row */}
        <div className="hidden md:flex items-center justify-between max-w-[1760px] mx-auto px-10 lg:px-16 py-6 lg:py-7">
          {STRIP_WORDS.map((w, i) => (
            <React.Fragment key={w}>
              <span className="font-display text-base lg:text-[1.35rem] tracking-[0.18em] uppercase text-oak-600 whitespace-nowrap">
                {w}
              </span>
              {i < STRIP_WORDS.length - 1 && <span className="flex-1 max-w-[64px] h-px bg-oak-500/40 mx-4 lg:mx-6"></span>}
            </React.Fragment>
          ))}
        </div>
        {/* Mobile: marquee */}
        <div className="md:hidden overflow-hidden py-4">
          <div
            style={{ display: 'inline-flex', animation: 'marquee 30s linear infinite', willChange: 'transform' }}
            className="whitespace-nowrap items-center"
          >
            {Array.from({ length: 2 }).map((_, r) => (
              <React.Fragment key={r}>
                {STRIP_WORDS.map((w) => (
                  <React.Fragment key={w}>
                    <span className="font-display text-base tracking-[0.18em] uppercase text-oak-600 mx-5">{w}</span>
                    <span className="w-8 h-px bg-oak-500/40"></span>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
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
