import { useState, useEffect } from "react";

/* =========================
   GLOBAL STYLES
========================= */
import "./App.css";

/* =========================
   COMPONENT STYLES
========================= */
import "./components/About.css";
import "./components/Contact.css";
import "./components/Cursor.css";
import "./components/Experience.css";
import "./components/Footer.css";
import "./components/GrainOverlay.css";
import "./components/Hero.css";
import "./components/Loader.css";
import "./components/Navbar.css";
import "./components/ProgressBar.css";
import "./components/Projects.css";
import "./components/Skills.css";
import "./components/Qualifications.css";

/* =========================
   COMPONENTS
========================= */
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ProgressBar from "./components/ProgressBar";
import GrainOverlay from "./components/GrainOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* =========================
   APP COMPONENT
========================= */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // lock scroll during loader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);

      // restore scroll
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Loader Screen */}
      {isLoading && <Loader />}

      {/* Main App */}
      <div className={`app ${isLoading ? "app-hidden" : "app-visible"}`}>
        <Cursor />
        <ProgressBar />
        <GrainOverlay />

        <Navbar />
        <Hero />
        <About />
        <Qualifications />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
