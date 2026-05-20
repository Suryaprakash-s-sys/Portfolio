import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Floating Particles */}
      <div className="footer__particles">
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
        <div className="footer__particle"></div>
      </div>

      {/* Dynamic Divider Line */}
      <div className="footer__divider">
        <div className="footer__divider-line"></div>
      </div>

      {/* Lower Footer Core Control Panel */}
      <div className="footer__lower">
        {/* Brand Logo & Copyrights */}
        <div className="footer__brand-meta">
          <a href="#hero" className="footer__logo">
            <div className="footer__logo-mark"></div>
            <span className="footer__logo-text">Surya Prakash</span>
          </a>
          <div className="footer__copyright">
            © {new Date().getFullYear()} <span>Surya Prakash S</span>. All
            rights reserved.
          </div>
        </div>

        {/* Back To Top Navigation Action */}
        <button
          className="footer__back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top <span className="arrow-indicator">↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
