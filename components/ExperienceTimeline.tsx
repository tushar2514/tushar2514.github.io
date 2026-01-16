import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-slate-100 font-mono">
          <span className="text-emerald-500 mr-2">03.</span>
          Execution History
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6"></div>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-emerald-500 group-hover:scale-125 transition-transform"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100 flex items-center">
                {exp.role} 
                <span className="text-emerald-500 mx-2">@</span> 
                <span className="text-emerald-400">{exp.company}</span>
              </h3>
              <div className="flex items-center text-xs font-mono text-slate-500 mt-1 sm:mt-0">
                <Calendar size={14} className="mr-1" />
                {exp.period}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-slate-400 mb-4 font-mono">
              <MapPin size={14} className="mr-1" />
              {exp.location}
            </div>

            <ul className="space-y-2 mb-6">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                  <span className="mr-2 mt-1.5 min-w-[6px] h-1.5 bg-slate-600 rounded-full"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education Section embedded in timeline */}
        <div className="relative pl-8 md:pl-12 pt-8">
           <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full bg-slate-900 border-2 border-blue-500"></span>
           <div className="flex items-center mb-4 text-blue-400">
             <GraduationCap size={20} className="mr-2" />
             <h3 className="text-lg font-bold font-mono">Education Audit</h3>
           </div>
           {EDUCATION.map((edu, idx) => (
             <div key={idx} className="bg-slate-900/50 p-4 rounded border border-slate-800">
                <h4 className="text-slate-200 font-bold">{edu.institution}</h4>
                <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                <p className="text-slate-500 text-xs font-mono mt-2">{edu.period}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};