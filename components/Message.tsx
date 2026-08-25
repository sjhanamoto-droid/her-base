import React from 'react';
import AnimatedSection from './AnimatedSection';
import { REP_TITLE, REP_NAME } from '../constants';

const Message: React.FC = () => {
  return (
    <section id="message" className="py-24 md:py-32 border-b border-black/10 bg-cream-50 relative overflow-hidden">
      <h2 className="text-6xl md:text-9xl font-cinzel font-bold text-gold-500/10 uppercase tracking-tight absolute top-16 left-6 md:left-12 pointer-events-none select-none">
        Message
      </h2>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500 pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500 pointer-events-none"></div>
              <div className="overflow-hidden shadow-[0_20px_60px_rgba(34,26,16,0.18)]">
                <img
                  src="/images/photo/ceo.jpg"
                  alt="HER BASE 代表"
                  className="w-full h-[320px] md:h-[460px] object-cover object-center hover:scale-105 transition-transform duration-[1.2s]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Message */}
          <AnimatedSection direction="left" delay={0.35} className="lg:col-span-6">
            <p className="font-cinzel text-gold-600 tracking-[0.25em] text-sm mb-4 uppercase">Message</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-ink mb-8">
              私も、ひとりで<br />抱えていました。
            </h3>
            <div className="space-y-5 text-stone-700 leading-relaxed text-base md:text-lg">
              <p>
                アスリートを支える立場を、誰よりも近くで経験してきました。
                誇らしい一方で、まわりには言えない不安や孤独を、
                ずっとひとりで抱えていた時期があります。
              </p>
              <p>
                同じ立場の人と、ただ安心して話せる場所があれば——。
                そう強く願ったことが、HER BASE のはじまりです。
                <span className="text-ink font-bold">あなたは、ひとりじゃない</span>、ということを伝えたい。
              </p>
              <p className="text-ink font-bold border-l-4 border-gold-500 pl-6 py-1">
                ここは、アスリートを支えるあなたが、安心してつながり、前を向くための拠点（ベース）です。
                かつての私と同じ想いを抱えるあなたと、一緒にはじめたい。心から、そう願っています。
              </p>
            </div>
            <div className="mt-8 flex items-end gap-4">
              <div>
                <p className="font-cinzel text-gold-600 text-xs tracking-[0.2em] uppercase mb-1">{REP_TITLE}</p>
                <p className="font-serif text-2xl md:text-3xl font-bold text-ink">{REP_NAME}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Message;
