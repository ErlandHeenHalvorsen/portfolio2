// Home.jsx
import { Link } from "react-router";
import React from "react";
import "./Home.css";

const projects = [
  {
    path: "/JsFrameworks",
    title: "JS Frameworks",
    thumbnail: "/thumb-js.jpg",
    description: "Exploring JavaScript frameworks in depth.",
  },
  {
    path: "/ProjectExam2",
    title: "Project Exam 2",
    thumbnail: "/thumb-exam.jpg",
    description: "Final exam project showcasing full-stack skills.",
  },
  {
    path: "/SemesterProject2",
    title: "Semester Project 2",
    thumbnail: "/thumb-semester.jpg",
    description: "A semester-long development journey.",
  },
];

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">My Projects</h1>
      <div className="card-grid">
        {projects.map((project) => (
          <Link to={project.path} key={project.path} className="card">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-desc">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
