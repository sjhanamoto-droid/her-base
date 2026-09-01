import React from 'react';
import AnimatedSection from './AnimatedSection';

const voices = [
  { text: '夫を支えながら、自分の仕事や人生も、大切にしたい。', tag: 'アスリートを支える方・30代' },
  { text: '気づけば、自分のやりたいことをずっと後回しにしていました。', tag: 'アスリートを支える方・30代' },
  { text: '“支えるだけ”じゃなく、一緒に挑戦する関係になりたい。', tag: 'アスリートを支える方・20代' },
  { text: '同じ環境の人と話せる。それだけで、また前を向ける気がします。', tag: 'アスリートを支える方・40代' },
];

const Voices: React.FC = () => {
  return (
    <section id="voice" className="py-24 md:py-32 border-b border-ink/10 bg-base-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.15} className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6">
          <div>
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm uppercase mb-5">Voice</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">その声に、応えたい。</h2>
          </div>
          <p className="text-stone-500 max-w-md text-sm leading-[2]">
            これは、アスリートを支える人が心の奥にそっと抱えている想いです。
            HERBASE は、この一つひとつの声に応えるために生まれました。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {voices.map((v, i) => (
            <AnimatedSection key={i} direction="up" delay={0.1 + i * 0.05}>
              <div className="bg-base-50 border border-ink/10 p-10 md:p-12 h-full">
                <span className="block font-display text-6xl leading-none text-oak-300 mb-6 select-none">“</span>
                <p className="font-serif text-lg md:text-xl font-medium leading-[1.9] mb-8 text-ink">{v.text}</p>
                <div className="flex items-center">
                  <span className="w-8 h-px bg-oak-500/70 mr-3"></span>
                  <p className="text-xs md:text-sm text-stone-500 tracking-wide">{v.tag}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
