import React from 'react';
import SectionTitle from './SectionTitle';
import { Smartphone, MessageCircleHeart, Sparkles } from 'lucide-react';

const Flow: React.FC = () => {
  const steps = [
    { icon: <Smartphone className="w-8 h-8" />, title: '事前登録', desc: 'メール（または準備中の公式LINE）から、かんたんに事前登録。' },
    { icon: <MessageCircleHeart className="w-8 h-8" />, title: '個別ヒアリング', desc: 'あなたの状況やお悩みを、丁寧にお伺いします。' },
    { icon: <Sparkles className="w-8 h-8" />, title: 'ご案内・スタート', desc: 'サービス開始時に、あなたに合ったプランをご案内します。' },
  ];

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle en="FLOW" ja="はじめるまでの流れ" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gold-200 -z-10"></div>
              )}
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center text-gold-600 mb-6 border-4 border-cream-50 shadow-[0_8px_24px_rgba(183,136,41,0.18)] z-10">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-ink mb-2">
                <span className="text-gold-600 mr-2 font-cinzel">Step.0{idx + 1}</span>
                {step.title}
              </h4>
              <p className="text-sm text-stone-500 max-w-[220px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
