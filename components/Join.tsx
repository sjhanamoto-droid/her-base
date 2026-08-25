import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { PREREGISTER_URL } from '../constants';

const perks = [
  '面談で、疑問や不安をご相談いただけます',
  'あなたに合う場所かを、一緒に確認します',
  'ゲストとしての体験参加もご案内可能です',
];

const Join: React.FC = () => {
  return (
    <section id="join" className="bg-ink text-cream-50 py-24 md:py-32">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-9xl font-cinzel font-bold uppercase tracking-tight mb-4">Join</h2>
          <p className="text-cream-200/70">アスリートを支える、あなたのご参加をお待ちしています。</p>
        </div>

        <div className="max-w-4xl mx-auto border border-gold-500/40 bg-ink-800/40">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-center">
              <span className="inline-block self-start bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase font-cinzel tracking-wider mb-6">
                Now Accepting
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">お気軽にご相談ください！</h3>
              <p className="text-cream-200/70 leading-relaxed">
                HERBASE は現在<span className="text-gold-300 font-bold">サービスの準備中</span>です。
                様々な方、アスリートの妻や奥様のご意見やご相談、お悩みなどを幅広く知りたいので、
                ぜひ下記のフォームから今の気持ちやお悩みをお聞かせください。
              </p>
            </div>

            {/* Right */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="font-cinzel text-gold-400 tracking-[0.2em] text-sm uppercase mb-6">About the Interview</p>
              <ul className="space-y-4 mb-8">
                {perks.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-5 h-5 bg-gold-500 flex items-center justify-center rounded-full mr-3 text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-cream-100">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href={PREREGISTER_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="xl" withArrow onClick={() => {}}>
              お悩み相談はこちら
            </Button>
          </a>
          <p className="mt-4 text-sm text-cream-200/50">
            Googleフォームが開きます（ご相談・面談は無料です）
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join;
