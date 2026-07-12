import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Message from './components/Message';
import Members from './components/Members';
import Services from './components/Services';
import Voices from './components/Voices';
import Join from './components/Join';
import Flow from './components/Flow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50 text-stone-800 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Message />
        <Members />
        <Services />
        <Voices />
        <Join />
        <Flow />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
