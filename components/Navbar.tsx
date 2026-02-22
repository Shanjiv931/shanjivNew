import React from 'react';
import { Home, Folder, User, Mail, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'projects', icon: Folder, label: 'Work' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'experience', icon: User, label: 'About' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-1 px-2 py-2 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative p-3 rounded-full hover:bg-white/10 transition-colors"
            title={item.label}
          >
            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            <span className="sr-only">{item.label}</span>
            
            {/* Tooltip */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
                {item.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;