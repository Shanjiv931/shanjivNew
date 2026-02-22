import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Journey So Far</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-slate-900 border-2 border-indigo-500 rounded-full z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                   <div className={`p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors backdrop-blur-sm group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex items-center gap-2 text-indigo-400 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <Briefcase size={16} />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;