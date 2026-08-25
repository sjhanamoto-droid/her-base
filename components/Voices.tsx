import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const voices = [
  { text: 'この気持ちは、同じ立場の人にしか分からない気がして。', tag: 'アスリートを支える方・30代' },
  { text: 'まわりに相談できる人が、なかなかいなかった。', tag: 'アスリートを支える方・20代' },
  { text: '夫のことは誰にも話せなくて、ずっと一人で抱えていました。', tag: 'アスリートを支える方・30代' },
  { text: '同じ環境の人と、ただ話せる。それだけで、こんなに安心するなんて。', tag: 'アスリートを支える方・40代' },
];

const Voices: React.FC = () => {
  return (
    <section id="voice" className="py-24 md:py-32 border-b border-black/10 bg-cream-100">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.2} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-cinzel font-bold uppercase tracking-tight text-ink animate-fade-in">Voices</h2>
            <p className="text-gold-700 font-bold mt-3 font-serif text-lg">その声に、応えたい。</p>
          </div>
          <p className="text-stone-500 max-w-md text-sm leading-relaxed">
            これは、アスリートを支える人が心の奥にそっと抱えている想いです。
            HER BASE は、この一つひとつの声に応えるために生まれました。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {voices.map((v, i) => (
            <AnimatedSection key={i} direction={i % 2 === 0 ? 'right' : 'left'} delay={0.15 + i * 0.05}>
              <div className="bg-cream-50 p-10 md:p-12 relative group hover:bg-white transition-all duration-500 border border-black/5 overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Quote className="w-11 h-11 text-gold-200 mb-6 group-hover:text-gold-400 transition-all duration-300" />
                  <p className="text-xl md:text-2xl font-serif font-bold leading-relaxed mb-8 text-ink">
                    「{v.text}」
                  </p>
                  <div className="flex items-center">
                    <span className="w-8 h-px bg-gold-500 mr-3"></span>
                    <p className="font-bold text-sm text-stone-500 tracking-wide">{v.tag}</p>
                  </div>
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
