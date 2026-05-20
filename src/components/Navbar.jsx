import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Updated source-of-truth configuration
  const navItems = [
    { id: "about", label: "About" },
    { id: "qualifications", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }, // Renamed from Work to Projects
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Progress Bar Tracker Calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active Section Scroll Intersection Spy Strategy
      const trackingSections = ["hero", ...navItems.map((item) => item.id)];
      let currentSection = "hero";

      for (const sectionId of trackingSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 160; // Offset cushion for sticky header tracking
          const height = el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-symbol"></div>
          <div className="navbar__logo-text">
            SURYA <span>PRAKASH</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__nav">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__nav-item">
              <a
                href={`#${item.id}`}
                className={`navbar__nav-link ${
                  active === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="navbar__cta"
        >
          <span>Resume</span>
        </a>

        {/* Mobile Hamburger Trigger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="navbar__hamburger-bar"></span>
          <span className="navbar__hamburger-bar"></span>
          <span className="navbar__hamburger-bar"></span>
        </button>

        {/* Top/Bottom Indicator Progress Line */}
        <div
          className="navbar__progress-line"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__mobile-nav">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__mobile-nav-item">
              <a
                href={`#${item.id}`}
                className={`navbar__mobile-nav-link ${
                  active === item.id ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
