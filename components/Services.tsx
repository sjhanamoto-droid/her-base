import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    id: '01',
    en: 'Closed Community',
    jp: 'クローズドコミュニティ',
    desc: '審査制・ニックネーム参加',
    detail:
      'アスリートを支える人だけが参加できる、審査制のクローズドコミュニティ。ニックネームで参加できるので、お立場を明かしにくい方も、安心して本音を話せる環境を大切にしています。',
    features: ['審査制で守られた安心の場', 'ニックネームで参加OK', '会員限定のオンラインの居場所'],
  },
  {
    id: '02',
    en: 'Talk Session',
    jp: '奥様のお話会',
    desc: '有名選手の奥様のリアルな体験談',
    detail:
      '第一線でアスリートを支えてきた有名選手の奥様をお招きし、リアルな体験や日々の工夫を伺うお話会。同じ立場だからこそ響く、等身大のヒントが得られます。',
    features: ['著名な奥様の体験談', '支える立場ならではの工夫', '質問・交流の時間'],
  },
  {
    id: '03',
    en: 'Expert Talk',
    jp: '専門家との対談配信',
    desc: 'メンバーの相談から生まれるテーマ',
    detail:
      'メンバーから寄せられた相談やお悩みをもとに、各分野の専門家と対談する配信をお届け。あなたの「知りたい」に、専門家の視点で丁寧に応えます。',
    features: ['相談ベースのテーマ設定', '各分野の専門家が登壇', '見逃しても後から視聴'],
  },
  {
    id: '04',
    en: 'Tax Consulting',
    jp: '税理士相談会',
    desc: '月1回程度の定期開催',
    detail:
      'お金や税金の不安に、月1回程度の税理士相談会で寄り添います。人には聞きにくいお金のことも、安心して相談できる場所です。',
    features: ['月1回程度の定期開催', '税理士に直接相談できる', 'お金の不安を解消'],
  },
  {
    id: '05',
    en: 'Tea Party',
    jp: 'お茶会',
    desc: '気軽につながる、ゆるやかな時間',
    detail:
      'かしこまらず、ゆるやかに集うお茶会。同じ立場の仲間と、日々のことを気軽に話せる時間です。はじめての方も、安心してご参加いただけます。',
    features: ['リラックスした雰囲気', '気軽な交流の場', 'はじめての方も安心'],
  },
  {
    id: '06',
    en: 'Expert Events',
    jp: '専門家とのイベント',
    desc: '暮らしや将来に役立つ企画',
    detail:
      '暮らしや将来に役立つテーマで、各種専門家とのイベントを企画。メンバーの声をもとに、学びと出会いの機会を少しずつ広げていきます。',
    features: ['多彩なテーマの企画', '専門家から直接学べる', 'メンバーの声から企画'],
  },
];

const Services: React.FC = () => {
  return (
    <div id="service" className="border-b border-black/10">
      {/* Header */}
      <AnimatedSection direction="fade" className="py-24 text-center border-b border-black/10 bg-ink text-cream-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(circle at 50% 50%, #b78829, transparent 60%)' }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-8xl font-cinzel font-bold uppercase tracking-tight mb-4 animate-fade-in">Service</h2>
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-gold-400 font-bold tracking-[0.2em] font-cinzel uppercase text-sm">HER BASE でできること</p>
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
          <h4 className="text-2xl md:text-3xl font-cinzel font-bold mb-4 uppercase group-hover:scale-[1.02] origin-left transition-transform duration-300">Screening</h4>
          <p className="font-bold mb-4 font-serif">安心を守る、審査制</p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            誰でも自由に入れる場所ではありません。一人ひとり面談を行い、アスリートを支える人であることを確認したうえでご参加いただきます。
            その一手間が、みなさんの安心を守ります。
          </p>
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.3} className="p-12 md:p-16 hover:bg-gold-600 transition-all duration-500 relative z-10 group">
          <h4 className="text-2xl md:text-3xl font-cinzel font-bold mb-4 uppercase group-hover:scale-[1.02] origin-left transition-transform duration-300">Our Stance</h4>
          <p className="font-bold mb-4 font-serif">小さくても、深く届ける</p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            大きさよりも、本当に届けたい人へ深く届けることを大切にしています。
            まずは会員のみなさまと一緒に、あたたかく確かな居場所を、少しずつ育てていきます。
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
