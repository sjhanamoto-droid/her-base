import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import Button from './ui/Button';
import AnimatedSection from './AnimatedSection';

const includes = [
  '会員限定コンテンツの視聴',
  'オンライン企画・座談会への参加',
  '会員どうしの交流の場への参加',
  '経験シェア・悩み相談',
  'イベント・セミナーの優先案内',
];

const recommend = [
  '夫（パートナー）がアスリートで、毎日を支えている',
  '選手の結果や環境の変化に、気持ちが揺れることがある',
  '自分の仕事やキャリアも大切にしたい',
  '同じ立場の人と出会い、つながりたい',
  '自分の人生の選択肢を広げてみたい',
];

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 md:py-32 bg-base-50 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-5 uppercase">Membership</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">ご入会のご案内</h2>
            <span className="block w-10 h-px bg-oak-500/60 mx-auto mt-7"></span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Price card */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="h-full bg-base-100 border border-ink/10 p-8 md:p-12">
              <span className="inline-flex items-center gap-2 border border-ink/60 text-ink text-xs tracking-[0.15em] px-3 py-1.5 mb-7">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.5} /> 審査制・会員制サービス
              </span>
              <div className="flex items-end gap-2 border-b border-ink/15 pb-6 mb-6">
                <span className="text-stone-500 text-sm mb-2">月額会費</span>
                <span className="font-display font-medium text-ink text-5xl md:text-6xl leading-none tracking-tight">4,980</span>
                <span className="text-stone-600 text-sm mb-2">円（税込）</span>
              </div>

              <ul className="space-y-3.5">
                {includes.map((f, i) => (
                  <li key={i} className="flex items-center text-stone-600">
                    <span className="w-4 h-px bg-oak-500/70 mr-3 flex-shrink-0"></span>
                    <span className="text-sm md:text-[0.95rem]">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs text-stone-500">※OPTIONサービスは別料金となります。</p>
            </div>
          </AnimatedSection>

          {/* Recommend */}
          <AnimatedSection direction="left" delay={0.3}>
            <div className="h-full bg-base-200/60 border border-ink/10 p-8 md:p-12 flex flex-col">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-8">こんな方におすすめです</h3>
              <ul className="space-y-4 flex-1">
                {recommend.map((r, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-oak-600 mr-3 mt-1.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[0.95rem] md:text-base text-stone-600 leading-[1.9]">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button variant="ink" size="lg" withArrow fullWidth>
                  お問い合わせ
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Membership;
