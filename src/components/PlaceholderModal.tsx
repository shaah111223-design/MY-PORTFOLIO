import React from 'react';
import { X, ExternalLink, Info, Code, FileText } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  itemType: 'project-demo' | 'project-repo' | 'social-github' | 'social-linkedin' | 'general';
  customMessage?: string;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  title,
  itemType,
  customMessage,
}) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (itemType) {
      case 'project-demo':
        return {
          badge: 'Project In Development',
          headline: 'ScholarMatch Live Demo Placeholder',
          explanation:
            'A live demo URL has not been deployed yet for ScholarMatch. As an academic project, it is currently in development.',
          instruction:
            'To connect your live deployment, open "src/data/portfolioData.ts" and update "liveDemoUrl" and "isRealDemoConfigured: true".',
        };
      case 'project-repo':
        return {
          badge: 'Repository Notice',
          headline: 'ScholarMatch Source Code',
          explanation:
            'The source code repository for ScholarMatch is currently private or being organized for public release.',
          instruction:
            'To connect your GitHub repository, open "src/data/portfolioData.ts" and update "sourceCodeUrl" and "isRealRepoConfigured: true".',
        };
      case 'social-github':
        return {
          badge: 'Profile Link Placeholder',
          headline: 'GitHub Profile Link',
          explanation:
            'GitHub profile URL is ready to be linked. To avoid broken external links, this placeholder prevents 404 navigation.',
          instruction:
            'To add your GitHub username, open "src/data/portfolioData.ts" and set "profileData.socialLinks.github.url" to your profile link and "isConfigured: true".',
        };
      case 'social-linkedin':
        return {
          badge: 'Profile Link Placeholder',
          headline: 'LinkedIn Profile Link',
          explanation:
            'LinkedIn profile URL is ready to be linked. To maintain recruiter-readiness, this placeholder protects against empty redirects.',
          instruction:
            'To add your LinkedIn profile, open "src/data/portfolioData.ts" and set "profileData.socialLinks.linkedin.url" to your profile link and "isConfigured: true".',
        };
      default:
        return {
          badge: 'Information',
          headline: title,
          explanation: customMessage || 'This feature is structured and ready for your personalized information.',
          instruction: 'Update your information in "src/data/portfolioData.ts".',
        };
    }
  };

  const content = getContent();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-slate-100 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400">
            <Info className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-electric-400 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
            {content.badge}
          </span>
        </div>

        {/* Content */}
        <h3 id="modal-title" className="text-xl font-bold text-white mb-2">
          {content.headline}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {content.explanation}
        </p>

        {/* Developer Guide Box */}
        <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 mb-5">
          <div className="flex items-start gap-2.5">
            <Code className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-violet-300">How to update:</span>
              <p className="mt-1 font-mono text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded border border-slate-800">
                {content.instruction}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
