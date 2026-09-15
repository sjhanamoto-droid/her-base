import React, { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Pillars from './components/Pillars';
import Message from './components/Message';
import Members from './components/Members';
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
  const [introPhase, setIntroPhase] = useState<IntroPhase>('playing');
  const handleIntroPhase = useCallback((phase: IntroPhase) => setIntroPhase(phase), []);

  return (
    <div className="min-h-screen bg-base-100 text-ink antialiased overflow-x-hidden">
      <IntroAnimation onPhaseChange={handleIntroPhase} />
      <Header />
      <main>
        <Hero start={introPhase !== 'playing'} />
        <Message />
        <Voices />
        <Pillars />
        <Concept />
        <Members />
        <Membership />
        <Join />
        <Flow />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <PreparationNotice active={introPhase === 'done'} />
    </div>
  );
};

export default App;
