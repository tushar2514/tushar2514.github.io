import React from 'react';
import { Navbar } from './components/Navbar';
import { TerminalHero } from './components/TerminalHero';
import { SkillsGrid } from './components/SkillsGrid';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectCards } from './components/ProjectCards';
import { Footer } from './components/Footer';
import { SystemMonitor } from './components/SystemMonitor';
import { PROFILE } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Intro Section */}
        <section id="about" className="px-4 mb-10 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-emerald-500 font-mono mb-4 text-lg">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
                {PROFILE.name}.
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight">
                I build scalable cloud infrastructure.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed mb-8">
                {PROFILE.summary}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                 <a href="#projects" className="px-6 py-3 bg-emerald-600 rounded font-medium hover:bg-emerald-500 transition-colors">
                   View Work
                 </a>
                 <a href="#contact" className="px-6 py-3 border border-slate-600 rounded font-medium hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                   Contact Me
                 </a>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative group shrink-0">
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800">
                  <img 
                    src={PROFILE.picture} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* System Status Monitor */}
        <SystemMonitor />

        {/* Interactive Terminal */}
        <section className="px-4 mb-20 flex justify-center">
           <TerminalHero />
        </section>

        <SkillsGrid />
        <ExperienceTimeline />
        <ProjectCards />
      </main>

      <Footer />
      
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;