import type { SkillCategory } from '../types/Skill';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', category: 'Programming Languages', proficiency: 'Advanced' },
      { name: 'Python', category: 'Programming Languages', proficiency: 'Advanced' },
      { name: 'JavaScript/TypeScript', category: 'Programming Languages', proficiency: 'Advanced' },
      { name: 'HTML/CSS', category: 'Programming Languages', proficiency: 'Advanced' },
      { name: 'SQL', category: 'Programming Languages', proficiency: 'Intermediate' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', category: 'Frameworks & Libraries', proficiency: 'Advanced' },
      { name: 'Spring Boot', category: 'Frameworks & Libraries', proficiency: 'Advanced' },
      { name: 'Node.js', category: 'Frameworks & Libraries', proficiency: 'Intermediate' },
      { name: 'Express.js', category: 'Frameworks & Libraries', proficiency: 'Intermediate' }
    ]
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'OpenAI API', category: 'AI/ML', proficiency: 'Advanced' },
      { name: 'Anthropic Claude', category: 'AI/ML', proficiency: 'Advanced' },
      { name: 'Prompt Engineering', category: 'AI/ML', proficiency: 'Expert' },
      { name: 'Machine Learning', category: 'AI/ML', proficiency: 'Intermediate' },
      { name: 'Data Analysis', category: 'AI/ML', proficiency: 'Advanced' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', category: 'Tools & Technologies', proficiency: 'Advanced' },
      { name: 'Jenkins', category: 'Tools & Technologies', proficiency: 'Intermediate' },
      { name: 'Maven', category: 'Tools & Technologies', proficiency: 'Intermediate' },
      { name: 'Docker', category: 'Tools & Technologies', proficiency: 'Intermediate' },
      { name: 'Red Hat OpenShift', category: 'Tools & Technologies', proficiency: 'Beginner' }
    ]
  },
  {
    category: 'Leadership',
    skills: [
      { name: 'Team Leadership', category: 'Leadership', proficiency: 'Advanced' },
      { name: 'Community Building', category: 'Leadership', proficiency: 'Expert' },
      { name: 'Mentorship', category: 'Leadership', proficiency: 'Advanced' },
      { name: 'Public Speaking', category: 'Leadership', proficiency: 'Advanced' },
      { name: 'Event Planning', category: 'Leadership', proficiency: 'Intermediate' }
    ]
  }
];