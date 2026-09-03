import React from 'react';
import AnimatedSection from './AnimatedSection';

const concerns = [
  '選手の結果や気持ちまで、自分のことのように背負ってしまう。',
  '自分の仕事やキャリア、やりたいことが、気づけば後回しになっている。',
  '移籍や引退など、この先の変化について、相談できる相手も情報も少ない。',
];

const Voices: React.FC = () => {
  return (
    <section id="voice" className="py-24 md:py-32 border-b border-ink/10 bg-base-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-5xl">
          <AnimatedSection direction="up" delay={0.15}>
            <p className="tracking-[0.3em] text-gold-600 text-xs md:text-sm mb-7">見えてきた、共通の悩み</p>
            <p className="text-stone-600 text-[0.95rem] md:text-base leading-[2] md:leading-[2] mb-6 md:mb-8">
              選手の結果や感情まで背負い、自分自身の人生を後回しにしていませんか。
            </p>
            <h2 className="font-serif text-[1.9rem] md:text-4xl lg:text-[2.9rem] font-semibold text-ink tracking-[0.04em] leading-[1.6] md:leading-[1.6]">
              「孤独」とはちがう、<br />
              深く話せる相手がいないこと。
            </h2>
          </AnimatedSection>

          <ul className="mt-14 md:mt-16 space-y-6 md:space-y-8">
            {concerns.map((text, i) => (
              <AnimatedSection key={i} direction="up" delay={0.1 + i * 0.08}>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-oak-500 mt-3 mr-5 flex-shrink-0"></span>
                  <span className="text-[0.95rem] md:text-lg text-stone-600 leading-[1.9] md:leading-[1.9]">{text}</span>
                </li>
              </AnimatedSection>
            ))}
          </ul>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="mt-16 md:mt-20 text-stone-600 text-[0.95rem] md:text-base leading-[2.1] md:leading-[2.1]">
              顧客インタビューを重ねる中で見えてきたのは、アスリートを支える人に必要なのは「悩みを聞いてもらう場所」だけではない、ということでした。
            </p>
            <p className="mt-8 md:mt-10 font-serif text-xl md:text-2xl font-semibold text-ink leading-[1.9] md:leading-[1.9] tracking-[0.04em]">
              必要なのは、「どう支えるかを学ぶこと」と<br className="hidden md:block" />
              「自分自身の人生を広げること」。その両方でした。
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Voices;
