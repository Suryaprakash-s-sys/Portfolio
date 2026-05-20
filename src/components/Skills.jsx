import "./Skills.css";

function Skills() {
  const skillData = [
    {
      category: "Frontend",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "REST API",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Servlets",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg",
        },
        {
          name: "JSP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        },
      ],
    },
    {
      category: "Toolset",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Agile",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <div className="skills__section-label">Skills</div>

        <h2 className="skills__title">
          TECH <span>STACK</span>
        </h2>

        <p className="skills__subtitle">
          A refined collection of modern technologies mastered through
          consistent experimentation, production builds, and relentless
          improvement.
        </p>
      </div>

      <div className="skills__grid">
        {skillData.map((group, index) => (
          <div key={index} className="skills__category-card">
            {/* Group Title Area */}
            <div className="skills__category-header">
              <div className="skills__category-icon-frame">
                <span>&lt;/&gt;</span>
              </div>
              <div className="skills__category-info">
                <h3 className="skills__category-title">{group.category}</h3>
                <span className="skills__category-counter">{group.count}</span>
              </div>
            </div>

            {/* Sub-grid containing pristine custom branding color icons */}
            <div className="skills__badges-grid">
              {group.skills.map((skill, idx) => (
                <div className="skills__badge" key={idx}>
                  <div className="skills__badge-icon-wrap">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} asset logo`}
                      className="skills__badge-icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="skills__badge-name" title={skill.name}>
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
