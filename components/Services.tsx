import React from 'react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: '01',
    en: 'Community',
    jp: '会員限定コミュニティ',
    desc: '同じ環境にいる仲間だからこそ話せる、安心の場',
    detail:
      '同じ立場だからこそ、わかり合えることがあります。普段はなかなか話せないことも、ここなら気軽に話せる。審査制・ニックネームで参加できる、ほっとできるつながりの場です。',
    features: ['審査制・ニックネーム参加OK', '同じ立場の仲間とつながる', '会員限定のオンラインの居場所'],
  },
  {
    id: '02',
    en: 'Learning',
    jp: '学びのコンテンツ',
    desc: 'MINDSET と LIFE DESIGN の学び',
    detail:
      'HERBASE MINDSET と LIFE DESIGN のテーマで、学びと気づきを得られるコンテンツをお届け。支え方も、自分の人生の選択肢も、少しずつ広げていきます。',
    features: ['MINDSET／LIFE DESIGN の学び', '自分に必要なテーマを選べる', '見逃しても後から視聴'],
  },
  {
    id: '03',
    en: 'Online Session',
    jp: 'オンライン企画・座談会',
    desc: '先輩パートナー・専門家との交流',
    detail:
      '先輩パートナーや各分野の専門家との交流・座談会に参加できます。等身大の体験談や専門家の視点から、今のあなたに必要なヒントが得られます。',
    features: ['先輩パートナーとの座談会', '各分野の専門家が登壇', 'オンラインで全国から参加'],
  },
  {
    id: '04',
    en: 'Share & Talk',
    jp: '経験シェア・相談',
    desc: '経験や悩みをシェアできる場',
    detail:
      '経験や悩みをシェアしたり、相談できる場があります。同じ立場の仲間だからこそ、安心して打ち明けられます。',
    features: ['経験・工夫をシェア', '悩みを相談できる', 'はじめての方も安心'],
  },
  {
    id: '05',
    en: 'Option',
    jp: 'OPTION',
    desc: '必要に応じて、専門的に',
    detail:
      '税務・キャリア相談、リトリート、イベントなど、必要に応じて利用できるオプションサービス（別料金）。',
    features: ['税務・キャリア相談', 'リトリート・イベント'],
  },
];

const Services: React.FC = () => {
  return (
    <div id="program" className="border-b border-ink/10">
      {/* Header */}
      <AnimatedSection direction="fade" className="py-20 md:py-24 text-center bg-base-100 border-b border-ink/10">
        <p className="font-display tracking-[0.35em] text-oak-600 text-sm uppercase mb-5">Program</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.08em]">HERBASE でできること</h2>
        <span className="block w-10 h-px bg-oak-500/60 mx-auto mt-7"></span>
      </AnimatedSection>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-base-50">
        {services.map((item, i) => (
          <AnimatedSection key={i} direction="up" delay={0.05 * i} className="border-b md:border-r border-ink/10">
            <div className="group p-10 md:p-12 lg:p-16 h-full transition-colors duration-500 hover:bg-base-100">
              <div className="flex justify-between items-baseline mb-8">
                <span className="font-display text-4xl md:text-5xl text-oak-300 group-hover:text-oak-500 transition-colors duration-500">
                  {item.id}
                </span>
                <span className="font-display text-xs tracking-[0.25em] uppercase text-oak-600">{item.en}</span>
              </div>

              <h4 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-2.5 tracking-[0.04em]">{item.jp}</h4>
              <p className="text-oak-600 text-sm mb-6">{item.desc}</p>

              <p className="text-stone-600 leading-[2] text-[0.95rem] md:text-base border-b border-ink/10 pb-6 mb-6">
                {item.detail}
              </p>

              <ul className="space-y-3">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center text-sm text-stone-500">
                    <span className="w-4 h-px bg-oak-500/70 mr-3 flex-shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Screening / stance band */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-ink text-base-100">
        <AnimatedSection direction="right" delay={0.15} className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-base-100/15">
          <h4 className="font-display text-2xl md:text-3xl tracking-[0.14em] uppercase mb-5">Screening</h4>
          <p className="font-serif font-semibold mb-5 text-lg">安心を守る、審査制</p>
          <p className="text-sm md:text-[0.95rem] opacity-80 leading-[2]">
            HERBASEでは、一人ひとり面談を行い、アスリートを支える人であることを確認したうえでご参加いただきます。
          </p>
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.25} className="p-12 md:p-16">
          <h4 className="font-display text-2xl md:text-3xl tracking-[0.14em] uppercase mb-5">Our Stance</h4>
          <p className="font-serif font-semibold mb-5 text-lg">必要としているあなたへ</p>
          <p className="text-sm md:text-[0.95rem] opacity-80 leading-[2]">
            本当に届けたい人へ深く届けることを大切にしています。
            まずは会員のみなさまと一緒に、あたたかく確かな居場所を、少しずつ育てていきます。
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
