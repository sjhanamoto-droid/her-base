import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'アスリートの妻でなくても参加できますか？',
    a: 'まずはアスリートの妻の方を対象にサービスを構築しています。将来的には、経営者や医師の妻、シングルマザーなど、同じ課題を持つ方へも広げていく予定です。ご関心のある方は、お気軽に事前登録・お問い合わせください。',
  },
  {
    q: '費用はかかりますか？',
    a: '現在は準備段階のため、事前登録は無料です。サービス開始時の料金プランについては、決まり次第、事前登録いただいた方へ優先的にご案内いたします。',
  },
  {
    q: '夫が現役を引退していても参加できますか？',
    a: 'はい。現役・引退を問わず、アスリートを支えてこられた妻の方であればご参加いただけます。これからの人生を主体的に歩みたい——その想いがあれば大丈夫です。',
  },
  {
    q: '地方に住んでいても参加できますか？',
    a: 'もちろんです。メンタルケアや各種講座はオンラインを中心に提供する予定ですので、全国どこからでもご参加いただけます。',
  },
  {
    q: '夫や家族に知られずに相談できますか？',
    a: 'はい。個別ヒアリングやご相談の内容は、プライバシーに配慮して厳重に取り扱います。安心して、あなたの本音をお聞かせください。',
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-cream-50 rounded-lg shadow-sm border border-black/5 overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-ink flex items-start">
          <span className="text-gold-600 mr-3 text-xl font-cinzel leading-none">Q.</span>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-gold-500 flex-shrink-0" /> : <ChevronDown className="text-stone-400 flex-shrink-0" />}
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        } bg-cream-100`}
      >
        <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">
          <span className="font-bold text-gold-600 mr-3 font-cinzel">A.</span>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-cream-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle en="FAQ" ja="よくある質問" />
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
