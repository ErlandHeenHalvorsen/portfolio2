// JsFrameworks.jsx
import "./Project.css";
import React from "react";
import ExamThumb from "../assets/ExamThumb.png";

function ProjectExam2() {
  return (
    <div className="project-page">
      <h1 className="project-title">Project Exam 2</h1>
      <img src={ExamThumb} alt="JS Frameworks" className="project-img" />
      <p className="project-description">
        In my final exam project i was tasked with creating a AirBnb knock-off
        website, with options for booking, profiles, listing venues. The project
        utilazed the Noroff Api, which provided a comprehensive set of endpoints
        for managing listings and bookings.
      </p>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Challenges Faced</h2>
        <p>
          Managing component state across frameworks, performance optimization,
          and learning framework-specific patterns.
        </p>
      </section>

      <section className="project-section">
        <h2>Live Demo & Code</h2>
        <p>
          <a
            href="https://yourdemo.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          |
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub Repo
          </a>
        </p>
      </section>
    </div>
  );
}

export default ProjectExam2;
