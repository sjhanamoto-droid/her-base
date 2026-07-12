import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, MousePointerClick } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type Member = {
  file: string;
  name: string;
  romaji: string;
  role: string;
  roleJp: string;
  intro: string;
  tags: string[];
};

// メンバー情報（お名前はフォルダ名、自己紹介・役割は仮テキストです。差し替え自由です）
const members: Member[] = [
  {
    file: 'fuchan',
    name: 'ふうちゃん',
    romaji: 'Fuchan',
    role: 'Mental Care',
    roleJp: 'メンタルケア',
    intro:
      '心がふっと軽くなる時間を、あなたに。うまく言葉にできない“もやもや”も、遠慮なく話してくださいね。聞くことが、わたしの得意です。',
    tags: ['#傾聴力には自信あり', '#甘いものは正義', '#ヨガでリセット'],
  },
  {
    file: 'maiko',
    name: 'まいこ',
    romaji: 'Maiko',
    role: 'Career Design',
    roleJp: 'キャリアデザイン',
    intro:
      '“やってみたい”の小さな火種を、一緒に大きく育てていきましょう。昨日の自分より半歩前へ——それが、わたしの合言葉です。',
    tags: ['#新しいこと大好き', '#カフェ研究家', '#朝活2年目'],
  },
  {
    file: 'kazumi',
    name: 'かずみ',
    romaji: 'Kazumi',
    role: 'Financial',
    roleJp: '金融リテラシー',
    intro:
      'お金の話は、こわくない。知れば知るほど、未来が楽しみになります。むずかしいことは、とことん“やさしく”翻訳してお届けします。',
    tags: ['#数字とにらめっこ', '#家計改善オタク', '#休日は登山'],
  },
  {
    file: 'jei',
    name: 'じぇい',
    romaji: 'Jei',
    role: 'Community',
    roleJp: 'コミュニティ',
    intro:
      '一人でがんばらなくて、いいんです。ここには、あなたを応援する仲間がいます。まずは気軽に、顔を出してみてください！',
    tags: ['#ムードメーカー', '#イベント大好き', '#実はコーヒー党'],
  },
  {
    file: 'masaki',
    name: 'まさき',
    romaji: 'Masaki',
    role: 'Creative',
    roleJp: 'クリエイティブ',
    intro:
      'あなたの“らしさ”を、いちばん素敵な形で切り取ります。新しい一歩に踏み出すあなたは、それだけでもう、絵になる。',
    tags: ['#カメラが相棒', '#光を追う人', '#猫派'],
  },
];

const Members: React.FC = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);
  const len = members.length;

  const goTo = (i: number, direction?: number) => {
    const ni = (i + len) % len;
    setDir(direction ?? (ni > active ? 1 : -1));
    setActive(ni);
  };
  const next = () => { setDir(1); setActive((a) => (a + 1) % len); };
  const prev = () => { setDir(-1); setActive((a) => (a - 1 + len) % len); };

  // キーボード操作
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    touchX.current = null;
  };

  const m = members[active];
  const prevM = members[(active - 1 + len) % len];
  const nextM = members[(active + 1) % len];

  return (
    <section id="members" className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-cream-100 to-cream-50">
      {/* Big faint background word */}
      <h2 className="pointer-events-none select-none absolute top-24 right-[-2%] text-[16vw] leading-none font-cinzel font-bold text-gold-500/[0.07] uppercase">
        Members
      </h2>

      {/* Group photo band */}
      <div className="relative h-[300px] md:h-[420px] overflow-hidden">
        <img src="/images/photo/member.jpg" alt="HER BASE members" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-14 text-center px-6">
          <p className="font-cinzel text-gold-300 tracking-[0.3em] text-xs md:text-sm uppercase mb-3">Member Introduction</p>
          <h3 className="font-serif text-cream-50 text-2xl md:text-4xl font-bold">私たちが、あなたに伴走します。</h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        {/* Counter + hint */}
        <div className="flex items-center justify-between mb-8">
          <div className="font-cinzel text-ink flex items-end gap-2">
            <span className="text-5xl md:text-6xl font-bold text-gold-500 leading-none tabular-nums">
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className="text-stone-400 text-lg md:text-xl mb-1">/ {String(len).padStart(2, '0')}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-stone-400 text-xs tracking-wider animate-pulse">
            <MousePointerClick className="w-4 h-4" />
            クリック / スワイプで次のメンバーへ
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Portrait */}
          <div className="md:col-span-5 relative flex justify-center">
            {/* giant index behind */}
            <span
              key={`num-${active}`}
              className="pointer-events-none absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 font-cinzel font-bold text-[9rem] md:text-[12rem] leading-none text-gold-500/10 z-0"
              style={{ animation: 'mPop 0.6s ease-out' }}
            >
              {active + 1}
            </span>

            <button
              onClick={next}
              aria-label="次のメンバー"
              className="group relative z-10 w-full max-w-[360px] cursor-pointer"
            >
              <div
                key={`img-${active}`}
                className="relative aspect-[2/3] overflow-hidden rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-cream-50 to-gold-100 shadow-[0_24px_60px_rgba(34,26,16,0.22)] ring-1 ring-gold-500/30"
                style={{ animation: 'mImgIn 0.7s cubic-bezier(0.22,1,0.36,1)' }}
              >
                <img
                  src={`/images/photo/member/${m.file}.jpg`}
                  alt={m.name}
                  className="w-full h-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-105"
                />
                {/* gold sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* role chip */}
                <div key={`chip-${active}`} className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/85 backdrop-blur-sm px-4 py-1.5" style={{ animation: 'mUp 0.6s ease-out 0.25s both' }}>
                  <span className="font-cinzel text-gold-300 text-xs tracking-[0.2em] uppercase">{m.role}</span>
                </div>
              </div>
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>

          {/* Text */}
          <div className="md:col-span-7">
            <div key={`role-${active}`} style={{ animation: 'mUp 0.6s ease-out both' }}>
              <p className="font-cinzel text-gold-600 tracking-[0.25em] text-sm uppercase mb-2">{m.role}</p>
              <p className="text-stone-500 text-sm mb-1">{m.roleJp} 担当</p>
            </div>
            <div key={`name-${active}`} className="flex items-baseline gap-4 mb-6" style={{ animation: 'mUp 0.6s ease-out 0.08s both' }}>
              <h3 className="font-serif text-4xl md:text-6xl font-bold text-ink">{m.name}</h3>
              <span className="font-cinzel text-gold-500 text-lg md:text-xl tracking-widest uppercase">{m.romaji}</span>
            </div>
            <p key={`intro-${active}`} className="text-stone-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ animation: 'mUp 0.6s ease-out 0.16s both' }}>
              {m.intro}
            </p>
            <div key={`tags-${active}`} className="flex flex-wrap gap-2 mb-10">
              {m.tags.map((t, i) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-cream-100 border border-gold-500/30 text-gold-700 text-xs font-bold"
                  style={{ animation: `mUp 0.5s ease-out ${0.24 + i * 0.08}s both` }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button onClick={prev} aria-label="前のメンバー" className="w-12 h-12 rounded-full border border-ink/20 text-ink flex items-center justify-center hover:bg-ink hover:text-cream-50 transition-all duration-300">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={next} aria-label="次のメンバー" className="w-12 h-12 rounded-full border border-ink/20 text-ink flex items-center justify-center hover:bg-ink hover:text-cream-50 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Thumbnail filmstrip */}
              <div className="flex items-center gap-2 ml-2">
                {members.map((mm, i) => (
                  <button
                    key={mm.file}
                    onClick={() => goTo(i)}
                    aria-label={mm.name}
                    className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                      i === active ? 'w-12 h-16 ring-2 ring-gold-500' : 'w-10 h-14 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={`/images/photo/member/${mm.file}.jpg`}
                      alt={mm.name}
                      className={`w-full h-full object-cover object-top ${i === active ? '' : 'grayscale hover:grayscale-0'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* neighbor hint */}
            <div className="hidden md:flex items-center justify-between mt-8 text-xs text-stone-400 font-cinzel tracking-wider max-w-xl">
              <span className="uppercase">← {prevM.romaji}</span>
              <span className="uppercase">{nextM.romaji} →</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mImgIn {
          0% { opacity: 0; clip-path: inset(0 0 0 100%); transform: scale(1.06); }
          100% { opacity: 1; clip-path: inset(0 0 0 0); transform: scale(1); }
        }
        @keyframes mUp {
          0% { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mPop {
          0% { opacity: 0; transform: translate(-50%, 12px) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}} />
    </section>
  );
};

export default Members;
