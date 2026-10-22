import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  Award, 
  BookMarked, 
  FileCheck2, 
  Info,
  Clock
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      
      {/* Decorative ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Engineering Journey
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mt-3">
            Pursuing formal undergraduate engineering education focused on computer science fundamentals, logic, and software development principles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline & Details Card */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          
          {/* Subtle Top Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-sky-400 to-violet-600" />

          {/* Institution & Degree Main Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-electric-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-violet-500/20">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-electric-400 block mb-1">
                  Undergraduate Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationData.degree} in {educationData.field}
                </h3>
                <p className="text-base text-slate-300 mt-1 flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-200">{educationData.institution}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-electric-400" />
                <span>{educationData.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-950/40 border border-violet-500/30 text-xs font-mono text-violet-300">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>{educationData.expectedGraduation}</span>
              </div>
            </div>
          </div>

          {/* Academic Highlight Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            
            {/* Academic Standing & Grades Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Academic Record & CGPA</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  Cumulative Grade Point (CGPA)
                </span>
                <div className="text-sm font-mono text-slate-300 italic">
                  {educationData.cgpaPlaceholder}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  * Maintained as an authentic placeholder until official semester grades are published.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  Affiliation & Recognition
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineering curriculum adhering to university guidelines with structured laboratory and theory credits.
                </p>
              </div>
            </div>

            {/* Coursework & Subjects Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
                <BookMarked className="w-4 h-4 text-electric-400" />
                <span>Foundational Coursework</span>
              </div>

              <ul className="space-y-2 text-xs">
                {educationData.courseworkPlaceholders.map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Activities & Focus Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
                <FileCheck2 className="w-4 h-4 text-violet-400" />
                <span>Academic Focus & Activities</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {educationData.highlightsPlaceholders.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 leading-relaxed"
                  >
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] font-mono text-slate-400 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                All details easily updated in <span className="text-electric-300">educationData</span>.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
