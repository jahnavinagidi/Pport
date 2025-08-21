// src/Experience.tsx
import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const jobs = [
    {
      role: "Java Full Stack Developer",
      company: "T-Mobile",
      duration: "Feb 2025 – Present",
      bullets: [
        "Built responsive UI with React.js; improved render performance ~30%.",
        "Developed scalable Spring Boot services; secured APIs (JWT/RBAC).",
        "Deployed cloud-native apps on AWS (EC2, Lambda, API Gateway, S3).",
      ],
      tags: ["Java 17", "Spring Boot", "React", "AWS", "Microservices"],
    },
    {
      role: "Java Full Stack Developer",
      company: "State of New Jersey",
      duration: "Jun 2024 – Dec 2024",
      bullets: [
        "Delivered Spring Boot microservices on AWS EC2 with clean MVC layers.",
        "Enhanced UX using React Hooks; improved usability across devices.",
        "Implemented JWT auth and serverless flows with AWS Lambda + API GW.",
      ],
      tags: ["Java 11", "Spring Boot", "React", "JWT", "AWS EC2"],
    },
    {
      role: "Java Developer",
      company: "Walgreens",
      duration: "Apr 2023 – May 2024",
      bullets: [
        "Built services with Spring Boot & Microservices; 99.9% uptime on AWS.",
        "Integrated Kafka/RabbitMQ for real-time events and async processing.",
        "Optimized SQL/NoSQL queries; cut latency ~25% across hot paths.",
      ],
      tags: ["Spring Boot", "Kafka", "MongoDB", "MySQL", "CI/CD"],
    },
    {
      role: "Software Developer",
      company: "Mindtree",
      duration: "May 2022 – Jan 2023",
      bullets: [
        "Developed enterprise backends in Java 11, Spring Boot, Microservices.",
        "Built mobile-responsive UIs with Angular and Spring MVC.",
        "Deployed to AWS (EC2, S3, Lambda, RDS); automated CI/CD with Jenkins.",
      ],
      tags: ["Java 11", "Spring Boot", "Angular", "AWS", "Jenkins"],
    },
    {
      role: "Software Developer",
      company: "HCL",
      duration: "Nov 2020 – Apr 2022",
      bullets: [
        "Created modular Spring Boot services; improved maintainability ~30%.",
        "Exposed secure REST APIs; enforced clean architecture with Spring MVC.",
        "Optimized Oracle/MongoDB queries; reduced transaction latency ~20%.",
      ],
      tags: ["Spring Boot", "REST", "Oracle", "MongoDB", "Spring MVC"],
    },
    {
      role: "Junior Java Developer",
      company: "Genpact",
      duration: "Nov 2019 – Oct 2020",
      bullets: [
        "Built user modules with Struts/JSP/JS and Spring MVC + Hibernate.",
        "Integrated SOAP services via Axis for secure financial workflows.",
        "Wrote PL/SQL procedures; automated batch jobs with shell scripts.",
      ],
      tags: ["Java", "Spring MVC", "Hibernate", "SOAP", "PL/SQL"],
    },
  ];

  return (
    <section id="experience" className="Experience">
      <div className="exp-header">
        <h2 className="exp-title">Experience</h2>
        <div className="exp-accent" />
      </div>

      <div className="exp-grid">
        {jobs.map((j, idx) => (
          <article key={idx} className="exp-card">
            <header className="exp-card-head">
              <h3 className="exp-role">{j.role}</h3>
              <p className="exp-meta">
                <span className="exp-company">{j.company}</span>
                <span className="exp-dot">•</span>
                <span className="exp-duration">{j.duration}</span>
              </p>
            </header>

            <ul className="exp-bullets">
              {j.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="exp-tags">
              {j.tags.map((t, i) => (
                <span key={i} className="exp-tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
