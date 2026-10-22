import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  AlertCircle, 
  Code2, 
  Sparkles, 
  Plus, 
  BookOpen, 
  Compass, 
  Layers, 
  Search 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { PlaceholderModal } from './PlaceholderModal';

export const Projects: React.FC = () => {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    itemType: 'project-demo' | 'project-repo' | 'general';
    customMessage?: string;
  }>({
    isOpen: false,
    title: '',
    itemType: 'project-demo',
  });

  const handleDemoClick = (project: Project) => {
    if (project.isRealDemoConfigured && project.liveDemoUrl) {
      window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalConfig({
        isOpen: true,
        title: `${project.title} - Live Demo`,
        itemType: 'project-demo',
      });
    }
  };

  const handleSourceClick = (project: Project) => {
    if (project.isRealRepoConfigured && project.sourceCodeUrl) {
      window.open(project.sourceCodeUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalConfig({
        isOpen: true,
        title: `${project.title} - Source Code`,
        itemType: 'project-repo',
      });
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      
      {/* Decorative Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-electric-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Project Spotlight
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mt-3">
            Practical application of computer science theory and algorithmic problem solving through structured academic projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-400 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Card: ScholarMatch (8 cols) */}
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="lg:col-span-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-electric-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle Ambient Background Gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-electric-500/10 via-violet-600/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {project.status}
                    </span>
                  </div>

                  {/* Placeholder Badge Indicator */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Editable Placeholder Details
                  </span>
                </div>

                {/* Abstract Interactive Project Illustration / Thumbnail */}
                <div className="relative mb-6 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 overflow-hidden">
                  
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-electric-500 to-violet-600 flex items-center justify-center text-white shadow-glow-blue/40 shadow-lg">
                        <Compass className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {project.title}
                        </h4>
                        <p className="text-xs font-mono text-electric-400 mt-0.5">
                          Academic Discovery & Matching System
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300">
                      <Layers className="w-4 h-4 text-violet-400" />
                      <span>Academic Prototype</span>
                    </div>
                  </div>

                  {/* Visual data matching flowchart aesthetic */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs font-mono text-slate-400">
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-electric-300 block font-semibold text-sm">1. Input</span>
                      Student Criteria
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-violet-300 block font-semibold text-sm">2. Match</span>
                      Matching Engine
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-emerald-300 block font-semibold text-sm">3. Result</span>
                      Curated Awards
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Placeholder Notice Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 mb-6 leading-relaxed">
                  <span className="font-semibold text-amber-400">Note for Recruiters & Reviewers:</span>{' '}
                  Actual functionality, full technology stack, live demonstration, and repository links for ScholarMatch are currently being curated and will be published upon academic review.
                </div>

                {/* Technologies List with Placeholder Tags */}
                <div className="mb-6">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
                    Technologies & Components (Configurable)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-electric-300 border border-slate-700 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Project & View Source Code */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleDemoClick(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-electric-400 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-400"
                >
                  <ExternalLink className="w-4 h-4 text-electric-400" />
                  <span>View Project</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 ml-1">
                    Placeholder
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSourceClick(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-violet-400 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <GithubIcon className="w-4 h-4 text-violet-400" />
                  <span>View Source Code</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 ml-1">
                    Placeholder
                  </span>
                </button>
              </div>

            </div>
          ))}

          {/* Right Column: "Upcoming Projects" & Data Scalability Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-dashed border-slate-800 hover:border-slate-700 p-6 sm:p-7 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 mb-4">
                <Plus className="w-6 h-6 text-electric-400" />
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                Future Projects In Progress
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                As I advance in my Computer Science Engineering curriculum at AJIET, upcoming projects exploring data structures, web applications, and database solutions will be added here.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span className="text-xs font-mono text-electric-400 uppercase block mb-1">
                    Upcoming Idea #1
                  </span>
                  <p className="text-xs font-medium text-slate-200">
                    C/Python Algorithmic Implementations & Benchmarks
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <span className="text-xs font-mono text-violet-400 uppercase block mb-1">
                    Upcoming Idea #2
                  </span>
                  <p className="text-xs font-medium text-slate-200">
                    Data Analysis & Reporting with Excel & Python
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
              Structured to easily add new project objects inside <span className="text-electric-300">src/data/portfolioData.ts</span>.
            </div>
          </div>

        </div>

      </div>

      {/* Placeholder Modal for unconfigured demo/repo links */}
      <PlaceholderModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        itemType={modalConfig.itemType}
        customMessage={modalConfig.customMessage}
      />
    </section>
  );
};
