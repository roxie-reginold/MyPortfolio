import { experiences } from '../../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <div className="experience-date">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="achievement">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="experience-skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;