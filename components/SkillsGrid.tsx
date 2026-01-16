import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-100 font-mono">
          <span className="text-emerald-500 mr-2">02.</span>
          Technical Arsenal
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div 
              key={idx} 
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-all hover:bg-slate-800 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-900 rounded-md text-emerald-400 group-hover:text-emerald-300 transition-colors border border-slate-700">
                  <Icon size={24} />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-slate-200">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400 text-sm font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-2 group-hover:bg-emerald-400 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};