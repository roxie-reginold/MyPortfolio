const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 4th-year Computer Science Co-op student at Toronto Metropolitan University, 
              currently working as a Data Scientist at RBC where I'm researching AI-assisted coding tools 
              and their impact on developer productivity.
            </p>
            <p>
              My journey in tech has been driven by a passion for artificial intelligence, community building, 
              and mentorship. As VP Community at Google Developer Groups TMU, I've had the privilege of 
              growing our community to over 1,200 LinkedIn followers and organizing impactful tech events.
            </p>
            <p>
              I was selected to attend Google I/O 2025 in-person at Shoreline Amphitheatre, California, 
              which was an incredible experience that deepened my understanding of cutting-edge AI technologies 
              and their applications in software development.
            </p>
            <p>
              When I'm not coding or building communities, I enjoy mentoring fellow students through their 
              co-op journeys and exploring the latest developments in generative AI and prompt engineering.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎯 Current Focus</h3>
              <p>AI-assisted development, GenAI applications, and enterprise AI integration</p>
            </div>
            <div className="highlight-card">
              <h3>🌟 Google I/O 2025</h3>
              <p>Selected attendee at Shoreline Amphitheatre, California</p>
            </div>
            <div className="highlight-card">
              <h3>👥 Community Impact</h3>
              <p>Leading 1,200+ member tech community at TMU</p>
            </div>
            <div className="highlight-card">
              <h3>🎓 Mentorship</h3>
              <p>Guided 25+ co-op students through career development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;