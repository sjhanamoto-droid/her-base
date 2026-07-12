import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: '01',
    en: 'Mental Care',
    jp: 'メンタルケア',
    desc: '専門家による、心のサポート',
    detail:
      '夫の競技成績に左右される家庭内の精神的な負担を、専門のメンタルケア担当者がサポート。あなた自身の心を整え、何があっても揺らがない「自分軸」を育てます。',
    features: ['専門家による個別カウンセリング', '同じ立場の仲間とのシェア会', '自分軸を育てるワークショップ'],
  },
  {
    id: '02',
    en: 'Financial Literacy',
    jp: '金融リテラシー',
    desc: '将来の不安を、知識で自信に',
    detail:
      '将来のお金の不安を解消するため、資産防衛や運用の具体的な知識と選択肢を提供。「稼ぐ」だけでなく「守る・増やす」力を身につけ、経済的な自立を叶えます。',
    features: ['家計・資産の基礎講座', '資産防衛と運用の考え方', 'NISA・保険の見直しサポート'],
  },
  {
    id: '03',
    en: 'Self-Realization',
    jp: 'キャリア・自己実現',
    desc: '「私のやりたい」を、仕事に',
    detail:
      'あなた自身が「やりたいこと」を見つけ、キャリア形成や自分の仕事を持つための機会を創出。小さな一歩から、あなたの挑戦を仲間と専門家が後押しします。',
    features: ['強み発見とキャリア設計', '起業・副業の0→1サポート', 'スキル講座と実践の場'],
  },
  {
    id: '04',
    en: 'Community',
    jp: '繋がり',
    desc: '「一人じゃない」を実感できる場所',
    detail:
      '同じ立場だからこそ、分かり合える。孤独になりがちなアスリートの妻が、安心して本音を話し、互いに刺激し合える。人生を変えるのは、質の高い出会いです。',
    features: ['定例のオンライン交流会', '会員限定コミュニティスペース', '経験者・専門家とのつながり'],
  },
];

const Services: React.FC = () => {
  return (
    <div id="support" className="border-b border-black/10">
      {/* Header */}
      <AnimatedSection direction="fade" className="py-24 text-center border-b border-black/10 bg-ink text-cream-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(circle at 50% 50%, #b78829, transparent 60%)' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-8xl font-cinzel font-bold uppercase tracking-tight mb-4 animate-fade-in">Support</h2>
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-gold-400 font-bold tracking-[0.2em] font-cinzel uppercase text-sm">4 Pillars of HER BASE</p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-cream-50">
        {services.map((item, i) => (
          <AnimatedSection key={i} direction={i % 2 === 0 ? 'right' : 'left'} delay={0.1 * i}>
            <div className="group border-b border-r border-black/10 p-10 md:p-12 lg:p-16 hover:bg-cream-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold-500/25 group-hover:text-gold-500 transition-all duration-500">
                    {item.id}
                  </h3>
                  <span className="bg-ink text-cream-50 text-xs px-2 py-1 font-cinzel uppercase tracking-wider group-hover:bg-gold-500 transition-colors duration-300">
                    {item.en}
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold font-serif mb-3 text-ink">{item.jp}</h4>
                <p className="text-gold-700 text-sm mb-4 font-bold">{item.desc}</p>

                <div className="mb-4 pb-4 border-b border-black/10">
                  <p className="text-stone-700 leading-relaxed text-base md:text-lg">{item.detail}</p>
                </div>

                <ul className="space-y-3 mt-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-stone-600">
                      <span className="w-4 h-4 bg-gold-500 flex items-center justify-center rounded-full mr-3 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Vision band */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gold-500 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.35), transparent 55%)' }}
        ></div>
        <AnimatedSection direction="right" delay={0.2} className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/25 hover:bg-gold-600 transition-all duration-500 relative z-10 group">
          <h4 className="text-2xl md:text-3xl font-cinzel font-bold mb-4 uppercase group-hover:scale-[1.02] origin-left transition-transform duration-300">Partner Network</h4>
          <p className="font-bold mb-4 font-serif">賛同者との連携</p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            野球チーム関係者をはじめ、多くの経営者・企業から「ぜひ協力したい」という声をいただいています。
            賛同いただくパートナーと連携し、学びと活躍の機会を広げていきます。
          </p>
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.3} className="p-12 md:p-16 hover:bg-gold-600 transition-all duration-500 relative z-10 group">
          <h4 className="text-2xl md:text-3xl font-cinzel font-bold mb-4 uppercase group-hover:scale-[1.02] origin-left transition-transform duration-300">Future Vision</h4>
          <p className="font-bold mb-4 font-serif">これからの展望</p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            まずはアスリートの妻から。やがて経営者や医師の妻、そしてシングルマザーへ。
            夫や誰かの影ではなく、すべての女性が自らの人生を主体的に生きられる社会を目指します。
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
