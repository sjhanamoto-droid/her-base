import React from 'react';
import { X } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rows: { label: string; value: React.ReactNode }[] = [
  { label: '販売事業者', value: '（準備中）サービス提供開始時までに掲載いたします' },
  { label: '運営統括責任者', value: '（準備中）' },
  { label: '所在地', value: '（準備中）ご請求に応じて遅滞なく開示いたします' },
  { label: 'お問い合わせ', value: CONTACT_EMAIL },
  { label: '販売価格', value: 'サービス提供開始時に、各プランのページにて表示いたします' },
  { label: '商品代金以外の必要料金', value: 'インターネット接続に関わる通信料等はお客様のご負担となります' },
  { label: 'お支払方法', value: 'サービス提供開始時にご案内いたします' },
  { label: '役務の提供時期', value: 'お申し込み・お支払い確認後、順次ご案内いたします' },
  { label: '返品・キャンセル', value: '役務の性質上、提供開始後のご返金は承っておりません。詳細は提供開始時の規約に定めます' },
];

const LegalModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-cream-50 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-cream-50 border-b border-black/10 px-8 py-5 flex justify-between items-center z-10">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">特定商取引法に基づく表記</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-gold-600 transition-colors" aria-label="close">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          <p className="text-xs text-stone-500 mb-6 bg-cream-100 border border-gold-200 px-4 py-3 rounded">
            本サービスは現在準備中です。有料サービスの提供開始にあわせて、以下の内容を確定・掲載いたします。
          </p>
          <dl className="divide-y divide-black/10">
            {rows.map((r, i) => (
              <div key={i} className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-sm font-bold text-ink font-cinzel sm:col-span-1">{r.label}</dt>
                <dd className="text-sm text-stone-600 leading-relaxed sm:col-span-2">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
