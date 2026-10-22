import React from 'react';
import { 
  Wrench, 
  Code2, 
  FileSpreadsheet, 
  Terminal, 
  PlusCircle, 
  Cpu, 
  Sparkles,
  Info
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const renderSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Python':
      return (
        <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400 group-hover:scale-110 transition-transform">
          <Terminal className="w-5 h-5" />
        </div>
      );
    case 'Code2':
      return (
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
          <Code2 className="w-5 h-5" />
        </div>
      );
    case 'FileSpreadsheet':
      return (
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
          <FileSpreadsheet className="w-5 h-5" />
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
          <Cpu className="w-5 h-5" />
        </div>
      );
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      
      {/* Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Core Competencies & Tooling
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mt-3">
            Foundational programming languages and software tools I actively practice for computer science coursework and software development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono uppercase tracking-wider text-electric-400 font-semibold">
                  // {category.title}
                </span>
                <div className="h-px bg-slate-800 flex-1" />
              </div>
              <p className="text-xs text-slate-400 -mt-2">
                {category.description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-electric-500/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-card backdrop-blur-sm"
                  >
                    {/* Top Row: Icon & Name */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {renderSkillIcon(skill.iconName)}
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-electric-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 capitalize">
                            {skill.category === 'programming' ? 'Core Language' : 'Productivity Tool'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {skill.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 group-hover:border-slate-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Note on Transparency & Scalability */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-electric-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">
                Transparent & Fact-Based Profile
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                No artificial percentage bars or fabricated ratings. Only genuine skills I actively learn and code in.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            Easy to expand in <span className="text-electric-300">src/data/portfolioData.ts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
