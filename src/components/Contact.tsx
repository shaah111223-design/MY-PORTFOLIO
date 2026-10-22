import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profileData } from '../data/portfolioData';
import { PlaceholderModal } from './PlaceholderModal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    itemType: 'social-github' | 'social-linkedin' | 'general';
  }>({
    isOpen: false,
    title: '',
    itemType: 'social-github',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Ahamad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your Portfolio Website`
    );
    const generatedMailto = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    
    setMailtoUrl(generatedMailto);
    setFormSubmitted(true);
  };

  const handleSocialClick = (platform: 'github' | 'linkedin') => {
    const linkConfig = profileData.socialLinks[platform];
    if (linkConfig.isConfigured && linkConfig.url) {
      window.open(linkConfig.url, '_blank', 'noopener,noreferrer');
    } else {
      setModalConfig({
        isOpen: true,
        title: platform === 'github' ? 'GitHub Profile' : 'LinkedIn Profile',
        itemType: platform === 'github' ? 'social-github' : 'social-linkedin',
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      
      {/* Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mt-3">
            Whether you are a recruiter, engineering manager, or fellow student developer, I welcome opportunities to connect, collaborate, and discuss entry-level software roles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Placeholders (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span>Contact Coordinates</span>
              </h3>

              <div className="space-y-5">
                
                {/* Working Email Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 group hover:border-electric-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase">Direct Email</span>
                        <a
                          href={`mailto:${profileData.contact.email}`}
                          className="block text-sm sm:text-base font-semibold text-white hover:text-electric-300 transition-colors mt-0.5 break-all"
                        >
                          {profileData.contact.email}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copiedEmail && (
                    <div className="mt-2 text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                    </div>
                  )}
                </div>

                {/* Working Phone Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 group hover:border-violet-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase">Telephone</span>
                      <a
                        href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                        className="block text-sm sm:text-base font-semibold text-white hover:text-violet-300 transition-colors mt-0.5"
                      >
                        {profileData.contact.displayPhone}
                      </a>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Available for recruiter calls & WhatsApp
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                      <MapPin className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {profileData.location.full}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Open to relocation and remote opportunities
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Professional Profiles Placeholders */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase block mb-3">
                  Professional Profiles (Configurable)
                </span>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* GitHub button */}
                  <button
                    type="button"
                    onClick={() => handleSocialClick('github')}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      <span>GitHub</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      Link
                    </span>
                  </button>

                  {/* LinkedIn button */}
                  <button
                    type="button"
                    onClick={() => handleSocialClick('linkedin')}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-electric-400" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      Link
                    </span>
                  </button>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Transparent Delivery (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl backdrop-blur-sm relative">
              
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill out the form below to reach out directly. Client-side validation ensures all required details are captured.
              </p>

              {/* Form Delivery Explanation Notice */}
              <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                <Info className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-slate-200">
                    Transparent Communication Notice:
                  </span>
                  <p>
                    This portfolio runs client-side without an unverified third-party backend. When you submit, it validates your message and provides a one-click launcher to send directly to{' '}
                    <strong className="text-electric-300">{profileData.contact.email}</strong> via your default email software.
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-slate-950/90 border border-electric-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-electric-500/20 text-electric-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Validation Successful!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message from <span className="text-white font-medium">{formData.name}</span> ({formData.email}) is formatted and ready to deliver.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-500 to-violet-600 hover:from-electric-400 hover:to-violet-500 shadow-glow-blue text-sm transition-all"
                    >
                      <span>Open in Email App & Send</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-electric-400 focus:ring-electric-400/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-electric-400 focus:ring-electric-400/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Opportunity at Tech Corp / Academic Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-800 focus:border-electric-400 focus:ring-electric-400/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-800 focus:border-electric-400 focus:ring-electric-400/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-500 to-violet-600 hover:from-electric-400 hover:to-violet-500 shadow-glow-blue transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-electric-400"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare & Send Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Social placeholder modal */}
      <PlaceholderModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        itemType={modalConfig.itemType}
      />
    </section>
  );
};
