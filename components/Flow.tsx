import React from 'react';
import SectionTitle from './SectionTitle';

const Flow: React.FC = () => {
  const steps = [
    { title: 'お申込み', desc: 'WEBフォームからお申込みください。' },
    { title: '審査・ご連絡', desc: '内容を確認後、ご連絡します。アスリートを支えるお立場かを確認します。' },
    { title: 'ご入会手続き', desc: 'ご案内に沿って、お手続きください。' },
    { title: 'ご利用開始', desc: 'HERBASE での毎日がスタート！ようこそ。' },
  ];

  return (
    <section id="flow" className="py-24 md:py-28 bg-base-100 border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle en="Flow" ja="ご入会までの流れ" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 mt-14 md:border-l border-ink/10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:border-r border-ink/10 px-8 md:px-10">
              <span className="font-display text-4xl md:text-5xl text-oak-400 mb-6">0{idx + 1}</span>
              <h4 className="font-serif text-lg font-semibold text-ink mb-3">{step.title}</h4>
              <p className="text-sm text-stone-500 leading-[1.9]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
