import React from 'react';
import { X } from 'lucide-react';
import { CONTACT_EMAIL, SITE_NAME } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. 個人情報の取得',
    body: `${SITE_NAME}（以下「当サービス」）は、入会申し込み・面談・お問い合わせ・各種お申し込みの際に、お名前（ニックネームを含む）・メールアドレス・ご連絡先などの個人情報を、適法かつ公正な手段により取得します。`,
  },
  {
    title: '2. 利用目的',
    body: '取得した個人情報は、サービスに関するご案内・ご連絡、お問い合わせへの対応、サービスの提供・改善、および法令に基づく対応のために利用します。',
  },
  {
    title: '3. 第三者提供',
    body: '当サービスは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
  },
  {
    title: '4. 安全管理',
    body: '当サービスは、個人情報の漏えい・滅失・毀損を防止するため、適切な安全管理措置を講じます。',
  },
  {
    title: '5. 開示・訂正・削除',
    body: 'ご本人からの個人情報の開示・訂正・利用停止・削除のご請求に対しては、ご本人であることを確認のうえ、法令に従い速やかに対応します。',
  },
  {
    title: '6. お問い合わせ窓口',
    body: `個人情報の取扱いに関するお問い合わせは、${CONTACT_EMAIL} までご連絡ください。`,
  },
  {
    title: '7. 改定',
    body: '本ポリシーの内容は、法令の変更やサービス内容の変更に応じて改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。',
  },
];

const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-cream-50 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-cream-50 border-b border-black/10 px-8 py-5 flex justify-between items-center z-10">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">プライバシーポリシー</h3>
          <button onClick={onClose} className="text-stone-500 hover:text-gold-600 transition-colors" aria-label="close">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-stone-600 text-sm leading-relaxed">
            {SITE_NAME} は、お客様の個人情報を尊重し、その保護の重要性を認識したうえで、以下の方針に基づき適切に取り扱います。
          </p>
          {sections.map((s, i) => (
            <div key={i}>
              <h4 className="font-bold text-ink mb-2 font-cinzel text-sm tracking-wide">{s.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
          <p className="text-xs text-stone-400 pt-4 border-t border-black/10">制定日：サービス提供開始時に定めます</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
