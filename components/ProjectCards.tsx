import React from 'react';
import { PROJECTS } from '../constants';
import { Folder, Github, ExternalLink } from 'lucide-react';

export const ProjectCards: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-100 font-mono">
          <span className="text-emerald-500 mr-2">04.</span>
          Deployed Systems
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group bg-slate-800/30 rounded-lg p-6 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <Folder size={40} className="text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />
              <div className="flex gap-4 text-slate-400">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {/* Placeholder link icon if needed */}
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  <ExternalLink size={20} />
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-emerald-500/80 bg-emerald-950/30 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};