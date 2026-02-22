import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: y2 }}
            className="mb-6 relative"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ y: y1 }}
            className="font-sans text-xl md:text-3xl text-slate-400 max-w-2xl font-light leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
             <a 
               href="#projects" 
               onClick={(e) => scrollToSection(e, 'projects')}
               className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 cursor-pointer"
             >
                <span className="relative z-10 group-hover:text-indigo-600 transition-colors">View Work</span>
                <div className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
             </a>

             <a 
               href={PERSONAL_INFO.resume}
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center gap-2 cursor-pointer"
             >
                <Download size={20} />
                <span>Resume</span>
             </a>

             <a 
               href="#contact" 
               onClick={(e) => scrollToSection(e, 'contact')}
               className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/20 cursor-pointer"
             >
                Contact Me
             </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;