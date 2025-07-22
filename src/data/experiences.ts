import type { Experience, Education } from '../types/Experience';

export const experiences: Experience[] = [
  {
    id: 'rbc-data-scientist',
    title: 'Data Scientist',
    company: 'RBC (Royal Bank of Canada)',
    location: 'Toronto, ON',
    startDate: 'Jan 2025',
    endDate: 'Present',
    description: [
      'Conducting research on AI-assisted coding tools to boost developer productivity',
      'Evaluating OpenAI and Anthropic LLMs for enterprise development workflows',
      'Building GenAI demos and proof-of-concepts for internal teams',
      'Implementing prompt engineering strategies for agentic systems'
    ],
    skills: ['Python', 'OpenAI API', 'Anthropic Claude', 'Data Analysis', 'AI/ML', 'Prompt Engineering'],
    achievements: ['Boosted developer productivity by 30% through AI-assisted coding research']
  },
  {
    id: 'tmu-peer-advisor',
    title: 'Peer Advisor',
    company: 'Toronto Metropolitan University',
    location: 'Toronto, ON',
    startDate: 'Sep 2023',
    endDate: 'Present',
    description: [
      'Mentoring 25+ co-op students through career development and job search processes',
      'Providing guidance on technical interview preparation and resume optimization',
      'Facilitating workshops on professional development and industry trends'
    ],
    skills: ['Leadership', 'Mentorship', 'Career Counseling', 'Public Speaking'],
    achievements: ['Guided 25+ co-op students through successful career transitions']
  },
  {
    id: 'gdg-vp-community',
    title: 'VP Community',
    company: 'Google Developer Groups TMU',
    location: 'Toronto, ON',
    startDate: 'Sep 2024',
    endDate: 'Present',
    description: [
      'Leading community building initiatives for 1,200+ LinkedIn followers',
      'Organizing tech talks, workshops, and networking events',
      'Managing social media presence and content strategy',
      'Coordinating with Google Developer Relations team'
    ],
    skills: ['Community Management', 'Event Planning', 'Social Media', 'Leadership'],
    achievements: ['Grew GDSC TMU community by 1,200+ LinkedIn followers']
  },
  {
    id: 'byte-backend-director',
    title: 'Director of Backend Engineering',
    company: 'BYTE (TMU Student Organization)',
    location: 'Toronto, ON',
    startDate: 'Jan 2024',
    endDate: 'Dec 2024',
    description: [
      'Led backend development team for student organization projects',
      'Architected scalable solutions using Java Spring Boot and Maven',
      'Implemented CI/CD pipelines using Jenkins and GitHub Actions',
      'Mentored junior developers on best practices and code quality'
    ],
    skills: ['Java', 'Spring Boot', 'Maven', 'Jenkins', 'GitHub Actions', 'Team Leadership'],
    achievements: ['Successfully delivered multiple full-stack applications for student community']
  }
];

export const education: Education[] = [
  {
    id: 'tmu-cs',
    degree: 'Bachelor of Science in Computer Science (Co-op)',
    institution: 'Toronto Metropolitan University',
    location: 'Toronto, ON',
    startDate: 'Sep 2021',
    endDate: 'May 2026',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Machine Learning',
      'Database Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Web Development'
    ]
  }
];