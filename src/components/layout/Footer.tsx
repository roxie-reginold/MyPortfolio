const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Roxie Reginold</h3>
            <p>Data Scientist @ RBC | VP Community @ GDG TMU</p>
            <p>Computer Science Student @ Toronto Metropolitan University</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/roxie-reginold/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/roxie-reginold" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a 
                href="mailto:roxie.reginold@torontomu.ca"
                className="social-link"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Roxie Reginold. Built with React & TypeScript.</p>
          <p>Google I/O 2025 Attendee | RBC Data Scientist | GDG TMU VP Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;