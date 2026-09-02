import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PREREGISTER_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'メッセージ', href: '#message' },
    { name: 'プログラム', href: '#program' },
    { name: 'HERBASEについて', href: '#about' },
    { name: 'よくある質問', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-base-100/95 backdrop-blur-sm border-b border-ink/10 py-4'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-[1760px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#top" className="font-display text-[1.45rem] md:text-[1.7rem] tracking-[0.3em] text-ink leading-none">
            HERBASE
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.1em] text-ink/70 hover:text-ink transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PREREGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-base-50 px-7 py-3 text-xs tracking-[0.22em] hover:bg-ink/80 transition-colors"
            >
              お問い合わせ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-ink" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-base-100 flex flex-col pt-28 px-8">
          <p className="font-display text-2xl tracking-[0.3em] text-ink text-center mb-10">HERBASE</p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-2xl tracking-[0.08em] text-ink py-5 border-b border-ink/10"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-10">
            <a
              href={PREREGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-ink text-base-50 py-4 text-sm tracking-[0.22em]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
