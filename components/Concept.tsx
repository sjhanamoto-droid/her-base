import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedBackgroundGradient from './AnimatedBackgroundGradient';

const Concept: React.FC = () => {
  const pillars = [
    { title: 'MENTAL CARE', jp: '心のケア', desc: '夫の競技成績に揺れない、自分軸の心の土台を育てる' },
    { title: 'FINANCIAL', jp: '金融リテラシー', desc: '将来のお金の不安を、正しい知識で「自信」に変える' },
    { title: 'SELF-REALIZATION', jp: '自己実現', desc: '「私のやりたい」を見つけ、キャリアとして形にする' },
  ];

  return (
    <>
      {/* Problem / Introduction */}
      <section id="intro" className="border-b border-black/10">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <AnimatedSection direction="right" delay={0.2} className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-r border-black/10 bg-cream-50">
            <p className="font-cinzel text-gold-600 tracking-[0.25em] text-sm mb-6 uppercase">The Challenge</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-10 text-ink">
              その幸せは、<br />
              <span className="text-gold-600">夫の成功</span>に<br />
              依存していませんか。
            </h2>
            <div className="space-y-8 max-w-lg">
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-base md:text-lg font-medium leading-relaxed text-stone-700">
                  夫が夢を叶え、輝いていく。<br />
                  その隣で、いつの間にか自分のキャリアを止め、
                  「◯◯選手の奥さん」として生きてきた——。
                  夫のキャリアは、怪我や契約終了という一本の電話で、
                  突然断たれるかもしれない。その不安は、いつもあなたの心の片隅にあります。
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <div className="flex items-start">
                  <ArrowDownRight className="w-8 h-8 mr-4 text-gold-500 flex-shrink-0 animate-pulse" />
                  <p className="text-lg md:text-xl font-bold text-ink border-b-2 border-gold-500 pb-2 inline-block">
                    他者依存の幸福から、私の人生の主導権へ。
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Right visual panel */}
          <AnimatedSection direction="left" delay={0.4} className="relative min-h-[420px] md:min-h-0 overflow-hidden group">
            <img
              src="/images/photo/DSC05246.jpg"
              alt="将来について考える"
              className="w-full h-full object-cover object-[35%_center] min-h-[420px] md:min-h-full transition-transform duration-[1.6s] group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(34,26,16,0.85) 0%, rgba(34,26,16,0.25) 45%, rgba(34,26,16,0.05) 100%)' }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="font-cinzel text-gold-300 tracking-[0.25em] text-xs uppercase mb-3">Her Future</p>
              <p className="font-serif text-cream-50 text-2xl md:text-4xl font-bold leading-snug">
                「私の未来は、<br />私で、守る。」
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Pillars */}
      <section id="concept" className="bg-ink text-cream-50 py-24 md:py-32 border-b border-black/10 relative overflow-hidden">
        <AnimatedBackgroundGradient />

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="mb-20 border-l-4 border-gold-500 pl-8">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold uppercase tracking-tight mb-6">
                Welcome to<br />Her Base
              </h3>
              <p className="text-cream-200/70 text-base md:text-xl max-w-2xl leading-relaxed">
                HER BASE は、アスリートの妻のための「心の拠点（ベース）」です。<br />
                メンタルケア・金融リテラシー・自己実現の３つの柱で、
                あなたが自分の足で人生を歩むための力を、仲間とともに育てます。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
            {pillars.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={0.3 + i * 0.1}>
                <div className="group border-r border-b border-white/15 p-10 md:p-14 lg:p-16 relative overflow-hidden hover:bg-cream-50 hover:text-ink transition-all duration-500 cursor-default h-full">
                  <span className="block text-6xl md:text-7xl font-cinzel font-bold text-gold-500/40 mb-8 group-hover:text-gold-500 transition-all duration-500">
                    0{i + 1}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-cinzel font-bold mb-3 tracking-wide">{item.title}</h4>
                  <p className="text-gold-400 group-hover:text-gold-600 font-bold mb-4 font-serif text-lg transition-colors">{item.jp}</p>
                  <p className="text-cream-200/60 group-hover:text-stone-600 transition-colors leading-relaxed">{item.desc}</p>
                  <ArrowDownRight className="absolute top-8 right-8 w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-500 text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Concept;
