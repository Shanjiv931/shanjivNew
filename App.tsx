import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-indigo-500/30">
      {/* Background Texture - Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Background Spotlight */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />

      {/* Navbar Removed */}
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <AIChat />
    </div>
  );
}

export default App;