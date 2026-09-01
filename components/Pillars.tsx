import React from 'react';
import {
  HeartHandshake, Compass,
  Heart, MessageCircle, Leaf, Users,
  Briefcase, Wallet, Home, HeartPulse, Gem,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type Chip = { icon: React.ReactNode; label: string };

const mindsetChips: Chip[] = [
  { icon: <Heart className="w-4 h-4" strokeWidth={1.5} />, label: '関係性のヒント' },
  { icon: <MessageCircle className="w-4 h-4" strokeWidth={1.5} />, label: 'コミュニケーション' },
  { icon: <Leaf className="w-4 h-4" strokeWidth={1.5} />, label: '心の整え方' },
  { icon: <Users className="w-4 h-4" strokeWidth={1.5} />, label: '先輩パートナーの経験' },
];

const lifeDesignChips: Chip[] = [
  { icon: <Briefcase className="w-4 h-4" strokeWidth={1.5} />, label: 'キャリア・仕事' },
  { icon: <Wallet className="w-4 h-4" strokeWidth={1.5} />, label: 'お金・副業' },
  { icon: <Home className="w-4 h-4" strokeWidth={1.5} />, label: '家事・育児' },
  { icon: <HeartPulse className="w-4 h-4" strokeWidth={1.5} />, label: '健康・ウェルビーイング' },
  { icon: <Gem className="w-4 h-4" strokeWidth={1.5} />, label: '夫婦関係・ライフプラン' },
];

const ChipRow: React.FC<{ chips: Chip[] }> = ({ chips }) => (
  <div className="mt-8 flex flex-wrap gap-3">
    {chips.map((c, i) => (
      <div key={i} className="flex items-center gap-2 border border-ink/15 px-4 py-2 text-xs md:text-sm text-stone-600">
        <span className="text-oak-500">{c.icon}</span>
        {c.label}
      </div>
    ))}
  </div>
);

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-base-100 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-5 uppercase">Two Axes</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-relaxed tracking-[0.06em]">
              あなたの人生を、2つの軸でサポート
            </h2>
            <span className="block w-10 h-px bg-oak-500/60 mx-auto mt-7"></span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* MINDSET */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="h-full bg-base-50 border border-ink/10 p-8 md:p-12">
              <div className="flex items-center gap-5 mb-7">
                <span className="flex-shrink-0 w-14 h-14 border border-ink/15 flex items-center justify-center text-oak-500">
                  <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-display tracking-[0.2em] text-oak-600 text-xs md:text-sm uppercase">HERBASE Mindset</p>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mt-1.5">支えるから、一緒に挑戦するへ。</h3>
                </div>
              </div>
              <p className="text-stone-600 leading-[2] text-[0.95rem] md:text-base">
                選手の挑戦を理解し、自分の軸も持つ。<br className="hidden md:block" />
                自己犠牲の「支える人」から、お互いの人生に挑戦する「パートナー」へ。
              </p>
              <ChipRow chips={mindsetChips} />
            </div>
          </AnimatedSection>

          {/* LIFE DESIGN */}
          <AnimatedSection direction="left" delay={0.3}>
            <div className="h-full bg-base-50 border border-ink/10 p-8 md:p-12">
              <div className="flex items-center gap-5 mb-7">
                <span className="flex-shrink-0 w-14 h-14 border border-ink/15 flex items-center justify-center text-oak-500">
                  <Compass className="w-6 h-6" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-display tracking-[0.2em] text-oak-600 text-xs md:text-sm uppercase">HERBASE Life Design</p>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mt-1.5">人生のビュッフェ</h3>
                </div>
              </div>
              <p className="text-stone-600 leading-[2] text-[0.95rem] md:text-base">
                キャリア・お金・家事育児・健康・夫婦関係…<br className="hidden md:block" />
                あなたの人生に必要なテーマを、自由に選んで学び、選択肢を広げていく。
              </p>
              <ChipRow chips={lifeDesignChips} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
