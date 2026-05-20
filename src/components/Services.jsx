import "./Services.css";
import {
  FaCode,
  FaLaptopCode,
  FaReact,
  FaServer,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      number: "01",
      icon: <FaCode className="services__card-icon" />,
      title: "Custom Website Development",
      description:
        "End-to-end website development crafted with performance, scalability, and immersive visual storytelling.",
      features: [
        "Modern UI architecture",
        "Responsive layouts",
        "Clean reusable code",
      ],
    },
    {
      number: "02",
      icon: <FaLaptopCode className="services__card-icon" />,
      title: "Responsive Frontend Engineering",
      description:
        "Pixel-perfect interfaces optimized for every screen size with cinematic interactions and smooth motion systems.",
      features: [
        "Mobile-first systems",
        "Interactive animations",
        "Accessibility-focused UI",
      ],
    },
    {
      number: "03",
      icon: <FaReact className="services__card-icon" />,
      title: "React Application Development",
      description:
        "High-performance React applications with scalable component architecture and optimized rendering.",
      features: ["Reusable components", "State management", "SPA optimization"],
    },
    {
      number: "04",
      icon: <FaServer className="services__card-icon" />,
      title: "Java Backend Development",
      description:
        "Robust backend systems using Spring Boot, REST APIs, MySQL, and secure server-side architecture.",
      features: [
        "RESTful APIs",
        "Spring Boot services",
        "Database integration",
      ],
    },
    {
      number: "05",
      icon: <FaPaintBrush className="services__card-icon" />,
      title: "UI-Focused Experiences",
      description:
        "Immersive interfaces blending cinematic aesthetics with intuitive interaction and strong brand identity.",
      features: [
        "Creative visual systems",
        "Animation design",
        "Modern portfolio styling",
      ],
    },
    {
      number: "06",
      icon: <FaRocket className="services__card-icon" />,
      title: "Performance Optimization",
      description:
        "Speed optimization, SEO improvements, and technical refinement for better user engagement.",
      features: ["Core Web Vitals", "SEO enhancement", "Performance audits"],
    },
  ];

  return (
    <section className="services" id="services">
      {/* Header */}
      <div className="services__header">
        <div className="services__section-label">SHINOBI ABILITIES</div>

        <h2 className="services__title">
          SERVICES <span>I OFFER</span>
        </h2>

        <p className="services__intro">
          Specialized digital solutions crafted with precision, cinematic
          aesthetics, and scalable engineering principles.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services__grid">
        {services.map((service, index) => (
          <div className="services__card visible" key={index}>
            <div className="services__card-number">{service.number}</div>

            <div className="services__card-icon-wrap">{service.icon}</div>

            <h3 className="services__card-title">{service.title}</h3>

            <p className="services__card-description">{service.description}</p>

            <ul className="services__card-features">
              {service.features.map((feature, i) => (
                <li className="services__card-feature" key={i}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
