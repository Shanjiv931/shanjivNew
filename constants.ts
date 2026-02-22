import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Shanjivkkumar Ramasamy",
  title: "AI/ML Specialist & Full Stack Developer",
  tagline: "Bridging the gap between creative design and intelligent algorithms.",
  bio: "I'm Shanjivkkumar Ramasamy, a Computer Science student at VIT University Vellore (Rank 1, 9.71 CGPA). I specialize in AI/ML and Full-Stack Development, combining technical prowess in Python and React with the creative eye of a three-time National Art Competition winner.",
  email: "shanjivkr931@gmail.com",
  phone: "+260 762586216",
  location: "Lusaka, Zambia / Vellore, India",
  // REPLACE THIS WITH YOUR ACTUAL RESUME URL (Google Drive link or path to file in public folder)
  resume: "https://drive.google.com/file/d/1_Yas_Z28664dz6sqXLOJ3Shm2qj5rwKZ/view?usp=sharing", 
  socials: {
    github: "https://github.com/Shanjiv931",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/shanjivkkumar-ramasamy-8b5547204/"
  }
};

export const EDUCATION_HIGHLIGHTS = [
  "Bachelor of Science: Computer Science at VIT Vellore (Expected 2026)",
  "CGPA: 9.71 (Rank 1 in course for 3 consecutive years)",
  "Recipient of Merit Award (2024, 2025)",
  "NRI Merit Holder for 3 consecutive years"
];

export const ACCOMPLISHMENTS = [
  "Three-time National Art Competition Winner (Zambia), awarded by the Vice President.",
  "Executive Member of Student Council (2025-2026).",
  "Web & Tech Organiser for Yantra 2026."
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "PITWALL.PRO: F1 Strategy Sim",
    description: "A high-fidelity Formula 1 strategy simulation platform featuring real-time 3D telemetry visualization, an AI-powered strategy engine using Google Gemini, Monte Carlo simulations for race outcomes, and a dynamic weather system.",
    tags: ["React", "Three.js", "Gemini API", "Supabase", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "https://pitwall-pro.vercel.app",
    githubUrl: "https://github.com/Shanjiv931/pitwallPro"
  },
  {
    id: 2,
    title: "SLPA Capstone Project",
    description: "A comprehensive developer solution for student learning platform analytics. Built to track and improve student performance.",
    tags: ["React Native", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "https://newslpa.netlify.app/",
    githubUrl: "https://github.com/Shanjiv931/new_slpa"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python & AI/ML", level: 95, category: "backend", icon: "🧠" },
  { name: "TensorFlow / PyTorch", level: 90, category: "backend", icon: "🔥" },
  { name: "React / React Native", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Flutter & Dart", level: 85, category: "frontend", icon: "📱" },
  { name: "Adobe Suite (Ps, Ai)", level: 85, category: "design", icon: "🎨" },
  { name: "Firebase / Supabase", level: 80, category: "backend", icon: "🔥" },
  { name: "C++ / Java", level: 80, category: "backend", icon: "💻" },
  { name: "SQL & MongoDB", level: 75, category: "backend", icon: "🗄️" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Web & Tech Organiser",
    company: "VIT University (Yantra 2026)",
    period: "Jan 2026 - Feb 2026",
    description: "Organised the Web/Tech team, managed event registrations, and maintained digital workflows. Ensured smooth resolution of technical issues during the event."
  },
  {
    id: 2,
    role: "Executive Member",
    company: "Student Council, VIT University",
    period: "2025 - 2026",
    description: "Represented the student body as an Executive Member, facilitating communication between students and administration."
  },
  {
    id: 3,
    role: "Computer Networks Intern",
    company: "Tradekings Ltd, Zambia",
    period: "Jun 2025 - Jul 2025",
    description: "Configured Fortinet switches, managed VLANs for network segmentation, and supported enterprise network monitoring and troubleshooting."
  },
  {
    id: 4,
    role: "Programme Representative",
    company: "VIT University",
    period: "2024 - 2025",
    description: "Served as the primary liaison between students of the program and the faculty, ensuring student concerns were addressed effectively."
  },
  {
    id: 5,
    role: "B.Sc Computer Science",
    company: "VIT Vellore (Rank 1)",
    period: "2026 (Expected)",
    description: "Maintained a 9.71 CGPA. 3-time NRI Merit Holder and Merit Award winner. Specialized in AI/ML."
  }
];