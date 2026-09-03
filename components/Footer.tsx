import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import LegalModal from './LegalModal';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const menu = [
    { label: 'HERBASEについて', href: '#about' },
    { label: 'コンセプト', href: '#concept' },
    { label: 'ご入会について', href: '#membership' },
    { label: '共通の悩み', href: '#voice' },
    { label: 'ご入会までの流れ', href: '#flow' },
    { label: 'よくある質問', href: '#faq' },
  ];

  return (
    <footer className="bg-base-100 border-t border-ink/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <p className="font-display text-3xl md:text-4xl tracking-[0.3em] text-ink mb-5">HERBASE</p>
          <p className="font-serif text-sm md:text-base text-stone-600">
            一人じゃない。あなたの人生は、もっと自由にデザインできる。
          </p>
          <p className="font-script text-2xl text-oak-500 mt-4">Design your life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-12">
          <div className="col-span-1 md:col-span-2">
            <p className="font-display text-lg tracking-[0.25em] uppercase text-ink mb-5">HERBASE</p>
            <p className="text-sm text-stone-600 leading-[2] max-w-sm">
              現役プロアスリートを支える妻・パートナーのための、審査制の会員制ライフサポートサービス。
              支えるだけでなく、自分自身の人生にも挑戦する——お互いの挑戦を応援し合える関係を、ここから。
            </p>
            <a
              href="https://instagram.com/her_base"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-stone-600 hover:text-ink transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} /> @her_base
            </a>
          </div>

          <div>
            <p className="font-display tracking-[0.25em] uppercase mb-5 text-oak-600 text-sm">メニュー</p>
            <ul className="space-y-2.5 text-sm text-stone-600">
              {menu.map((m) => (
                <li key={m.label}>
                  <a href={m.href} className="hover:text-ink transition-colors">{m.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display tracking-[0.25em] uppercase mb-5 text-oak-600 text-sm">規約</p>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li>
                <button onClick={() => setIsLegalOpen(true)} className="hover:text-ink transition-colors cursor-pointer text-left">
                  特定商取引法に基づく表記
                </button>
              </li>
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-ink transition-colors cursor-pointer text-left">
                  プライバシーポリシー
                </button>
              </li>
            </ul>
          </div>

          <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </div>

        <div className="mt-12 pt-8 border-t border-ink/10 text-center">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-stone-400 font-display">
            &copy; 2026 HERBASE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
