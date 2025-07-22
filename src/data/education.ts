import type { Education } from '../types/Experience';

export const education: Education[] = [
  {
    id: 'tmu-cs-coop',
    degree: 'Bachelor of Science in Computer Science (Co-op Program)',
    institution: 'Toronto Metropolitan University',
    location: 'Toronto, ON',
    startDate: 'September 2021',
    endDate: 'May 2026',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Machine Learning and AI',
      'Database Systems',
      'Software Engineering',
      'Web Development',
      'Computer Networks',
      'Operating Systems',
      'Software Architecture',
      'Data Mining',
      'Human-Computer Interaction'
    ]
  }
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 'openai-prompt-engineering',
    name: 'Prompt Engineering for AI Applications',
    issuer: 'Professional Development',
    date: 'January 2025',
    skills: ['Prompt Engineering', 'OpenAI API', 'AI Applications']
  },
  {
    id: 'google-cloud-ai',
    name: 'Google Cloud AI Fundamentals',
    issuer: 'Google Cloud',
    date: 'December 2024',
    skills: ['Google Cloud', 'AI/ML', 'Cloud Computing']
  },
  {
    id: 'jenkins-cicd',
    name: 'Jenkins CI/CD Pipeline Development',
    issuer: 'Professional Training',
    date: 'November 2024',
    skills: ['Jenkins', 'CI/CD', 'DevOps', 'Automation']
  }
];