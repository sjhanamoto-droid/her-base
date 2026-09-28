import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Members from './Members';
import StickyCTA from './StickyCTA';
import PreparationNotice from './PreparationNotice';
import AnimatedSection from './AnimatedSection';
import { COMPANY, CONTACT_EMAIL, SITE_NAME } from '../constants';

const profileRows: { label: string; value: React.ReactNode }[] = [
  { label: '会社名', value: COMPANY.name },
  { label: '所在地', value: COMPANY.address },
  {
    label: '事業内容',
    value: (
      <ul className="space-y-1">
        {COMPANY.business.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    ),
  },
  { label: '運営サービス', value: `会員制ライフサポートサービス「${SITE_NAME}」` },
  { label: 'お問い合わせ', value: CONTACT_EMAIL },
];

// 会社概要ページ。LPと同じヘッダー・フッターを使い、運営会社と運営チームを紹介する。
const CompanyPage: React.FC = () => {
  useEffect(() => {
    document.title = `運営会社｜${SITE_NAME}`;
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-ink antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* Page title */}
        <section className="pt-36 md:pt-44 pb-20 md:pb-24 bg-base-50 border-b border-ink/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <nav aria-label="パンくずリスト" className="text-xs text-ink-500 tracking-[0.08em] mb-12 md:mb-16">
              <a href="/" className="hover:text-ink transition-colors">TOP</a>
              <span className="mx-3 text-ink-400">&gt;</span>
              <span className="text-ink-600">運営会社</span>
            </nav>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center">
                <p className="font-display tracking-[0.35em] text-brand-700 text-sm mb-5 uppercase">Company</p>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[0.06em]">
                  {SITE_NAME}の運営について
                </h1>
                <span className="block w-10 h-px bg-brand-500/60 mx-auto mt-7"></span>
                <p className="text-ink-600 text-sm md:text-base leading-[2] mt-7">
                  {SITE_NAME}は、{COMPANY.name}が企画・運営しています。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Company profile */}
        <section className="py-24 md:py-32 bg-base-100 border-b border-ink/10">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center mb-12 md:mb-16">
                <p className="font-display tracking-[0.35em] text-brand-700 text-sm mb-5 uppercase">Profile</p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink tracking-[0.06em]">会社概要</h2>
              </div>
              <dl className="border-t border-ink/10">
                {profileRows.map((r) => (
                  <div key={r.label} className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-6 py-5 md:py-6 border-b border-ink/10">
                    <dt className="text-sm text-ink-500 tracking-[0.08em]">{r.label}</dt>
                    <dd className="md:col-span-3 text-[0.95rem] text-ink-700 leading-[1.9] break-words">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </section>

        <Members />

        {/* Back to LP */}
        <section className="py-20 md:py-24 bg-base-50">
          <div className="max-w-3xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/#concept"
              className="flex items-center justify-between border border-ink/20 px-6 py-5 text-sm tracking-[0.1em] text-ink hover:border-brand-700 hover:text-brand-700 transition-colors"
            >
              {SITE_NAME}について見る <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="/#membership"
              className="flex items-center justify-between bg-brand-700 text-white px-6 py-5 text-sm tracking-[0.1em] hover:bg-ink transition-colors"
            >
              ご入会について見る <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
      <PreparationNotice active={false} />
    </div>
  );
};

export default CompanyPage;
