import React from 'react';
import AnimatedSection from './AnimatedSection';

type Member = {
  file: string;
  name: string;
  romaji: string;
  roleJp: string;
  roleEn: string;
  intro: string;
};

// メンバー情報。写真は public/images/photo/member/<file>.jpg
const rep: Member = {
  file: 'fuchan',
  name: '柳生 史乃',
  romaji: 'Yagyu Shino',
  roleJp: '代表',
  roleEn: 'Founder',
  intro:
    '事業全体の統括および最終意思決定を担う。顧客インタビュー、サービス設計、会員との交流を通じて顧客ニーズを把握し、HERBASEの事業・サービスを継続的に改善する。',
};

const members: Member[] = [
  {
    file: 'kazumi',
    name: '鳥尾 かずみ',
    romaji: 'Torio Kazumi',
    roleJp: '会員体験マネージャー',
    roleEn: 'Members',
    intro:
      '会員どうしの場の運営、会員同士の交流促進、オンライン・オフラインイベントの企画・調整など、会員体験の向上を担当する。',
  },
  {
    file: 'masaki',
    name: '花本 昌樹',
    romaji: 'Hanamoto Masaki',
    roleJp: 'テクノロジー担当',
    roleEn: 'Technology',
    intro:
      'WEBサイト・アプリ等の開発、デジタル環境の構築、撮影・ビジュアル制作を担当し、HERBASEのサービス基盤を支える。',
  },
  {
    file: 'maiko',
    name: '水田 真依子',
    romaji: 'Mizuta Maiko',
    roleJp: '事業・パートナー戦略',
    roleEn: 'Strategy',
    intro:
      '事業戦略の構築支援、会員体験の設計、サービス提供に必要な専門家・外部パートナーとの連携およびネットワーク構築を担当する。',
  },
  {
    file: 'jei',
    name: '岡崎 純也',
    romaji: 'Okazaki Junya',
    roleJp: '財務・税務顧問（税理士）',
    roleEn: 'Finance & Tax',
    intro:
      '資金計画、収支管理、税務対応など、事業運営における財務・税務面を支援する。',
  },
];

const Members: React.FC = () => {
  return (
    <section id="members" className="py-24 md:py-32 bg-base-100 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-5 uppercase">Member</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">
              私たちが、あなたに伴走します。
            </h2>
            <span className="block w-10 h-px bg-oak-500/60 mx-auto mt-7"></span>
          </div>
        </AnimatedSection>

        {/* Representative — featured */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="relative max-w-[380px] mx-auto lg:mx-0">
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border border-oak-500/50 pointer-events-none"></div>
                <div className="overflow-hidden">
                  <img
                    src={`/images/photo/member/${rep.file}.jpg`}
                    alt={rep.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display tracking-[0.3em] text-oak-600 text-xs uppercase mb-4">{rep.roleEn}</p>
              <p className="text-stone-500 text-sm mb-2">{rep.roleJp}</p>
              <div className="flex items-baseline gap-4 mb-7">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink">{rep.name}</h3>
                <span className="font-display text-oak-500 text-base md:text-lg tracking-[0.15em] uppercase">{rep.romaji}</span>
              </div>
              <p className="text-stone-600 leading-[2.1] text-[0.95rem] md:text-base max-w-xl">{rep.intro}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/10">
          {members.map((m, i) => (
            <AnimatedSection key={m.file} direction="up" delay={0.15 + i * 0.08} className="border-r border-b border-ink/10">
              <div className="h-full p-6 md:p-8">
                <div className="overflow-hidden mb-6">
                  <img
                    src={`/images/photo/member/${m.file}.jpg`}
                    alt={m.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
                <p className="font-display tracking-[0.2em] text-oak-600 text-[0.7rem] uppercase mb-2">{m.roleEn}</p>
                <p className="text-stone-500 text-xs mb-2 leading-relaxed">{m.roleJp}</p>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">{m.name}</h3>
                <p className="font-display text-oak-500 text-xs tracking-[0.12em] uppercase mb-4">{m.romaji}</p>
                <p className="text-stone-600 leading-[1.9] text-sm">{m.intro}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
