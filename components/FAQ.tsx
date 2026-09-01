import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Plus } from 'lucide-react';

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
    a: '有料の会員制コミュニティで、月額会費は4,980円（税込）です。会員限定コンテンツの視聴、オンライン企画・座談会、会員コミュニティ、経験シェア・悩み相談などが含まれます。税務・キャリア相談やリトリート等の個別サービスは、OPTION（別料金）でご利用いただけます。',
  },
  {
    q: '孤独を感じていなくても、参加していいですか？',
    a: 'もちろんです。HER BASE は「孤独を埋めるだけの場所」ではありません。支えながら自分の人生も大切にしたい、自分の選択肢を広げたい——そんな前向きな想いのある方こそ、歓迎しています。',
  },
  {
    q: '「挑戦する」とは、具体的に何をするのですか？',
    a: 'HERBASE MINDSET（支え方や関係性を学ぶ）と HERBASE LIFE DESIGN（キャリア・お金・健康・夫婦関係など、自分に必要なテーマを選んで学ぶ）の2つの軸で、自分の人生の選択肢を少しずつ広げていきます。大きなことでなくても、あなたのペースで大丈夫です。',
  },
  {
    q: '地方に住んでいても参加できますか？',
    a: 'もちろんです。学びのコンテンツやオンライン企画・座談会はオンライン中心に行いますので、全国どこからでもご参加いただけます。',
  },
  {
    q: '家庭や周囲に知られずに相談できますか？',
    a: 'はい。ニックネーム参加で、アスリートを支える人だけが集う場です。ご相談内容はプライバシーに配慮して取り扱いますので、安心して本音をお話しください。',
  },
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        className="w-full py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-baseline text-ink font-medium text-[0.95rem] md:text-base">
          <span className="font-display text-oak-600 mr-4 text-lg leading-none">Q.</span>
          {question}
        </span>
        <Plus
          className={`w-5 h-5 flex-shrink-0 text-oak-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-stone-600 text-sm leading-[2] pl-8 pr-2 whitespace-pre-line">
          <span className="font-display text-oak-600 mr-3">A.</span>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-28 bg-base-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionTitle en="FAQ" ja="よくある質問" />
        <div className="border-t border-ink/10">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
