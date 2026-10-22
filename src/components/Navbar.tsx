import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Learning', href: '#learning', id: 'learning' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-white focus:outline-none focus:ring-2 focus:ring-electric-400 rounded-lg p-1"
            aria-label={`${profileData.name} - Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-500 to-violet-600 flex items-center justify-center font-mono font-bold text-base shadow-glow-blue/40 shadow-sm group-hover:scale-105 transition-transform duration-200">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-electric-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CSE Student • 2028
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-electric-500/20 to-violet-500/20 border border-electric-400/40 shadow-sm shadow-electric-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-electric-500 to-violet-600 hover:from-electric-400 hover:to-violet-500 shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-electric-400"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-electric-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-[65px] bg-[#080c16]/95 backdrop-blur-xl border-t border-slate-800 z-50 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-electric-500/10 text-electric-400 border border-electric-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-electric-400 glow-dot" />}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-500 to-violet-600 shadow-glow-blue text-center text-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs text-slate-400 font-mono">
              shahadh22831@gmail.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
