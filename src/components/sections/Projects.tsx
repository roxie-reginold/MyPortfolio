import { projects } from '../../data/projects';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid featured">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card featured-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
              {project.longDescription && (
                <p className="project-long-description">{project.longDescription}</p>
              )}
              {project.achievements && project.achievements.length > 0 && (
                <div className="project-achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="section-subtitle">Other Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="project-achievements">
                      <ul>
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;