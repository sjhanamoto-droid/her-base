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
    { name: 'CONCEPT', href: '#concept' },
    { name: 'MESSAGE', href: '#message' },
    { name: 'MEMBER', href: '#members' },
    { name: 'SUPPORT', href: '#support' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
          isScrolled || isMobileMenuOpen ? 'bg-cream-50 py-3' : 'bg-cream-50/85 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="HER BASE" className="h-11 md:h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-cinzel font-bold tracking-[0.15em] text-ink hover:text-gold-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href={PREREGISTER_URL}
              className="bg-ink text-cream-50 px-6 py-2.5 text-sm font-cinzel font-bold tracking-[0.15em] hover:bg-gold-500 transition-colors uppercase"
            >
              Pre-Register
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
        <div className="fixed inset-0 z-40 bg-cream-50 flex flex-col pt-24 px-6">
          <div className="flex justify-center mb-8">
            <img src="/images/logo.png" alt="HER BASE" className="h-20 w-auto" />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-cinzel font-bold text-ink py-4 border-b border-black/10 hover:text-gold-600 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8">
            <a
              href={PREREGISTER_URL}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-ink text-cream-50 py-4 text-lg font-cinzel font-bold tracking-[0.15em] uppercase"
            >
              Pre-Register
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
