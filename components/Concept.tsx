import React from 'react';
import AnimatedSection from './AnimatedSection';

const pillars = [
  { title: 'SAFE PLACE', jp: '安心できる居場所', desc: '審査制・ニックネーム参加可能。アスリートを支える人だけが集う、安心の場所。' },
  { title: 'CONNECTION', jp: '同じ立場のつながり', desc: '同じ環境にいる仲間だから、本音で話せる。' },
  { title: 'A STEP FORWARD', jp: '自分の人生への挑戦', desc: '体験のシェアや専門家の知恵から、自分の人生の選択肢を広げ、挑戦する一歩を。' },
];

const Concept: React.FC = () => {
  return (
    <>
      {/* About / Introduction */}
      <section id="about" className="border-b border-ink/10 bg-base-100">
        <div className="max-w-[1760px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <AnimatedSection direction="right" delay={0.15} className="p-8 md:p-14 lg:p-24 flex flex-col justify-center md:border-r border-ink/10">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-8 uppercase">About</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.9rem] font-semibold leading-[1.7] tracking-[0.06em] text-ink mb-10">
              支える立場だから、<br />
              言えなかった気持ち。
            </h2>
            <div className="space-y-8 max-w-lg">
              <AnimatedSection direction="up" delay={0.35}>
                <p className="text-[0.95rem] md:text-base leading-[2.1] text-stone-600">
                  アスリートを支える毎日は、誇らしい。
                  でもその一方で、試合の重圧や将来のこと、揺れ動く生活——
                  まわりには言えない想いを抱えたり、気づけば自分の仕事や夢を、
                  ずっと後回しにしてきたり。
                  「支えること」と「自分の人生」は両立できない、と感じていませんか。
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.5}>
                <p className="font-serif text-lg md:text-xl font-semibold text-ink leading-relaxed border-b border-ink/40 pb-4 inline-block">
                  支えるだけの毎日から、自分の人生にも挑戦できる場所へ。
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Right visual panel */}
          <AnimatedSection direction="left" delay={0.3} className="relative min-h-[420px] md:min-h-0 overflow-hidden group">
            <img
              src="/images/photo/DSC05246.jpg"
              alt="将来について考える"
              className="w-full h-full object-cover object-[35%_center] min-h-[420px] md:min-h-full transition-transform duration-[1.6s] group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(32,29,25,0.72) 0%, rgba(32,29,25,0.2) 45%, rgba(32,29,25,0.02) 100%)' }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="font-display tracking-[0.3em] text-base-200 text-xs uppercase mb-4">Her Place</p>
              <p className="font-serif text-base-50 text-2xl md:text-3xl font-semibold leading-relaxed tracking-[0.06em]">
                「同じ想いの、<br />仲間がいる。」
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Concept / 3 pillars */}
      <section id="concept" className="bg-base-50 py-24 md:py-32 border-b border-ink/10">
        <div className="max-w-[1760px] mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" delay={0.15}>
            <div className="mb-16 md:mb-20 max-w-3xl">
              <p className="font-display tracking-[0.35em] text-oak-600 text-sm uppercase mb-6">Concept</p>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] text-ink mb-8">
                Welcome to HERBASE
              </h3>
              <p className="text-stone-600 text-[0.95rem] md:text-base leading-[2.1]">
                HERBASE は、アスリートを支える人のための「拠点（ベース）」です。
                審査制のクローズドな環境で、同じ立場の仲間と安心してつながりながら、
                支えるだけでなく、自分自身の人生にも挑戦する一歩を、ともに踏み出していきます。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink/10">
            {pillars.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={0.2 + i * 0.1} className="border-r border-b border-ink/10">
                <div className="p-10 md:p-12 lg:p-14 h-full">
                  <span className="block font-display text-4xl md:text-5xl text-oak-400 mb-8">0{i + 1}</span>
                  <h4 className="font-display text-xl md:text-2xl tracking-[0.14em] text-ink uppercase mb-3">{item.title}</h4>
                  <p className="font-serif font-semibold text-ink text-lg mb-5">{item.jp}</p>
                  <p className="text-stone-600 text-sm md:text-[0.95rem] leading-[2]">{item.desc}</p>
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
