import React, { useState } from 'react';
import LegalModal from './LegalModal';
import PrivacyModal from './PrivacyModal';

const Footer: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-cream-100 border-t border-black/10 pt-20 pb-10">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <img src="/images/logo.png" alt="HER BASE" className="h-36 md:h-44 w-auto mb-2" />
          <p className="text-sm md:text-base font-serif font-bold text-stone-700 mt-2">
            ひとりじゃない、と思える場所へ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gold-500/40 pt-12">
          <div className="col-span-1 md:col-span-2">
            <p className="font-cinzel text-xl font-bold uppercase tracking-wide text-ink mb-4">Her Base</p>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
              アスリートを支える人が、安心してつながり、孤独を感じず前向きな一歩を踏み出せる、審査制のクローズドコミュニティ。
              同じ立場の仲間と、あたたかく確かな居場所を育てます。
            </p>
          </div>

          <div>
            <p className="font-cinzel font-bold uppercase mb-4 text-ink tracking-wide">Menu</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#concept" className="hover:text-gold-600 transition-colors">Concept</a></li>
              <li><a href="#service" className="hover:text-gold-600 transition-colors">Service</a></li>
              <li><a href="#voice" className="hover:text-gold-600 transition-colors">Voice</a></li>
              <li><a href="#flow" className="hover:text-gold-600 transition-colors">Flow</a></li>
              <li><a href="#faq" className="hover:text-gold-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="font-cinzel font-bold uppercase mb-4 text-ink tracking-wide">Legal</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <button onClick={() => setIsLegalOpen(true)} className="hover:text-gold-600 transition-colors cursor-pointer text-left">
                  特定商取引法に基づく表記
                </button>
              </li>
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-gold-600 transition-colors cursor-pointer text-left">
                  プライバシーポリシー
                </button>
              </li>
            </ul>
          </div>

          <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 text-center md:text-left">
          <p className="text-xs text-stone-400 font-cinzel uppercase tracking-wider">&copy; 2026 HER BASE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
