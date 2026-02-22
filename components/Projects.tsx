import React from 'react';
import TiltCard from './ui/TiltCard';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Work</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            A showcase of digital products that blend aesthetics with functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <TiltCard key={project.id} className="h-full min-h-[400px]">
              <div className="flex flex-col h-full">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden group-hover:shadow-lg transition-all">
                   <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />
                   <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                   />
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-display group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                     {project.githubUrl && (
                       <a 
                         href={project.githubUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                         title="View Source Code"
                       >
                          <Github size={18} />
                       </a>
                     )}
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                       title="View Live Project"
                     >
                        <ExternalLink size={18} />
                     </a>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono font-medium px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;