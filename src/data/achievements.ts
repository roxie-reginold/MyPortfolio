export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Award' | 'Recognition' | 'Event' | 'Certification' | 'Community';
  organization?: string;
  impact?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'google-io-2025',
    title: 'Google I/O 2025 Attendee',
    description: 'Selected to attend Google I/O 2025 in-person at Shoreline Amphitheatre, California',
    date: 'May 2025',
    category: 'Event',
    organization: 'Google',
    impact: 'Gained insights into cutting-edge AI technologies and developer tools'
  },
  {
    id: 'methacks-2022-winner',
    title: 'Best Environmental Hack Winner',
    description: 'Won Best Environmental Hack at MetHacks 2022 for innovative sustainability solution',
    date: 'October 2022',
    category: 'Award',
    organization: 'MetHacks',
    impact: 'Demonstrated ability to create impactful solutions for environmental challenges'
  },
  {
    id: 'rbc-productivity-boost',
    title: '30% Developer Productivity Improvement',
    description: 'Research on AI-assisted coding tools resulted in 30% productivity boost for RBC developers',
    date: 'January 2025',
    category: 'Recognition',
    organization: 'RBC',
    impact: 'Directly improved efficiency of enterprise development teams'
  },
  {
    id: 'gdg-community-growth',
    title: 'Community Growth Leadership',
    description: 'Grew Google Developer Groups TMU community by 1,200+ LinkedIn followers',
    date: 'September 2024 - Present',
    category: 'Community',
    organization: 'Google Developer Groups TMU',
    impact: 'Significantly expanded tech community engagement at TMU'
  },
  {
    id: 'mentorship-impact',
    title: 'Student Mentorship Program',
    description: 'Successfully mentored 25+ co-op students through career development',
    date: 'September 2023 - Present',
    category: 'Community',
    organization: 'Toronto Metropolitan University',
    impact: 'Helped students secure co-op positions and develop professional skills'
  }
];