// Home.jsx
import { Link } from "react-router";
import React from "react";
import "./Home.css";
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
import { SiTailwindcss } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiVite } from "react-icons/si";

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
      "Final exam project showcasing Api usage, React Routing and overall web-dev technologies.",
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
      {/* About Me Section */}
      <section className="about">
        <img src={ProfilePicture} alt="Erland" className="about-img" />
        <div className="about-text">
          <h1>Hi, I'm Erland</h1>
          <p>
            I'm a web development student from Bergen, passionate about creating
            modern, responsive websites and learning new tech. I also enjoy
            gaming, working out, and exploring nature. This portfolio showcases
            some of my recent school projects.
          </p>
          <div>
            <h3>My Stack</h3>
            <ul className="stack-list">
              <li>
                <FaHtml5 title="HTML5" color="#e34c26" size={40} />
              </li>
              <li>
                <FaCss3Alt title="CSS3" color="#264de4" size={40} />
              </li>
              <li>
                <FaJsSquare title="JavaScript" color="#f7df1e" size={40} />
              </li>
              <li>
                <FaReact title="React" color="#61dafb" size={40} />
              </li>
              <li>
                <SiVite title="Vite" color="#646cff" size={40} />
              </li>
              <li>
                <FaNodeJs title="Node.js" color="#68a063" size={40} />
              </li>
              <li>
                <VscGithubInverted title="GitHub" color="#181717" size={40} />
              </li>
              <li>
                <SiTailwindcss title="Tailwind CSS" color="#38bdf8" size={40} />
              </li>
              <li>
                <FaFigma title="Figma" color="#f24e1e" size={40} />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <h2 className="home-title">My Projects</h2>
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
