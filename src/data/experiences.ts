import type { Experience, Education } from '../types/Experience';

export const experiences: Experience[] = [
  {
    id: 'rbc-data-scientist',
    title: 'Data Scientist Intern',
    company: 'Royal Bank of Canada',
    location: 'Toronto, ON',
    startDate: 'Jan 2025',
    endDate: 'Present',
    description: [
      'Researched and evaluated 15+ Agentic AI developer tools that leveraged OpenAI, Anthropic, Google LLMs using SWE-bench tasks, boosting developer productivity by 30% through AI-assisted coding',
      'Collaborated with DevOps and Insurance teams on PoCs to create use cases on AI-enhanced development workflows, ensuring full compliance with RBC production standards and informing strategic tool adoption',
      'Delivered iterative GenAI demos using Python, Crew AI, and LLMs in an Agile lab setting, enabling leadership to validate and refine experimental workflows and expand RBC\'s internal AI capabilities',
      'Created an internal "vibe-coding" patterns and anti-patterns repository, documenting best practices for LLM prompt design and now referenced by engineers to standardize AI-assisted development'
    ],
    skills: ['Python', 'OpenAI API', 'Anthropic Claude', 'Google LLMs', 'Crew AI', 'Data Analysis', 'AI/ML', 'Prompt Engineering', 'SWE-bench'],
    achievements: ['Boosted developer productivity by 30% through AI-assisted coding research', 'Created standardized AI development patterns repository']
  },
  {
    id: 'rbc-software-developer-2024',
    title: 'Software Developer Intern',
    company: 'Royal Bank of Canada',
    location: 'Toronto, ON',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    description: [
      'Refactored end deployed 5 Maven Spring Boot services to the Red Hat OpenShift 4 Platform through Jenkins CI/CD pipelines, increasing system performance by 20% and reducing downtime by 15%',
      'Collaborated with DevOps, Maintenance, and Quality Assurance teams, to implement best practices, contribute to code reviews and ensure adherence to high-quality standards for RESTful API development'
    ],
    skills: ['Java', 'Maven', 'Spring Boot', 'Red Hat OpenShift', 'Jenkins', 'CI/CD', 'RESTful APIs', 'DevOps'],
    achievements: ['Increased system performance by 20% and reduced downtime by 15%', 'Successfully deployed 5 production services']
  },
  {
    id: 'rbc-software-developer-2023',
    title: 'Software Developer Intern',
    company: 'Royal Bank of Canada',
    location: 'Toronto, ON',
    startDate: 'Sep 2023',
    endDate: 'Dec 2023',
    description: [
      'Developed Python scripts with the DevOps team to leverage Jenkins and GitHub API to automate weekly email notifications, reducing unused Git branches in GitHub organizations by over 50%',
      'Delivered an introductory presentation on GitHub Actions for the team, contributing to the team\'s understanding of modern DevOps practices and fostering continuous integration awareness'
    ],
    skills: ['Python', 'Jenkins', 'GitHub API', 'GitHub Actions', 'DevOps', 'Automation'],
    achievements: ['Reduced unused Git branches by over 50%', 'Improved team DevOps knowledge through presentations']
  },
  {
    id: 'equinix-data-analyst',
    title: 'Data Analyst Intern',
    company: 'Equinix',
    location: 'Toronto, ON',
    startDate: 'June 2023',
    endDate: 'Sep 2023',
    description: [
      'Developed dynamic Smartsheet dashboards to track and analyze customer migration progress, providing real-time updates on key metrics and improving decision-making and project efficiency by 30%',
      'Enhanced overall working group efficiency by identifying process gaps in site divestiture, applying innovative Smartsheet solutions to improve scalability across regional teams'
    ],
    skills: ['Smartsheet', 'Data Analysis', 'Dashboard Development', 'Process Improvement', 'Project Management'],
    achievements: ['Improved decision-making and project efficiency by 30%', 'Enhanced working group efficiency through process optimization']
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