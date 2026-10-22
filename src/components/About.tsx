import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Rocket, 
  CheckCircle2, 
  Target, 
  Terminal, 
  FolderGit2,
  Sparkles
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      {/* Subtle Glow Background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Foundations & Passion for Software Development
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="text-slate-200 font-medium">
              I am a dedicated <span className="text-white font-semibold">Computer Science Engineering student</span> currently pursuing my Bachelor of Engineering (B.E.) degree at <span className="text-electric-300">A.J. Institute of Engineering and Technology</span>, with an expected graduation in <span className="text-violet-300 font-semibold">2028</span>.
            </p>

            <p>
              My journey in computing is driven by a genuine curiosity for how software transforms ideas into functional digital tools. I enjoy the process of breaking down complex problems, writing clean code, and understanding the core architectural concepts behind computing systems.
            </p>

            <p>
              Right now, I am actively building my practical abilities in <span className="text-electric-300 font-medium">Python</span> and <span className="text-violet-300 font-medium">C Programming</span>, while leveraging <span className="text-emerald-300 font-medium">Microsoft Excel</span> for structured data modeling and organizational workflows. Through coursework and independent practice, I prioritize understanding foundational computer science principles—focusing on logic, procedural programming, and algorithmic thinking.
            </p>

            <p>
              I believe that real growth as a developer comes from active building and continuous learning. I am currently applying my skills on an academic project called <span className="text-white font-semibold">ScholarMatch</span>, exploring how software can streamline discovery and matching for students.
            </p>

            {/* Core Values / Aspirations Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <Target className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Career Aspiration</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Aiming for entry-level software engineering and IT opportunities to contribute and learn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <BookOpen className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuous Learning</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Committed to expanding my skill set with new technologies, tools, and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Snapshot Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 shadow-xl backdrop-blur-sm relative overflow-hidden">
              
              {/* Card Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-400 via-sky-400 to-violet-500" />

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-electric-400" />
                  <span>Profile Overview</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  Fresher • 2028
                </span>
              </div>

              {/* Snapshot Details List */}
              <div className="space-y-4 text-sm divide-y divide-slate-800/80">
                
                <div className="pt-2 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Degree</span>
                    <p className="text-slate-100 font-medium">{profileData.degree}</p>
                    <p className="text-xs text-slate-300">{profileData.college}</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                    <p className="text-slate-100 font-medium">{profileData.location.full}</p>
                    <p className="text-xs text-slate-300">Open to on-site, hybrid, or remote positions</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Current Core Skills</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-electric-300 text-xs font-mono border border-slate-700">Python</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-violet-300 text-xs font-mono border border-slate-700">C Language</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 text-xs font-mono border border-slate-700">Excel</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <FolderGit2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Academic Project</span>
                    <p className="text-slate-100 font-medium">ScholarMatch</p>
                    <p className="text-xs text-slate-300">Academic Project (In development)</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Rocket className="w-4 h-4 text-pink-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Career Target</span>
                    <p className="text-slate-100 font-medium">Entry-Level Software Development & IT</p>
                    <p className="text-xs text-slate-300">Junior Developer • Graduate Trainee • Engineering Intern</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
