import { Link } from "react-router";
import React from "react";
import "./home.css";
import ProfilePicture from "../assets/ProfilePicture.jpg";
import ExamThumb from "../assets/ExamThumb.png";
import JsThumb from "../assets/JsThumb.png";
import SemesterThumb from "../assets/SemesterThumb.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const projects = [
  {
    path: "/JsFrameworks",
    title: "JS Frameworks",
    thumbnail: JsThumb,
    description: "Exploring JavaScript frameworks in depth.",
  },
  {
    path: "/ProjectExam2",
    title: "Project Exam 2",
    thumbnail: ExamThumb,
    description:
      "Final exam project showcasing API usage, React Routing and modern development tools.",
  },
  {
    path: "/SemesterProject2",
    title: "Semester Project 2",
    thumbnail: SemesterThumb,
    description:
      "A comprehensive semester project focusing on modern web development practices.",
  },
];

function Home() {
  return (
    <div className="home">
      <section className="about">
        <img src={ProfilePicture} alt="Erland" className="about-img" />
        <div className="about-text">
          <h1>Hi, I'm Erland</h1>
          <p>
            I'm a web development student from Bergen, passionate about creating
            modern, responsive websites and learning new tech. I also enjoy
            music, working out, and exploring nature. This portfolio showcases
            some of my recent school projects.
          </p>
        </div>
      </section>

      <div className="stack-wrapper">
        <ul className="stack-list">
          <li>
            <span className="tooltip" data-tooltip="HTML5">
              <FaHtml5 />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="CSS3">
              <FaCss3Alt />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="JavaScript">
              <FaJsSquare />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="React">
              <FaReact />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="Vite">
              <SiVite />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="Node.js">
              <FaNodeJs />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="GitHub">
              <VscGithubInverted />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="Tailwind CSS">
              <SiTailwindcss />
            </span>
          </li>
          <li>
            <span className="tooltip" data-tooltip="Figma">
              <FaFigma />
            </span>
          </li>
        </ul>
        <div className="stack-divider" />
      </div>

      <h2 className="home-title">Latest Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <Link to={project.path} key={project.path} className="card">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
