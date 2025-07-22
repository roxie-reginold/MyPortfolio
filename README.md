# Roxie Reginold's Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite to showcase expertise in Data Science, AI, and Software Development.

## About

This portfolio showcases Roxie Reginold's professional journey as a Data Scientist at RBC, VP Community at Google Developer Groups TMU, and Computer Science student at Toronto Metropolitan University. The site highlights AI-powered development projects, community leadership, and technical achievements including Google I/O 2025 attendance.

## Tech Stack

- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **CSS Modules** - Component-scoped styling
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- macOS development environment (recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/roxie-reginold/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── sections/      # Page sections (Hero, About, Experience, etc.)
│   ├── common/        # Generic components (Button, Card, etc.)
│   └── layout/        # Layout components (Header, Footer)
├── data/              # Static data (experiences, projects, skills)
├── types/             # TypeScript type definitions
├── styles/            # Global styles and themes
└── assets/            # Images, icons, documents
```

## Key Features

- **Responsive Design** - Optimized for all device sizes
- **TypeScript Integration** - Full type safety throughout the application
- **Modern React Patterns** - Hooks, functional components, and best practices
- **Performance Optimized** - Code splitting and lazy loading
- **SEO Friendly** - Meta tags and structured data
- **Accessibility Compliant** - WCAG guidelines followed

## Development Environment

### VS Code Configuration

The project includes VS Code settings for optimal development experience:

- **TypeScript Auto-Closing Tags**: Disabled for better control over JSX/TSX formatting
- **ESLint Integration**: Real-time code quality feedback
- **TypeScript IntelliSense**: Enhanced autocomplete and error detection

### Code Quality

- **ESLint**: Configured with React and TypeScript rules
- **TypeScript**: Strict mode enabled for better type safety
- **Consistent Formatting**: Standardized code style across the project

## Portfolio Sections

- **Hero** - Data Scientist & AI Enthusiast introduction
- **About** - Personal story, TMU education, passion for AI/ML
- **Experience** - RBC roles, peer advising, community leadership
- **Projects** - Featured work including AI research, hackathon wins
- **Skills** - Technical skills (Java, Python, AI/ML) and leadership
- **Contact** - Professional networking opportunities

## Deployment

The portfolio is optimized for deployment on:

- **Netlify** - Recommended for easy deployment and form handling
- **Vercel** - Optimized for React applications
- **GitHub Pages** - Free hosting option
- **Firebase Hosting** - Google's hosting solution

## Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or submit a pull request.

## License

This project is private and proprietary to Roxie Reginold.
