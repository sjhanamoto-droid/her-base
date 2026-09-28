import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type Member = {
  file: string;
  name: string;
  romaji: string;
  roleJp: string;
  roleEn: string;
  intro: string;
};

// 運営チームのメンバー情報（会社概要ページ /company に掲載）。
// 紹介文は社内での担当領域として書き、会員へ直接提供するサービスと誤認されない表現にする。
// 写真は public/images/photo/member/<file>.jpg
const rep: Member = {
  file: 'fuchan',
  name: '柳生 史乃',
  romaji: 'Yagyu Shino',
  roleJp: '代表',
  roleEn: 'Founder',
  intro:
    'HERBASEの創業者として、事業全体の統括と経営判断を担う。顧客インタビューや利用者の声をもとにサービスの設計・改善を進め、HERBASEの方向性を定める。',
};

const members: Member[] = [
  {
    file: 'kazumi',
    name: '鳥尾 かずみ',
    romaji: 'Torio Kazumi',
    roleJp: 'コミュニティ運営担当',
    roleEn: 'Community Operations',
    intro:
      'HERBASEのコミュニティ運営を担当。交流の場やオンライン・オフラインイベントの企画・運営体制づくりを通じて、コミュニティ全体の質の向上に取り組む。',
  },
  {
    file: 'michika',
    name: '丸山 美翔',
    romaji: 'Maruyama Michika',
    roleJp: 'ライフサポート領域 企画担当',
    roleEn: 'Life Support Planning',
    intro:
      'HERBASEのライフサポート領域の企画を担当。セルフラブを軸に、パートナーシップや仕事、生き方に関するプログラムやコンテンツの設計に携わる。',
  },
  {
    file: 'masaki',
    name: '花本 昌樹',
    romaji: 'Hanamoto Masaki',
    roleJp: 'テクノロジー担当',
    roleEn: 'Technology',
    intro:
      'HERBASEのWebサイト・アプリの開発、デジタル環境の構築、撮影・ビジュアル制作を担当し、事業のデジタル基盤を整える。',
  },
  {
    file: 'maiko',
    name: '水田 真依子',
    romaji: 'Mizuta Maiko',
    roleJp: '事業・パートナー戦略',
    roleEn: 'Strategy',
    intro:
      'HERBASEの事業戦略の立案支援と、サービス設計を担当。サービス運営に必要な専門家・外部パートナーとの提携やネットワークづくりを進める。',
  },
  {
    file: 'jei',
    name: '岡崎 純也',
    romaji: 'Okazaki Junya',
    roleJp: '外部顧問（財務・税務）／税理士',
    roleEn: 'Finance & Tax',
    intro:
      '当社の外部顧問税理士として、資金計画、収支管理、税務対応など、事業運営の財務・税務面を支援する。',
  },
];

const Members: React.FC = () => {
  return (
    <section id="members" className="py-24 md:py-32 bg-base-100 border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20">
            <p className="font-display tracking-[0.35em] text-brand-700 text-sm mb-5 uppercase">Team</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">
              HERBASEを運営するチーム
            </h2>
            <p className="text-ink-600 text-sm md:text-base leading-[2] mt-6">
              HERBASEの企画・運営・事業基盤を支えるメンバーです。
            </p>
            <span className="block w-10 h-px bg-brand-500/60 mx-auto mt-7"></span>
          </div>
        </AnimatedSection>

        {/* Representative — featured */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="relative max-w-[380px] mx-auto lg:mx-0">
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border border-brand-500/50 pointer-events-none"></div>
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
              <p className="font-display tracking-[0.3em] text-brand-700 text-xs uppercase mb-4">{rep.roleEn}</p>
              <p className="text-ink-500 text-sm mb-2">{rep.roleJp}</p>
              <div className="flex items-baseline gap-4 mb-7">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink">{rep.name}</h3>
                <span className="font-display text-brand-600 text-base md:text-lg tracking-[0.15em] uppercase">{rep.romaji}</span>
              </div>
              <p className="text-ink-600 leading-[2.1] text-[0.95rem] md:text-base max-w-xl">{rep.intro}</p>
              <a
                href="/#message"
                className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.1em] text-brand-700 border-b border-brand-500/60 pb-1 hover:text-ink hover:border-ink transition-colors"
              >
                代表メッセージを読む <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-ink/10">
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
                <p className="font-display tracking-[0.2em] text-brand-700 text-[0.7rem] uppercase mb-2">{m.roleEn}</p>
                <p className="text-ink-500 text-xs mb-2 leading-relaxed">{m.roleJp}</p>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">{m.name}</h3>
                <p className="font-display text-brand-600 text-xs tracking-[0.12em] uppercase mb-4">{m.romaji}</p>
                <p className="text-ink-600 leading-[1.9] text-sm">{m.intro}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
