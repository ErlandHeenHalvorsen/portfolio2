import "./Project.css";
import React from "react";
import ExamThumb from "../assets/ExamThumb.png";
import ExamModal from "../assets/ExamModal.png";
import ExamProfile from "../assets/ExamProfile.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiVite } from "react-icons/si";

function ProjectExam2() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <img
          src={ExamThumb}
          alt="Project thumbnail"
          className="project-hero-img"
        />
        <h1 className="project-hero-title">Holidaze - Project Exam 2</h1>
      </div>
      <p className="project-description">
        For my final exam, I built an AirBnb-inspired booking platform using
        Noroff's public API. The application includes core functionality like
        user authentication, venue listings, booking, profile management, and
        venue administration. All features are integrated into a clean,
        responsive UI built with React, Vite, and Tailwind.
      </p>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li>
            <FaReact title="React" size={38} color="#61dafb" />
          </li>
          <li>
            <SiVite title="Vite" size={38} color="#646cff" />
          </li>
          <li>
            <SiTailwindcss title="Tailwind CSS" size={38} color="#38bdf8" />
          </li>
          <li className="tech-text">Noroff API</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img
            src={ExamModal}
            alt="Modal example"
            className="project-inline-img"
          />
          <p>
            One of the biggest takeaways was learning to manage scope. I
            initially overengineered the design and functionality, which cost
            time and momentum. Restarting with a simpler, more focused plan
            allowed me to structure my code better and build more reusable
            components.
          </p>
          <p>
            I also deepened my understanding of{" "}
            <strong>React state management</strong> using <code>useState</code>.
            I used it to control a range of UI states including form data,
            modals, loading indicators, and error messages. Some specific use
            cases:
          </p>
          <ul>
            <li>
              Storing and updating user input across controlled form components.
            </li>
            <li>
              Managing modal open/close states with booleans for cleaner UX.
            </li>
            <li>
              Tracking asynchronous states like loading, success, and error when
              registering or editing data.
            </li>
          </ul>
          <p>
            These patterns helped me build reactive, user-friendly interfaces
            that stay predictable and easy to debug. I also learned to isolate
            state logic where needed to avoid unnecessary re-renders and keep
            components clean.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={ExamProfile}
            alt="Profile UI example"
            className="project-inline-img"
          />
          <p>
            Beyond technical skills, this project helped reinforce a core
            principle:
            <strong> keep it simple.</strong> Simplicity improves both the
            development process and the user experience. This mindset helped me
            clean up design inconsistencies and better manage component logic.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Challenges Faced</h2>
        <p>
          The design process was the hardest part. I started with too much
          complexity, and it quickly became hard to manage. Once I stripped it
          down and focused on clarity and core features, everything aligned much
          better. From layout flow to data handling, simplifying helped a lot.
        </p>
      </section>

      <section className="project-section">
        <h2>Live Demo & Code</h2>
        <p>
          <a
            href="https://holidaze-exam-erlhal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ErlandHeenHalvorsen/Holidaze-eheen-exam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted size={38} />
          </a>
        </p>
      </section>
    </div>
  );
}

export default ProjectExam2;
