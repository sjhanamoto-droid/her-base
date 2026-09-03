import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { PREREGISTER_URL } from '../constants';

const perks = [
  '面談で、疑問や不安をご相談いただけます',
  'あなたに合う場所かを、一緒に確認します',
];

const Join: React.FC = () => {
  return (
    <section id="join" className="bg-ink text-base-100 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="font-display tracking-[0.35em] text-base-100/60 text-sm uppercase mb-5">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-[0.12em] uppercase mb-5">Join</h2>
          <p className="text-base-100/60 text-sm md:text-base">アスリートを支える、あなたのご参加をお待ちしています。</p>
        </div>

        <div className="max-w-4xl mx-auto border border-base-100/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-base-100/15 flex flex-col justify-center">
              <span className="inline-block self-start border border-base-100/50 text-base-100 text-[0.65rem] tracking-[0.25em] px-3 py-1.5 uppercase font-display mb-7">
                Now Accepting
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-5">お気軽にご相談ください</h3>
              <p className="text-base-100/70 leading-[2] text-sm md:text-[0.95rem]">
                HERBASE は現在<span className="text-base-50 font-bold">サービスの準備中</span>です。
                様々な方、アスリートの妻や奥様のご意見やご相談、お悩みなどを幅広く知りたいので、
                ぜひ Instagram の DM から今の気持ちやお悩みをお聞かせください。
              </p>
            </div>

            {/* Right */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="font-display tracking-[0.3em] text-base-100/60 text-sm uppercase mb-7">About the Interview</p>
              <ul className="space-y-4">
                {perks.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-base-100/70 mr-3 mt-1 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base-100/85 text-sm md:text-[0.95rem] leading-[1.9]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-14 md:mt-16">
          <a href={PREREGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="cream" size="xl" withArrow onClick={() => {}}>
              InstagramのDMでご相談
            </Button>
          </a>
          <p className="mt-5 text-xs md:text-sm text-base-100/50">
            Instagram（@her_base）が開きます。DMからお気軽にご相談ください（ご相談・面談は無料です）
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join;
