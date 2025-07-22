import type { Education } from '../types/Experience';

export const education: Education[] = [
  {
    id: 'tmu-cs-coop',
    degree: 'BSc, Computer Science (Co-op)',
    institution: 'Toronto Metropolitan University (formerly Ryerson)',
    location: 'Toronto, ON',
    startDate: 'September 2021',
    endDate: 'April 2026',
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
    ],
    additionalInfo: [
      'Google Developer Groups on Campus TMU: Vice President of Community',
      'BYTE (Build Your Technical Experience Club): Director of Backend Engineering'
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