import React, { useEffect, useRef, useState } from 'react';

export type IntroPhase = 'playing' | 'fading' | 'done';

interface IntroAnimationProps {
  /** フェーズが変わるたびに呼ばれる（playing → fading → done） */
  onPhaseChange?: (phase: IntroPhase) => void;
}

const HOLD_AFTER_END_MS = 250; // 最終フレームを少し見せてからフェード
const FADE_MS = 900; // 白いオーバーレイのフェードアウト時間
const FAILSAFE_MS = 7000; // 何かあっても必ず閉じる

/**
 * 初回ロード時にフルスクリーンで流れるロゴアニメーション。
 * - 動画は /public/video/intro.(webm|mp4)。差し替えはファイルを置き換えるだけ。
 * - 正方形の動画を白背景の中央に置き、縁を放射状マスクでぼかして全画面に馴染ませる。
 * - 再生終了・クリック（スキップ）・自動再生不可・reduced-motion のいずれでも閉じる。
 */
const IntroAnimation: React.FC<IntroAnimationProps> = ({ onPhaseChange }) => {
  const [phase, setPhase] = useState<IntroPhase>('playing');
  const videoRef = useRef<HTMLVideoElement>(null);
  const timersRef = useRef<number[]>([]);
  const finishedRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  const finish = (immediate = false) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    if (immediate) {
      setPhase('done');
      return;
    }
    setPhase('fading');
    timersRef.current.push(window.setTimeout(() => setPhase('done'), FADE_MS));
  };

  useEffect(() => {
    onPhaseChange?.(phase);
  }, [phase, onPhaseChange]);

  useEffect(() => {
    // 動きを抑える設定のユーザーにはイントロを出さない
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish(true);
      return;
    }

    const video = videoRef.current;
    if (!video) {
      finish(true);
      return;
    }

    // バックグラウンドタブで開かれた場合、ブラウザは動画の読み込みを保留する。
    // タブが表示されてから再生とフェイルセーフのタイマーを開始する。
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      // 自動再生できない環境（省電力モード等）では即座に閉じる
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => finish(true));
      }
      timersRef.current.push(window.setTimeout(() => finish(), FAILSAFE_MS));
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        document.removeEventListener('visibilitychange', onVisibility);
        start();
      }
    };
    if (document.visibilityState === 'visible') {
      start();
    } else {
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 表示中は背面のスクロールを固定
  useEffect(() => {
    if (phase === 'done') return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [phase]);

  if (phase === 'done') return null;

  const handleEnded = () => {
    timersRef.current.push(window.setTimeout(() => finish(), HOLD_AFTER_END_MS));
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-white cursor-pointer"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-in-out`,
      }}
      onClick={() => finish()}
      role="presentation"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="block shrink-0 max-w-none object-cover"
        style={{
          // PC は画面高さの 7 割、スマホは横幅いっぱい（ロゴ自体は動画フレームの約 6 割なので、実際のロゴはさらに小さく見える。shrink-0 / max-w-none で flex と preflight の max-width:100% による縮小を防ぐ）
          width: 'min(100vw, 70vh)',
          height: 'min(100vw, 70vh)',
          // 正方形の縁を白に溶かす
          WebkitMaskImage: 'radial-gradient(circle closest-side, #000 84%, transparent 100%)',
          maskImage: 'radial-gradient(circle closest-side, #000 84%, transparent 100%)',
        }}
        muted
        playsInline
        autoPlay
        preload="auto"
        poster="/video/intro-poster.jpg"
        disablePictureInPicture
        onEnded={handleEnded}
        onError={() => finish(true)}
      >
        <source src="/video/intro.webm" type="video/webm" />
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        className="absolute bottom-8 right-8 md:bottom-10 md:right-12 font-display text-[0.7rem] tracking-[0.35em] uppercase text-brand-700/80 hover:text-brand-700 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default IntroAnimation;
