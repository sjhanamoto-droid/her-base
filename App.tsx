import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Pillars from './components/Pillars';
import Message from './components/Message';
import Voices from './components/Voices';
import Membership from './components/Membership';
import Join from './components/Join';
import Flow from './components/Flow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import PreparationNotice from './components/PreparationNotice';
import IntroAnimation, { type IntroPhase } from './components/IntroAnimation';

const App: React.FC = () => {
  // 初回ロードのロゴアニメーション：playing → fading（Heroの演出開始）→ done（準備中モーダル表示）
  // 会社概要ページ等から /#concept のようにセクション指定で来た場合は、イントロと準備中モーダルを出さずに該当セクションへ移動する
  const [arrivedWithHash] = useState(() => window.location.hash.length > 1);
  const [introPhase, setIntroPhase] = useState<IntroPhase>(arrivedWithHash ? 'done' : 'playing');
  const handleIntroPhase = useCallback((phase: IntroPhase) => setIntroPhase(phase), []);

  useEffect(() => {
    if (!arrivedWithHash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    target?.scrollIntoView({ behavior: 'instant' });
  }, [arrivedWithHash]);

  return (
    <div className="min-h-screen bg-base-100 text-ink antialiased overflow-x-hidden">
      {!arrivedWithHash && <IntroAnimation onPhaseChange={handleIntroPhase} />}
      <Header />
      <main>
        <Hero start={introPhase !== 'playing'} />
        <Message />
        <Voices />
        <Pillars />
        <Concept />
        <Membership />
        <Join />
        <Flow />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <PreparationNotice active={!arrivedWithHash && introPhase === 'done'} />
    </div>
  );
};

export default App;
