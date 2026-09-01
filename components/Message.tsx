import React from 'react';
import AnimatedSection from './AnimatedSection';
import { REP_TITLE, REP_NAME } from '../constants';

const Message: React.FC = () => {
  return (
    <section id="message" className="py-24 md:py-32 border-b border-ink/10 bg-base-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border border-oak-500/50 pointer-events-none"></div>
              <div className="overflow-hidden">
                <img
                  src="/images/photo/ceo.jpg"
                  alt="HERBASE 代表"
                  className="w-full h-[320px] md:h-[460px] object-cover object-center hover:scale-[1.03] transition-transform duration-[1.4s]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Message */}
          <AnimatedSection direction="left" delay={0.3} className="lg:col-span-6">
            <p className="font-display tracking-[0.35em] text-oak-600 text-sm mb-6 uppercase">Message</p>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold leading-[1.7] tracking-[0.06em] text-ink mb-9">
              支える側から、<br />挑戦する側へ。
            </h3>
            <div className="space-y-6 text-stone-600 leading-[2.1] text-[0.95rem] md:text-base">
              <p>
                アスリートである夫と結婚して16年間、選手の妻として競技生活を支えてきました。
                誇らしい毎日でしたが、気づけば自分の仕事ややりたいことは、
                いつも後回しになっていました。
              </p>
              <p>
                夫には「挑戦する」という目標がある。でも私は「支える妻」であることに精一杯で、
                自分がどんな人生を生きたいのかを、考える機会がほとんどありませんでした。
                そんな時ふと、<span className="text-ink font-bold">「私も、自分自身の人生に挑戦したい」</span>と思うようになりました。
              </p>
              <p className="text-ink font-medium border-l border-oak-500 pl-6 py-1 leading-[2]">
                支えることと、自分の人生を大切にすることは、両立できる。
                お互いの挑戦を応援し合える関係を、つくることができる。
                同じ立場にいるあなたと、その一歩を一緒に踏み出したい。それが HER BASE です。
              </p>
            </div>
            <div className="mt-10">
              <p className="font-display text-oak-600 text-xs tracking-[0.3em] uppercase mb-2">{REP_TITLE}</p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-ink">{REP_NAME}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Message;
