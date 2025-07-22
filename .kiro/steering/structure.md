# Roxie's React Portfolio Project Structure

## Current Organization
```
.
├── .kiro/              # Kiro configuration and steering
│   ├── hooks/          # Agent hooks
│   └── steering/       # Steering documents
```

## Recommended Structure for Roxie's Portfolio
```
src/
├── components/         # Reusable UI components
│   ├── common/        # Generic components (Button, Card, SkillBadge, etc.)
│   ├── layout/        # Layout components (Header, Footer, Navigation)
│   └── sections/      # Page section components
│       ├── Hero.tsx           # Data Scientist introduction
│       ├── About.tsx          # Personal story & TMU education
│       ├── Experience.tsx     # RBC roles & work history
│       ├── Projects.tsx       # Featured projects & hackathons
│       ├── Skills.tsx         # Technical & leadership skills
│       ├── Community.tsx      # GDG TMU & volunteer work
│       ├── Education.tsx      # TMU courses & certifications
│       └── Contact.tsx        # Professional networking
├── pages/             # Main page components (if using routing)
│   ├── Home.tsx       # Main portfolio page
│   ├── ProjectDetail.tsx  # Individual project deep-dives
│   └── Resume.tsx     # Detailed resume view
├── hooks/             # Custom React hooks
│   ├── useScrollAnimation.ts  # Smooth scroll effects
│   ├── useTheme.ts           # Dark/light mode toggle
│   └── useAnalytics.ts       # Portfolio analytics
├── utils/             # Utility functions and helpers
│   ├── dateFormatter.ts      # Format experience dates
│   ├── skillsData.ts         # Technical skills organization
│   └── constants.ts          # App-wide constants
├── types/             # TypeScript type definitions
│   ├── Experience.ts         # Work experience types
│   ├── Project.ts           # Project data types
│   ├── Skill.ts             # Skills categorization
│   └── Education.ts         # Academic information
├── data/              # Static data (Roxie's information)
│   ├── experiences.ts        # RBC roles, peer advising, etc.
│   ├── projects.ts          # Hackathons, AI projects, etc.
│   ├── skills.ts            # Java, Python, AI/ML, Leadership
│   ├── education.ts         # TMU courses & certifications
│   ├── community.ts         # GDG TMU, BYTE involvement
│   └── achievements.ts      # Google I/O, awards, etc.
├── styles/            # Global styles and themes
│   ├── globals.css          # Global styles
│   ├── variables.css        # CSS custom properties
│   └── themes.css           # Light/dark theme definitions
├── assets/            # Images, icons, documents
│   ├── images/        # Professional photos, project screenshots
│   │   ├── profile/         # Professional headshots
│   │   ├── projects/        # Project screenshots & demos
│   │   ├── companies/       # RBC, TMU, GDG logos
│   │   └── events/          # Google I/O, hackathon photos
│   ├── icons/         # SVG icons for skills, social links
│   │   ├── tech/           # Java, Python, React icons
│   │   ├── social/         # LinkedIn, GitHub icons
│   │   └── ui/             # General UI icons
│   └── documents/     # Resume PDF, certificates
│       ├── resume.pdf      # Latest resume
│       └── certificates/   # LinkedIn Learning certificates
└── App.tsx            # Main App component

public/                # Static assets served directly
├── favicon.ico        # Personal brand favicon
├── resume.pdf         # Downloadable resume (Roxie's latest)
├── og-image.jpg       # LinkedIn/social media preview
└── robots.txt         # SEO optimization

tests/                 # Test files (following RBC standards)
├── components/        # Component tests
├── utils/            # Utility function tests
└── integration/      # End-to-end tests
```

## Roxie-Specific Component Organization

### Hero Section Components
- **DataScientistIntro**: Main headline with current role
- **AnimatedTitle**: Typewriter effect for multiple roles
- **CTAButtons**: Resume download, LinkedIn, GitHub links

### Experience Section Components
- **ExperienceCard**: Individual role cards (RBC, peer advising)
- **SkillsList**: Technical skills with proficiency levels
- **AchievementBadge**: Highlight key accomplishments

### Projects Section Components
- **ProjectCard**: Hackathon wins, AI projects
- **TechStack**: Technology badges for each project
- **LiveDemo**: Links to GitHub repos and live demos
- **ProjectFilter**: Filter by category (AI/ML, Web Dev, etc.)

### Community Section Components
- **LeadershipRole**: GDG TMU, BYTE positions
- **EventHighlight**: Google I/O 2025 experience
- **CommunityImpact**: Growth metrics and achievements

## File Naming Conventions (RBC-Aligned)
- **Components**: PascalCase (e.g., `ExperienceCard.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useScrollAnimation.ts`)
- **Utilities**: camelCase (e.g., `formatExperienceDate.ts`)
- **Types**: PascalCase with descriptive names (e.g., `RBCExperience.ts`)
- **Data files**: camelCase (e.g., `rbcExperiences.ts`)
- **Styles**: Match component names (e.g., `ExperienceCard.module.css`)

## Data Management Strategy
- **Structured Data**: Organize Roxie's information in typed objects
- **Easy Updates**: Separate content from components for quick updates
- **Version Control**: Track changes to experience and projects
- **SEO Optimization**: Structured data for better search visibility

## Asset Organization for Professional Portfolio
- **High-Quality Images**: Professional photos, project screenshots
- **Optimized Formats**: WebP for images, SVG for icons
- **Consistent Branding**: Maintain visual consistency across all assets
- **Accessibility**: Alt text for all images, proper contrast ratios
- **Performance**: Lazy loading, responsive images, optimized file sizes