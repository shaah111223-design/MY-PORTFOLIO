import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { PlaceholderModal } from './PlaceholderModal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    itemType: 'social-github' | 'social-linkedin' | 'general';
  }>({
    isOpen: false,
    title: '',
    itemType: 'social-github',
  });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSocialClick = (platform: 'github' | 'linkedin') => {
    const config = profileData.socialLinks[platform];
    if (config.isConfigured && config.url) {
      window.open(config.url, '_blank', 'noopener,noreferrer');
    } else {
      setModalConfig({
        isOpen: true,
        title: platform === 'github' ? 'GitHub Profile' : 'LinkedIn Profile',
        itemType: platform === 'github' ? 'social-github' : 'social-linkedin',
      });
    }
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Bio & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-500 to-violet-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                AS
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-mono text-electric-400">
                  Computer Science Engineering Student • AJIET '28
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Passionate undergraduate aspiring software developer from Kasargod, Kerala. Committed to engineering rigorous, problem-solving code and continuous technical growth.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleSocialClick('github')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialClick('linkedin')}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-electric-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Quick Navigation
            </span>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Learning', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="hover:text-electric-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Direct Contact
            </span>
            <div className="space-y-2.5">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-electric-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-electric-400 shrink-0" />
                <span>{profileData.contact.email}</span>
              </a>
              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{profileData.contact.displayPhone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0" />
                <span>{profileData.location.full}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Built With Care */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-[11px]">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & built with care for entry-level software opportunities</span>
          </div>
        </div>

      </div>

      <PlaceholderModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        itemType={modalConfig.itemType}
      />
    </footer>
  );
};
