import { skillCategories } from '../../data/skills';

const Skills = () => {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return '#ff6b6b';
      case 'Advanced': return '#4ecdc4';
      case 'Intermediate': return '#45b7d1';
      case 'Beginner': return '#96ceb4';
      default: return '#ddd';
    }
  };

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span 
                        className="skill-proficiency"
                        style={{ color: getProficiencyColor(skill.proficiency) }}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: skill.proficiency === 'Expert' ? '100%' : 
                                 skill.proficiency === 'Advanced' ? '80%' :
                                 skill.proficiency === 'Intermediate' ? '60%' : '40%',
                          backgroundColor: getProficiencyColor(skill.proficiency)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;