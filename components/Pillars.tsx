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
    <section id="pillars" className="relative isolate overflow-hidden py-24 md:py-32 border-b border-ink/10 bg-gradient-to-b from-base-200 via-base-100 to-base-50">
      {/* Animated brand background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* drifting warm orbs — the "two axes" */}
        <div
          className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, rgba(201,160,68,0.32), rgba(201,160,68,0) 68%)', animation: 'pillarsOrbA 22s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute -bottom-40 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, rgba(139,124,107,0.36), rgba(139,124,107,0) 68%)', animation: 'pillarsOrbB 27s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, rgba(183,136,41,0.16), rgba(183,136,41,0) 70%)', animation: 'pillarsOrbC 19s ease-in-out infinite' }}
        ></div>
        {/* faint grid texture (axes motif) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,26,16,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(34,26,16,0.55) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        ></div>
        {/* slow diagonal light sweep */}
        <div
          className="absolute inset-y-[-25%] -left-1/3 w-1/3"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', transform: 'rotate(8deg)', animation: 'pillarsSheen 12s ease-in-out infinite' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-5 uppercase">Two Axes</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-relaxed tracking-[0.06em]">
              あなたの人生を、2つの軸でサポート
            </h2>
            <span className="block w-16 h-px mx-auto mt-7 bg-gradient-to-r from-transparent via-oak-500 to-transparent"></span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* MINDSET */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="h-full bg-base-50/70 backdrop-blur-md border border-ink/15 p-8 md:p-12 shadow-[0_20px_60px_-28px_rgba(34,26,16,0.4)] transition-transform duration-500 hover:-translate-y-1">
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
                選手の結果や感情を、すべて自分が背負うのではなく、相手の挑戦を理解しながら、自分自身の軸も持つ。<br className="hidden md:block" />
                お互いがそれぞれの人生に挑戦するパートナーとして関係性をつくっていくための考え方を学ぶ。
              </p>
              <ChipRow chips={mindsetChips} />
            </div>
          </AnimatedSection>

          {/* LIFE DESIGN */}
          <AnimatedSection direction="left" delay={0.3}>
            <div className="h-full bg-base-50/70 backdrop-blur-md border border-ink/15 p-8 md:p-12 shadow-[0_20px_60px_-28px_rgba(34,26,16,0.4)] transition-transform duration-500 hover:-translate-y-1">
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
                キャリア、お金、家事・育児、健康、夫婦関係、引退後の生活など、<br className="hidden md:block" />
                自分の人生に必要なテーマを自由に選び、先輩パートナーや専門家との出会いを通じて、新しい選択肢と出会う機会をつくる。
              </p>
              <ChipRow chips={lifeDesignChips} />
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pillarsOrbA { 0%,100%{transform:translate3d(0,0,0) scale(1);} 50%{transform:translate3d(8%,-8%,0) scale(1.18);} }
        @keyframes pillarsOrbB { 0%,100%{transform:translate3d(0,0,0) scale(1.05);} 50%{transform:translate3d(-8%,6%,0) scale(1.22);} }
        @keyframes pillarsOrbC { 0%,100%{transform:translate3d(-50%,-50%,0) scale(1); opacity:.45;} 50%{transform:translate3d(-50%,-50%,0) scale(1.3); opacity:.7;} }
        @keyframes pillarsSheen { 0%{transform:translateX(0) rotate(8deg); opacity:0;} 45%{opacity:.45;} 55%{opacity:.45;} 100%{transform:translateX(430%) rotate(8deg); opacity:0;} }
      `}} />
    </section>
  );
};

export default Pillars;
