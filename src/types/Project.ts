export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'AI/ML' | 'Web Development' | 'Hackathon' | 'Data Science' | 'Mobile';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  achievements?: string[];
  startDate: string;
  endDate?: string;
}