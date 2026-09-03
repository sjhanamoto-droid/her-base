import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Button from './ui/Button';
import AnimatedSection from './AnimatedSection';

const includes = [
  '会員限定コンテンツの視聴',
  'オンライン企画・座談会への参加',
  '会員どうしの交流の場への参加',
  '経験シェア・悩み相談',
  'イベント・セミナーの優先案内',
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

        <div className="max-w-2xl mx-auto">
          {/* Price card */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-base-100 border border-ink/10 p-8 md:p-12">
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
