export interface Skill {
  name: string;
  category: 'Programming Languages' | 'Frameworks & Libraries' | 'Tools & Technologies' | 'AI/ML' | 'Leadership';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}