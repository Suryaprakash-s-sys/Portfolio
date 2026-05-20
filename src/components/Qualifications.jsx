import "./Qualifications.css";

function Qualifications() {
  return (
    <section className="qualifications" id="qualifications">
      {/* Header */}
      <div className="qualifications__header">
        <div className="qualifications__section-label">Academic Journey</div>

        <h2 className="qualifications__title">
          <span>EDUCATION & </span> CERTIFICATIONS
        </h2>
      </div>

      {/* Timeline */}
      <div className="qualifications__timeline">
        {/* Glowing Path */}
        <div className="qualifications__path"></div>

        {/* ================================================= */}
        {/* ITEM 1: JAVA FULL STACK CERTIFICATION (RIGHT)     */}
        {/* ================================================= */}
        <div className="qualifications__item qualifications__item--right">
          {/* Node */}
          <div className="qualifications__node">
            <div className="qualifications__node-diamond"></div>
          </div>

          {/* Card */}
          <article className="qualifications__card visible">
            <div className="qualifications__item-grade">Certified</div>

            <div className="qualifications__item-period">
              July 2025 — Jan 2026
            </div>

            <h4 className="qualifications__item-title">
              Java Full Stack Development
            </h4>

            <div className="qualifications__item-institution">
              SoftLogic Systems, Chennai
            </div>
          </article>
        </div>

        {/* ================================================= */}
        {/* ITEM 2: COLLEGE (LEFT)                            */}
        {/* ================================================= */}
        <div className="qualifications__item qualifications__item--left">
          {/* Card */}
          <article className="qualifications__card visible">
            <div className="qualifications__item-grade">8.4 CGPA</div>

            <div className="qualifications__item-period">2021 — 2025</div>

            <h4 className="qualifications__item-title">
              B.E. Electronics & Communication Engineering
            </h4>

            <div className="qualifications__item-institution">
              K.L.N. College of Engineering, Madurai
            </div>
          </article>

          {/* Node */}
          <div className="qualifications__node">
            <div className="qualifications__node-diamond"></div>
          </div>
        </div>

        {/* ================================================= */}
        {/* ITEM 3: HSC (RIGHT)                               */}
        {/* ================================================= */}
        <div className="qualifications__item qualifications__item--right">
          {/* Node */}
          <div className="qualifications__node">
            <div className="qualifications__node-diamond"></div>
          </div>

          {/* Card */}
          <article className="qualifications__card visible">
            <div className="qualifications__item-grade">95%</div>

            <div className="qualifications__item-period">2020 — 2021</div>

            <h4 className="qualifications__item-title">HSC</h4>

            <div className="qualifications__item-institution">
              Shri Ramana Vikass Hr. Sec. School, Sivagangai
            </div>
          </article>
        </div>

        {/* ================================================= */}
        {/* ITEM 4: SSLC (LEFT)                               */}
        {/* ================================================= */}
        <div className="qualifications__item qualifications__item--left">
          {/* Card */}
          <article className="qualifications__card visible">
            <div className="qualifications__item-grade">92%</div>

            <div className="qualifications__item-period">2018 — 2019</div>

            <h4 className="qualifications__item-title">SSLC</h4>

            <div className="qualifications__item-institution">
              Baba Matric School, Manamadurai
            </div>
          </article>

          {/* Node */}
          <div className="qualifications__node">
            <div className="qualifications__node-diamond"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
