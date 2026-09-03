import React from 'react';
import AnimatedSection from './AnimatedSection';

const commitments = [
  {
    title: '入会審査による、安心できる環境',
    desc: '対象を現役プロアスリートの妻・パートナーに限定することで、一般的なSNSでは話しにくい経験も共有できる、信頼性の高いクローズドな場をつくっています。',
  },
  {
    title: '匿名性とプライバシーへの配慮',
    desc: '選手やご本人を特定できる情報については、本人の意思と同意を前提に取り扱います。安心して話せることを何より優先します。',
  },
  {
    title: '16年間の当事者経験という原点',
    desc: '創業者自身がプロアスリートの妻として16年間歩んできた経験と、複数競技のパートナーへの継続的な顧客インタビューが、HERBASEの土台になっています。',
  },
];

const Concept: React.FC = () => {
  return (
    <section id="concept" className="bg-base-50 py-24 md:py-32 border-b border-ink/10">
      <div className="max-w-[1760px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.15}>
          <div className="mb-16 md:mb-20 max-w-5xl">
            <p className="tracking-[0.3em] text-gold-600 text-xs md:text-sm mb-7">HERBASEが大切にしていること</p>
            <h3 className="font-serif text-2xl md:text-4xl lg:text-[2.7rem] font-semibold tracking-[0.06em] leading-[1.5] md:leading-[1.5] text-ink">
              人数より、信頼と会員同士の質を。
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {commitments.map((item, i) => (
            <AnimatedSection key={i} direction="up" delay={0.2 + i * 0.1}>
              <div className="h-full pt-8 border-t border-gold-500/70">
                <h4 className="font-serif text-lg md:text-xl font-semibold text-ink leading-[1.7] mb-5">{item.title}</h4>
                <p className="text-stone-600 text-sm md:text-[0.95rem] leading-[2.1]">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
