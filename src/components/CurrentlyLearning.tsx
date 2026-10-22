import React from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  BookOpen, 
  Code2, 
  GitBranch, 
  Database, 
  Globe, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { currentlyLearningData } from '../data/portfolioData';

// Map icon to learning items
const getTopicIcon = (topic: string) => {
  if (topic.includes('Data Structures')) return <Code2 className="w-5 h-5 text-electric-400" />;
  if (topic.includes('Web')) return <Globe className="w-5 h-5 text-sky-400" />;
  if (topic.includes('Git')) return <GitBranch className="w-5 h-5 text-violet-400" />;
  if (topic.includes('Database') || topic.includes('SQL')) return <Database className="w-5 h-5 text-emerald-400" />;
  return <Lightbulb className="w-5 h-5 text-amber-400" />;
};

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      
      {/* Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-10 w-72 h-72 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Currently Learning & Exploring
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mt-3">
            Continuously expanding my engineering horizons. These are learning roadmap areas I am exploring alongside my academic coursework.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Disclaimer / Notice Pill */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-300 max-w-2xl">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-300">Notice:</strong> The items below represent a representative learning roadmap and can be customized to match your current syllabus in{' '}
            <code className="text-electric-300 font-mono">portfolioData.ts</code>.
          </span>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearningData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm group"
            >
              <div>
                {/* Header Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-slate-600 transition-colors">
                    {getTopicIcon(item.topic)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60">
                    {item.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-electric-400 uppercase tracking-wide block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-electric-300 transition-colors">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Editable badge */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Roadmap Item</span>
                <span className="text-slate-400">Placeholder</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
