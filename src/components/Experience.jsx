import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Header */}
      <div className="experience__header">
        <div className="experience__section-label">
          Chapter 04 — Field Experience
        </div>

        <h2 className="experience__title">
          EXPERI
          <br />
          <span>ENCE</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="experience__timeline">
        <div className="experience__path"></div>

        {/* Item 1 */}
        <div className="experience__item experience__item--left">
          <div className="experience__card visible">
            <div className="experience__connector"></div>

            <div className="experience__card-period">
              2024 — 6 Months Internship
            </div>

            <h3 className="experience__card-role">
              Java Full Stack Developer Intern
            </h3>

            <div className="experience__card-company">SoftLogic Systems</div>

            <p className="experience__card-description">
              Built responsive web applications with React and Spring Boot.
              Worked across frontend and backend systems end-to-end while
              integrating REST APIs and live data sources.
            </p>

            <div className="experience__tags">
              <span className="experience__tag">React</span>
              <span className="experience__tag">Spring Boot</span>
              <span className="experience__tag">REST APIs</span>
              <span className="experience__tag">MySQL</span>
            </div>
          </div>

          <div className="experience__node">
            <div className="experience__node-diamond"></div>
          </div>

          <div className="experience__spacer"></div>
        </div>

        {/* Item 2 */}
        <div className="experience__item experience__item--right">
          <div className="experience__spacer"></div>

          <div className="experience__node">
            <div className="experience__node-diamond"></div>
          </div>

          <div className="experience__card visible">
            <div className="experience__connector"></div>

            <div className="experience__card-period">
              2025 — Research Publication
            </div>

            <h3 className="experience__card-role">
              Brain Tumor Detection Research
            </h3>

            <div className="experience__card-company">
              IJSRED / ICIECST-2025
            </div>

            <p className="experience__card-description">
              Published research focused on intelligent brain tumor detection
              systems using machine learning concepts and image analysis
              techniques.
            </p>

            <div className="experience__tags">
              <span className="experience__tag">Machine Learning</span>
              <span className="experience__tag">Image Processing</span>
              <span className="experience__tag">Research</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="experience__item experience__item--left">
          <div className="experience__card visible">
            <div className="experience__connector"></div>

            <div className="experience__card-period">2025 — Upcoming</div>

            <h3 className="experience__card-role">Software Engineer</h3>

            <div className="experience__card-company">
              Tata Consultancy Services (TCS)
            </div>

            <p className="experience__card-description">
              Joining TCS under the Ninja Track as a Software Engineer,
              contributing to scalable enterprise solutions and modern software
              development workflows.
            </p>

            <div className="experience__tags">
              <span className="experience__tag">Java</span>
              <span className="experience__tag">Enterprise</span>
              <span className="experience__tag">Full Stack</span>
            </div>
          </div>

          <div className="experience__node">
            <div className="experience__node-diamond"></div>
          </div>

          <div className="experience__spacer"></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
