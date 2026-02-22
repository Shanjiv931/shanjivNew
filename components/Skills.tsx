import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative bg-slate-900/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 sticky top-32">
              Technical<br/>Arsenal
              <span className="block text-lg font-sans font-normal text-slate-400 mt-4">
                Tools and technologies I use to bring ideas to life.
              </span>
            </h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-slate-200 text-lg">{skill.name}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-sm">{skill.level}%</span>
                </div>
                
                {/* 3D Progress Bar Container */}
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
                  {/* The Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full relative rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-white/20 skew-x-12 w-full -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
                
                {/* Reflection/Glow below */}
                <motion.div
                   initial={{ width: 0, opacity: 0 }}
                   whileInView={{ width: `${skill.level}%`, opacity: 0.3 }}
                   transition={{ duration: 1, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="h-4 blur-md bg-indigo-500 absolute top-full left-0 rounded-full mt-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;