import React from 'react';
import AnimatedSection from './AnimatedSection';

const concerns = [
  '「孤独」とはちがう、深く話せる相手がいないこと。',
  '選手の結果や気持ちまで、自分のことのように背負ってしまう。',
  '自分の仕事やキャリア、やりたいことが、気づけば後回しになっている。',
  '移籍や引退など、この先の変化について、相談できる相手も情報も少ない。',
];

const Voices: React.FC = () => {
  return (
    <section id="voice" className="py-24 md:py-32 border-b border-ink/10 bg-base-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.15} className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6">
          <div>
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm uppercase mb-5">Voice</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">見えてきた、共通の悩み</h2>
          </div>
          <p className="text-stone-500 max-w-md text-sm leading-[2]">
            選手の結果や感情まで背負い、自分自身の人生を後回しにしていませんか。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {concerns.map((text, i) => (
            <AnimatedSection key={i} direction="up" delay={0.1 + i * 0.05}>
              <div className="bg-base-50 border border-ink/10 p-10 md:p-12 h-full">
                <span className="block font-display text-sm tracking-[0.25em] text-oak-600 mb-6 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-lg md:text-xl font-medium leading-[1.9] text-ink">{text}</p>
                <span className="block w-8 h-px bg-oak-500/70 mt-8"></span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.2} className="mt-14 md:mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-stone-500 text-sm md:text-[0.95rem] leading-[2.1] mb-8">
              顧客インタビューを重ねる中で見えてきたのは、アスリートを支える人に必要なのは「悩みを聞いてもらう場所」だけではない、ということでした。
            </p>
            <p className="font-serif text-xl md:text-2xl font-semibold leading-[1.9] tracking-[0.04em] text-ink">
              必要なのは、「どう支えるかを学ぶこと」と<br className="hidden md:block" />
              「自分自身の人生を広げること」。その両方でした。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Voices;
