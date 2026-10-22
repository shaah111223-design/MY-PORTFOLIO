import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Code, 
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Ambient Gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-electric-500/15 via-violet-600/15 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Subtle Grid Background Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-electric-500/30 text-electric-300 text-xs font-mono font-medium tracking-wide uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-400 glow-dot" />
              <span>{profileData.roleTitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">
                {profileData.name}
              </span>
              .
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-200 mb-6 leading-snug">
              {profileData.supportingHeadline}
            </h2>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {profileData.shortDescription}
            </p>

            {/* Quick Context Chips */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>AJIET • Class of {profileData.graduationYear}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-electric-400" />
                <span>{profileData.location.full}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/40 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-500 to-violet-600 hover:from-electric-400 hover:to-violet-500 shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-electric-400 text-sm sm:text-base"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-400 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 text-electric-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Small Skill Labels */}
            <div className="pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-slate-400" />
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Core Technical Skills
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-electric-500/30 text-electric-300 text-xs font-medium hover:border-electric-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-electric-400" />
                  Python
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-violet-500/30 text-violet-300 text-xs font-medium hover:border-violet-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  C Programming
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:border-emerald-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Microsoft Excel
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual / Profile Card & Interactive Preview (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-electric-500/30 via-violet-600/30 to-sky-400/20 blur-xl opacity-75" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-electric-400" />
                    <span>student_profile.py</span>
                  </div>
                </div>

                {/* Profile Portrait / Avatar Area */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 p-6 border border-slate-800 flex flex-col items-center justify-center text-center group">
                  
                  {/* Subtle Background Glow behind Avatar */}
                  <div className="absolute w-36 h-36 bg-gradient-to-tr from-electric-500/20 to-violet-500/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Profile Image or Stylized Placeholder */}
                  {profileData.profileImage.customPhotoUrl ? (
                    <img
                      src={profileData.profileImage.customPhotoUrl}
                      alt={profileData.name}
                      className="w-28 h-28 rounded-2xl object-cover border-2 border-electric-400 shadow-glow-blue mb-3 z-10"
                    />
                  ) : (
                    <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border-2 border-electric-400/60 shadow-glow-blue flex flex-col items-center justify-center mb-3 z-10 group-hover:border-electric-400 transition-colors">
                      <div className="text-3xl font-extrabold font-mono text-gradient">
                        {profileData.profileImage.fallbackInitials}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                        CSE Developer
                      </span>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-white z-10">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-electric-400 font-mono mt-0.5 z-10">
                    B.E. Computer Science • 2024–2028
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 z-10">
                    A.J. Institute of Engineering and Technology
                  </p>

                  {/* Photo Replacement Helper Pill */}
                  <div className="mt-3 text-[10px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md z-10 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    <span>Photo placeholder (Replaceable in data config)</span>
                  </div>
                </div>

                {/* Developer Code Snapshot Snippet */}
                <div className="rounded-xl bg-slate-950/90 border border-slate-800/90 p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-400 mb-1"># Developer configuration</div>
                  <div>
                    <span className="text-violet-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-electric-300">"status"</span>: <span className="text-emerald-400">"Undergraduate Engineer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-electric-300">"graduation"</span>: <span className="text-amber-300">2028</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-electric-300">"skills"</span>: [<span className="text-sky-300">"Python"</span>, <span className="text-sky-300">"C"</span>, <span className="text-sky-300">"Excel"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-electric-300">"project"</span>: <span className="text-violet-300">"ScholarMatch"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-electric-300">"looking_for"</span>: <span className="text-emerald-300">"Entry-level IT & Dev"</span>
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Status: Fresher
                  </span>
                  <span className="text-slate-300">Kasargod, Kerala</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
