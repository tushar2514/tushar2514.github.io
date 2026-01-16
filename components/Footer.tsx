import React from 'react';
import { SOCIALS, PROFILE, CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-emerald-500 font-mono mb-4 text-sm">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
          I'm currently open to new opportunities in DevOps and Cloud Engineering. 
          Whether you have a question about my infrastructure code or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center gap-6 mb-16">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.platform}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        {/* Certifications Mini Section */}
        <div className="border-t border-slate-800 pt-12 pb-8">
           <div className="flex items-center justify-center gap-2 mb-6 text-slate-300">
             <Award className="text-emerald-500" />
             <h3 className="text-lg font-bold font-mono">Certified In</h3>
           </div>
           <div className="flex flex-wrap justify-center gap-3">
             {CERTIFICATIONS.map((cert, i) => (
               <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400 border border-slate-700">
                 {cert.name}
               </span>
             ))}
           </div>
        </div>

        <div className="mt-8 text-slate-600 font-mono text-xs">
          <p>Designed & Built by {PROFILE.name}</p>
          <p className="mt-1">All Systems Nominal • {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};