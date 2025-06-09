import "./Project.css";
import React from "react";
import ExamThumb from "../assets/ExamThumb.png";
import ExamModal from "../assets/ExamModal.png";
import ExamProfile from "../assets/ExamProfile.png";
import { FaReact, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

function ProjectExam2() {
  return (
    <main className="project-page">
      {/* Hero image */}
      <div className="project-hero">
        <img
          src={ExamThumb}
          alt="Project thumbnail"
          className="project-hero-img"
        />
      </div>

      {/* Title, links, description */}
      <div className="project-intro">
        <h1 className="project-title">Holidaze – Project Exam 2</h1>

        <div className="project-links">
          <a
            href="https://holidaze-exam-erlhal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/ErlandHeenHalvorsen/Holidaze-eheen-exam"
            target="_blank"
            rel="noopener noreferrer"
            className="project-icon-link"
          >
            <VscGithubInverted />
            GitHub
          </a>
        </div>

        <p className="project-description">
          For my final exam, I built an AirBnb-inspired booking platform using
          Noroff's public API. The application includes user authentication,
          venue listings, bookings, profiles, and venue management—all in a
          clean, responsive UI built with React, Vite, and Tailwind.
        </p>
      </div>

      {/* Technologies */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li>
            <FaReact size={24} />
            <span className="tech-text">React</span>
          </li>
          <li>
            <SiVite size={24} />
            <span className="tech-text">Vite</span>
          </li>
          <li>
            <SiTailwindcss size={24} />
            <span className="tech-text">Tailwind</span>
          </li>
          <li>
            <FaJsSquare size={24} />
            <span className="tech-text">JavaScript</span>
          </li>
          <li>
            <FaFigma size={24} />
            <span className="tech-text">Figma</span>
          </li>
        </ul>
      </section>

      {/* What I Learned */}
      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img src={ExamModal} alt="Modal UI" className="project-inline-img" />
          <div>
            <h3 className="project-subheading">Managing Scope & State</h3>
            <p>
              A key lesson was managing project scope. I initially
              overengineered features, which slowed me down. Restarting with a
              simpler plan helped me build reusable components with clarity and
              purpose.
            </p>
            <p>
              I also deepened my use of <strong>React state</strong> with{" "}
              <code>useState</code> for forms, modals, loading indicators, and
              error messages. Highlights include:
            </p>
            <ul>
              <li>Controlling form inputs with local state.</li>
              <li>Toggling modals using boolean state.</li>
              <li>Tracking async feedback (loading, error, success).</li>
            </ul>
          </div>
        </div>

        <div className="project-flex">
          <img
            src={ExamProfile}
            alt="Profile UI"
            className="project-inline-img"
          />
          <div>
            <h3 className="project-subheading">Design Simplicity</h3>
            <p>
              Beyond code, I learned the value of simplicity. Starting with too
              much complexity caused friction. Refocusing on clean UI and
              minimal logic made everything more manageable and user-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="project-section">
        <h2>Reflection</h2>
        <p>
          The hardest part was the design process. Overcomplication early on
          created confusion. Once I simplified layout, data flow, and component
          structure, the project became easier to finish and much cleaner
          overall.
        </p>
      </section>
    </main>
  );
}

export default ProjectExam2;
