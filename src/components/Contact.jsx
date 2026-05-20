import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__top-border"></div>

      {/* Fog Layers */}
      <div className="contact__fog">
        <div className="contact__fog-layer"></div>
        <div className="contact__fog-layer"></div>
        <div className="contact__fog-layer"></div>
      </div>

      {/* Header */}
      <div className="contact__header">
        <div className="contact__section-label">Let's Connect</div>

        <h2 className="contact__title">
          LET&apos;S <br />
          <span>WORK</span> <br />
          TOGETHER
        </h2>

        <p className="contact__subtitle">
          Have a project in mind? Looking for a developer who brings both
          technical precision and design sensibility? Let&apos;s build something
          great.
        </p>
      </div>

      {/* Grid */}
      <div className="contact__grid">
        {/* Left Side */}
        <div className="contact__info">
          <p className="contact__info-intro">
            I’m open to freelance opportunities, collaborations, and full-time
            roles where creativity and engineering meet.
          </p>

          <div className="contact__info-item">
            <div className="contact__info-content">
              <span className="contact__info-label">Email</span>
              <a
                href="mailto:suryaprakash@email.com"
                className="contact__info-value"
              >
                ssuryaprakashs555@email.com
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-content">
              <span className="contact__info-label">GitHub</span>
              <a
                href="https://github.com/Suryaprakash-s-sys"
                className="contact__info-value"
              >
                github.com/Suryaprakash-s-sys
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-content">
              <span className="contact__info-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/surya--prakash-s"
                className="contact__info-value"
              >
                linkedin.com/in/surya--prakash-s
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-content">
              <span className="contact__info-label">Fiverr</span>
              <a
                href="https://www.fiverr.com/craftedbysurya"
                className="contact__info-value"
              >
                fiverr.com/craftedbysurya
              </a>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-content">
              <span className="contact__info-label">Location</span>
              <span className="contact__info-value">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact__form-wrap">
          <div className="contact__form-frame">
            <div className="contact__form-corner"></div>
            <div className="contact__form-corner"></div>
            <div className="contact__form-corner"></div>
            <div className="contact__form-corner"></div>

            <form className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__field-label">Your Name</label>

                  <input
                    type="text"
                    className="contact__input"
                    placeholder="Enter your name"
                  />

                  <span className="contact__field-underline"></span>
                </div>

                <div className="contact__field">
                  <label className="contact__field-label">Email Address</label>

                  <input
                    type="email"
                    className="contact__input"
                    placeholder="your@email.com"
                  />

                  <span className="contact__field-underline"></span>
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__field-label">Message</label>

                <textarea
                  className="contact__textarea"
                  placeholder="Tell me about your project..."
                ></textarea>

                <span className="contact__field-underline"></span>
              </div>

              <button className="contact__submit" type="button">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
