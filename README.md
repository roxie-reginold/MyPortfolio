# Roxie Reginold's Personal Portfolio

A modern, responsive personal portfolio website built with React 19 and TypeScript to showcase expertise in Data Science, AI, and Software Development.

## About Roxie

- **Current Role**: Data Scientist @ RBC (Co-op, Jan 2025 - Present)
- **Education**: 4th-year Computer Science Co-op student at Toronto Metropolitan University (Sep 2021 - May 2026)
- **Location**: Toronto, Ontario, Canada
- **GitHub**: https://github.com/roxie-reginold
- **LinkedIn**: https://www.linkedin.com/in/roxie-reginold/

## Professional Focus Areas

- **Data Science & AI**: Experience with OpenAI and Anthropic LLMs, GenAI demos, AI-powered developer tools
- **Software Development**: Java, Python, HTML/CSS/JavaScript, Spring Boot, Maven
- **Machine Learning & AI**: Prompt Engineering, Agentic Systems, "Vibe Coding" patterns
- **DevOps & Cloud**: Jenkins CI/CD, Red Hat OpenShift, GitHub Actions
- **Leadership**: VP Community @ Google Developer Groups TMU, Director of Backend Engineering @ BYTE

## Key Achievements

- 🎯 **Google I/O 2025 Attendee**: Selected to attend in-person at Shoreline Amphitheatre, California
- 📈 **RBC Impact**: Boosted developer productivity by 30% through AI-assisted coding research
- 🌟 **Community Building**: Grew GDSC TMU community by 1,200+ LinkedIn followers
- 🏆 **Awards**: Multiple hackathon wins including MetHacks 2022 Best Environmental Hack
- 👥 **Mentorship**: Guided 25+ co-op students through career development

## Technology Stack

- **Frontend**: React 19, TypeScript 5.8+, CSS3
- **Build Tool**: Vite 7.0+ (fast development and building)
- **Styling**: Modern CSS with custom properties and animations
- **Development**: ESLint 9.30+, TypeScript ESLint
- **Package Manager**: npm (Node.js 18+ required)
- **Version Control**: Git with automated staging workflow

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- 🌙 Smooth animations and transitions
- 📊 Interactive project showcases
- 💼 Professional experience timeline
- 🛠️ Skills visualization
- 📞 Contact integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/roxie-reginold/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

### Development Workflow

The project includes an automated development workflow:

\`\`\`bash
# Quick setup and development (automated via Kiro)
npm create vite@latest . -- --template react-ts
npm install
npm run dev
git add .  # Automated staging for version control
\`\`\`

### Available Scripts

- \`npm run dev\` - Start development server on http://localhost:5173
- \`npm run build\` - Build for production (includes TypeScript compilation)
- \`npm run lint\` - Run ESLint for code quality checks
- \`npm run preview\` - Preview production build locally

## Project Structure

\`\`\`
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   └── sections/        # Hero, About, Experience, Projects, Skills, Contact
├── data/               # Static data (experiences, projects, skills, etc.)
├── types/              # TypeScript type definitions
├── App.tsx             # Main App component
├── App.css             # Global styles
└── main.tsx            # Entry point
\`\`\`

## Customization

### Adding New Projects

Edit \`src/data/projects.ts\` to add new projects:

\`\`\`typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Brief description',
  technologies: ['React', 'TypeScript'],
  category: 'Web Development',
  featured: true,
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...'
}
\`\`\`

### Updating Experience

Edit \`src/data/experiences.ts\` to update work experience and achievements.

### Modifying Skills

Edit \`src/data/skills.ts\` to update technical skills and proficiency levels.

## Deployment

This portfolio can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting directly from your repository
- **Firebase Hosting**: Google's hosting solution

### Deploy to Netlify

1. Build the project: \`npm run build\`
2. Drag and drop the \`dist\` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Performance

- ⚡ Vite for fast development and building
- 🎯 Code splitting and lazy loading
- 📱 Responsive images and optimized assets
- 🚀 Modern CSS with efficient animations

## SEO Features

- 📄 Semantic HTML structure
- 🏷️ Meta tags for social media sharing
- 🔍 Structured data for better search visibility
- 📱 Mobile-friendly design

## Contact

Feel free to reach out for collaborations, opportunities, or just to connect!

- **LinkedIn**: [roxie-reginold](https://www.linkedin.com/in/roxie-reginold/)
- **GitHub**: [roxie-reginold](https://github.com/roxie-reginold)
- **Email**: roxie.reginold@example.com

---

Built with ❤️ by Roxie Reginold | Data Scientist @ RBC | VP Community @ GDG TMU