import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'どんな人が参加できますか？',
    a: 'アスリートを支えるご家族・パートナーの方を対象としています。ご参加の前に面談を行い、アスリートを支えるお立場であることを確認させていただきます。現役・引退は問いません。',
  },
  {
    q: 'なぜ審査制なのですか？',
    a: '安心して本音を話せる環境を守るためです。誰でも自由に入れる場所ではなく、一人ひとり面談を行うことで、同じ立場の人だけが集うクローズドな場を保っています。',
  },
  {
    q: 'ニックネームで参加できますか？',
    a: 'はい。ニックネームでのご参加が可能です。お立場を明かしにくい方も、身元が広まる心配なく、安心してつながっていただけます。',
  },
  {
    q: '費用はかかりますか？',
    a: '有料の会員制コミュニティです。お申し込みと面談は無料で、ご入会後に会員費をいただく形を予定しています。まずはゲストとして体験いただける仕組みも検討中です。（料金は確定し次第ご案内します）',
  },
  {
    q: '地方に住んでいても参加できますか？',
    a: 'もちろんです。お話会や専門家との対談配信、税理士相談会などはオンラインを中心に行いますので、全国どこからでもご参加いただけます。',
  },
  {
    q: '家庭や周囲に知られずに相談できますか？',
    a: 'はい。ニックネーム参加で、アスリートを支える人だけが集う場です。ご相談内容はプライバシーに配慮して取り扱いますので、安心して本音をお話しください。',
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
