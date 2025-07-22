import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'ai-coding-research',
    title: 'AI-Assisted Coding Research',
    description: 'Research project evaluating OpenAI and Anthropic LLMs for enterprise development workflows at RBC',
    longDescription: 'Comprehensive research initiative focused on integrating AI-powered coding assistants into enterprise development environments. Evaluated multiple LLM providers and implemented custom prompt engineering strategies.',
    technologies: ['Python', 'OpenAI API', 'Anthropic Claude', 'Data Analysis', 'Jupyter Notebooks'],
    category: 'AI/ML',
    featured: true,
    achievements: ['Boosted developer productivity by 30%', 'Implemented enterprise-grade AI coding solutions'],
    startDate: 'Jan 2025',
    endDate: 'Present'
  },
  {
    id: 'genai-demos',
    title: 'GenAI Proof-of-Concepts',
    description: 'Built multiple GenAI demonstrations and prototypes for internal RBC teams',
    longDescription: 'Developed various generative AI applications showcasing the potential of LLMs in enterprise settings, including code generation, documentation automation, and intelligent data analysis tools.',
    technologies: ['Python', 'OpenAI GPT-4', 'Streamlit', 'FastAPI', 'Docker'],
    category: 'AI/ML',
    featured: true,
    achievements: ['Delivered 5+ working prototypes', 'Demonstrated ROI potential for AI integration'],
    startDate: 'Jan 2025'
  },
  {
    id: 'methacks-2022',
    title: 'MetHacks 2022 - Environmental Solution',
    description: 'Winner of Best Environmental Hack at MetHacks 2022 hackathon',
    longDescription: 'Developed an innovative environmental monitoring solution that tracks and analyzes carbon footprint data to help individuals and organizations make more sustainable choices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Environmental APIs'],
    category: 'Hackathon',
    featured: true,
    achievements: ['Best Environmental Hack Winner', 'Presented to panel of industry judges'],
    startDate: 'Oct 2022',
    endDate: 'Oct 2022'
  },
  {
    id: 'byte-backend-systems',
    title: 'BYTE Backend Architecture',
    description: 'Led development of scalable backend systems for TMU student organization',
    longDescription: 'Architected and implemented robust backend solutions for multiple student-facing applications, focusing on scalability, security, and maintainability.',
    technologies: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL', 'Jenkins', 'Docker'],
    category: 'Web Development',
    featured: false,
    achievements: ['Deployed 3+ production applications', 'Mentored 10+ junior developers'],
    startDate: 'Jan 2024',
    endDate: 'Dec 2024'
  },
  {
    id: 'gdg-community-platform',
    title: 'GDG TMU Community Platform',
    description: 'Built community engagement tools for Google Developer Groups TMU',
    longDescription: 'Developed web platform to facilitate community building, event management, and member engagement for the growing GDG TMU community.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Google APIs'],
    category: 'Web Development',
    featured: false,
    achievements: ['Supported 1,200+ community members', 'Streamlined event management process'],
    startDate: 'Sep 2024'
  }
];