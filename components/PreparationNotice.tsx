import React, { useEffect, useState } from 'react';
import { X, Info } from 'lucide-react';
import { SITE_NAME } from '../constants';

/**
 * サービス公開前の告知。
 * 1) 初回表示のモーダル「ただいまサービス準備中」
 * 2) × で閉じたあとも、右上に「内容が変更される可能性があります」の
 *    アラートを常時表示し続ける。
 */
const PreparationNotice: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // モーダル表示中は背面のスクロールを固定する
  useEffect(() => {
    if (!isModalOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isModalOpen]);

  return (
    <>
      {/* 初回表示のモーダル：ただいまサービス準備中 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="prep-modal-title"
        >
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-base-100 max-w-md w-full shadow-2xl border border-ink/15 animate-fade-in">
            {/* トップアクセント */}
            <div className="h-px w-full bg-ink"></div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-ink transition-colors"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="px-8 py-10 text-center">
              <span className="inline-block border border-ink/50 text-ink px-3 py-1 text-[0.65rem] tracking-[0.25em] mb-6 uppercase font-display">
                Coming Soon
              </span>

              <h3
                id="prep-modal-title"
                className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4"
              >
                ただいまサービス準備中
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-8">
                {SITE_NAME} は現在、サービス公開に向けて準備を進めております。
                <br className="hidden sm:block" />
                本サイトの内容は制作中のものであり、今後変更される可能性がございます。
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center bg-ink text-base-50 px-8 py-3 text-sm tracking-[0.2em] hover:bg-ink/80 transition-colors"
              >
                サイトを見る
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 常時表示の右上アラート：内容が変更される可能性 */}
      <div className="fixed top-20 md:top-24 right-3 md:right-5 z-30 max-w-[15rem] md:max-w-xs pointer-events-none">
        <div className="flex items-start gap-2 bg-base-100/95 backdrop-blur-sm border border-ink/20 shadow-lg px-3 py-2">
          <Info className="w-4 h-4 text-oak-600 mt-0.5 flex-shrink-0" />
          <p className="text-[0.7rem] leading-relaxed text-ink font-medium">
            準備中のサイトのため、内容が変更される可能性があります。
          </p>
        </div>
      </div>
    </>
  );
};

export default PreparationNotice;
