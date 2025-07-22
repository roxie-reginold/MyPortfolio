const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in discussing new opportunities, collaborating on AI projects, 
              or connecting with fellow developers and data scientists. Whether you're looking for 
              a passionate team member or want to chat about the latest in AI and machine learning, 
              I'd love to hear from you!
            </p>
            <div className="contact-links">
              <a 
                href="tel:+16474039422" 
                className="contact-link"
              >
                <span className="link-icon">📞</span>
                +1 (647) 403-9422
              </a>
              <a 
                href="mailto:roxie.reginold@torontomu.ca" 
                className="contact-link"
              >
                <span className="link-icon">📧</span>
                roxie.reginold@torontomu.ca
              </a>
              <a 
                href="https://www.linkedin.com/in/roxie-reginold/" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="link-icon">💼</span>
                LinkedIn
              </a>
              <a 
                href="https://github.com/roxie-reginold" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="link-icon">💻</span>
                GitHub
              </a>
              <a 
                href="https://devpost.com/roxie-reginold" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="link-icon">🏆</span>
                DevPost
              </a>
            </div>
          </div>
          <div className="contact-highlights">
            <div className="highlight-item">
              <h4>🚀 Currently Open To</h4>
              <ul>
                <li>Full-time Data Science roles</li>
                <li>AI/ML research opportunities</li>
                <li>Speaking engagements</li>
                <li>Mentorship collaborations</li>
              </ul>
            </div>
            <div className="highlight-item">
              <h4>🎯 Interests</h4>
              <ul>
                <li>Generative AI applications</li>
                <li>Developer productivity tools</li>
                <li>Community building</li>
                <li>Tech education & mentorship</li>
              </ul>
            </div>
            <div className="highlight-item">
              <h4>📍 Location</h4>
              <p>Toronto, Ontario, Canada</p>
              <p>Open to remote opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;