import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Roxie Reginold</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typewriter">Data Scientist @ RBC</span>
          </div>
          <p className="hero-description">
            VP Community @ Google Developer Groups TMU | Computer Science @ TMU | Google I/O '25 Attendee
          </p>
          <p className="hero-bio">
            Passionate about AI-powered development, community building, and leveraging technology for positive impact. 
            Currently researching AI-assisted coding tools at RBC while leading tech communities and mentoring the next generation of developers.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>Professional Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;