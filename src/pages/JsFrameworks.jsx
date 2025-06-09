import React from "react";
import "./Project.css";

import JsThumb from "../assets/JsThumb.png";
import JsCart from "../assets/JsCart.png";
import JsHook from "../assets/JsHook.png";
import JsResponsiveNav from "../assets/JsResponsiveNav.png";
import JsRouter from "../assets/JsRouter.png";

import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const techStack = [
  { icon: <FaReact size={24} />, name: "React" },
  { icon: <SiVite size={24} />, name: "Vite" },
  { icon: <FaJsSquare size={24} />, name: "JavaScript" },
];

const learnings = [
  {
    img: JsRouter,
    alt: "React Router",
    title: "Routing & Layouts",
    content: (
      <>
        React Router enabled clean separation between pages and reusable
        layouts. I implemented dynamic routes, parameters, and the{" "}
        <code>Outlet</code> component for shared layout structure.
      </>
    ),
  },
  {
    img: JsHook,
    alt: "Custom Hook",
    title: "Reusable API Hook",
    content: (
      <>
        I built a <code>useAPI</code> hook to handle asynchronous fetch calls,
        centralizing <code>loading</code> and <code>error</code> state logic
        across the app.
      </>
    ),
  },
  {
    img: JsCart,
    alt: "Global State",
    title: "Global State & Filtering",
    content: (
      <>
        Zustand gave me lightweight, global state management. I combined this
        with filtering logic and debounced search to optimize product listing
        performance.
      </>
    ),
  },
  {
    img: JsResponsiveNav,
    alt: "Responsive Nav",
    title: "Responsive Navigation",
    content: (
      <>
        Using local state and <code>lucide-react</code> icons, I built a clean
        hamburger menu that works seamlessly across all screen sizes.
      </>
    ),
  },
];

export default function JsFrameworks() {
  return (
    <main className="project-page">
      {/* Hero image */}
      <div className="project-hero">
        <img
          src={JsThumb}
          alt="Project thumbnail"
          className="project-hero-img"
        />
      </div>

      {/* Title, links, and description */}
      <div className="project-intro">
        <h1 className="project-title">JS Frameworks Assignment</h1>

        <div className="project-links">
          <a
            href="https://tee-shop-erlhal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/ErlandHeenHalvorsen/ca-js-frameworks-erlhal"
            target="_blank"
            rel="noopener noreferrer"
            className="project-icon-link"
          >
            <VscGithubInverted />
            GitHub
          </a>
        </div>

        <p className="project-description">
          This project involved building a multi-page React storefront with
          shopping cart, search filtering, and routing. It used modern tools
          like Vite, Zustand, and React Router for performance and clean
          architecture.
        </p>
      </div>

      {/* Technologies */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          {techStack.map((tech, index) => (
            <li key={index}>
              {tech.icon}
              {tech.name && <span className="tech-text">{tech.name}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Learnings */}
      <section className="project-section">
        <h2>What I Learned</h2>
        {learnings.map(({ img, alt, title, content }, i) => (
          <div className="project-flex" key={i}>
            <img src={img} alt={alt} className="project-inline-img" />
            <div>
              <h3 className="project-subheading">{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Reflection */}
      <section className="project-section">
        <h2>Reflection </h2>
        <p>
          Zustand required a careful balance between simplicity and reactivity.
          Debugging a <code>useAPI</code> catch block showed me how subtle
          syntax issues (like arrow function scoping) can silently break error
          handling. Ensuring mobile responsiveness across views was also a key
          lesson.
        </p>
      </section>
    </main>
  );
}
