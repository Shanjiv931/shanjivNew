import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-slate-900 pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
          Let's Work Together
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Have a project in mind? I'm available for opportunities in AI/ML and Full Stack Development.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          >
            <Mail size={20} />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300">
               <Phone size={18} className="text-indigo-400" />
               <span>{PERSONAL_INFO.phone}</span>
             </div>
             <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300">
               <MapPin size={18} className="text-indigo-400" />
               <span>{PERSONAL_INFO.location}</span>
             </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Github, link: PERSONAL_INFO.socials.github },
              { icon: Linkedin, link: PERSONAL_INFO.socials.linkedin },
              // Only show Twitter if it exists and isn't empty
              ...(PERSONAL_INFO.socials.twitter ? [{ icon: Twitter, link: PERSONAL_INFO.socials.twitter }] : [])
            ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                    <social.icon size={32} />
                </a>
            ))}
        </div>

        <div className="pt-8 border-t border-white/5 text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;