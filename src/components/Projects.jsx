import "./Projects.css";
import { useEffect, useMemo, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaLaptopCode,
  FaUniversity,
  FaTheaterMasks,
} from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCards, setVisibleCards] = useState([]);

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Brain Tumor Detection System",
        category: "AI / Deep Learning",
        filter: "AI",
        featured: true,
        status: "Completed",
        icon: <FaBrain className="project-card-icon" />,
        description:
          "An AI-powered medical imaging system combining EfficientNet-B3 for high-accuracy image classification with YOLOv8 for advanced tumor localization.",
        tech: ["Python", "TensorFlow", "EfficientNet-B3", "YOLOv8", "OpenCV"],
        github:
          "https://github.com/Suryaprakash-s-sys/Brain-Tumor-Detection-using-EfficientNet-B3-and-YOLOv8",
        live: "#",
      },
      {
        id: 2,
        title: "Interview Assesment Tracker",
        category: "Intelligent Systems / Analytics",
        filter: "Backend",
        featured: false,
        status: "Completed",
        icon: <FaLaptopCode className="project-card-icon" />,
        description:
          "A smart tracking platform designed to manage attendance, activity logs, and analytical insights efficiently with streamlined workflows.",
        tech: ["React", "Vite", "JavaScript", "CSS"],
        github: "https://github.com/Suryaprakash-s-sys/ia-tracker",
        live: "#",
      },
      {
        id: 3,
        title: "College Event Management",
        category: "Full-Stack Web App",
        filter: "Backend",
        featured: false,
        status: "Completed",
        icon: <FaUniversity className="project-card-icon" />,
        description:
          "A full-stack web application simplifying digital campus coordination, registrations, participation tracking, and administration workflows.",
        tech: ["Java", "Servlet", "JSP", "MySQL", "Tomcat"],
        github:
          "https://github.com/Suryaprakash-s-sys/college-event-management-system",
        live: "#",
      },
      {
        id: 4,
        title: "Cultural Artist Booking",
        category: "Enterprise Web App",
        filter: "Backend",
        featured: false,
        status: "Completed",
        icon: <FaTheaterMasks className="project-card-icon" />,
        description:
          "A scalable full-stack application structuring talent bookings, event requests, workflows, and relational database operations.",
        tech: ["Java", "Spring Boot", "MySQL", "Bootstrap", "REST API"],
        github:
          "https://github.com/Suryaprakash-s-sys/cultural-artist-book-springboot",
        live: "#",
      },
    ],
    [],
  );

  const filters = ["All", "AI", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(filteredProjects.map((project) => project.id));
    }, 150);

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <section className="projects" id="projects">
      {/* Header */}
      <div className="projects__header">
        <h2 className="projects__title">PROJECTS</h2>
      </div>

      {/* Filters */}
      <div className="projects__filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`projects__filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`projects__card ${visibleCards.includes(project.id) ? "visible" : ""}`}
          >
            {/* Visual Top Preview Box with Dynamic Icon */}
            <div className="projects__card-image">
              <div className="project-icon-frame">{project.icon}</div>
            </div>

            {/* Content Body */}
            <div className="projects__card-body">
              <div className="projects__card-title-row">
                <h3 className="projects__card-title">{project.title}</h3>
                <span className="projects__card-tag">
                  {project.filter.toUpperCase()}
                </span>
              </div>

              <p className="projects__card-description">
                {project.description}
              </p>

              {/* Tech Stack Bubbles */}
              <div className="projects__card-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="projects__card-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="projects__card-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__card-link"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__card-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
