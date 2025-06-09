import React from 'react';
import "./Project.css";
import JsThumb from "../assets/JsThumb.png";
import JsCart from "../assets/JsCart.png";
import JsHook from "../assets/JsHook.png";

import JsResponsiveNav from "../assets/JsResponsiveNav.png";
import JsRouter from "../assets/JsRouter.png";

import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";


function JsFrameworks() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <img
          src={JsThumb}
          alt="JS Frameworks assignment thumbnail"
          className="project-hero-img"
        />
        <h1 className="project-hero-title">JS Frameworks Assignment</h1>
      </div>

      <p className="project-description">
        In this assignment, I built a multi-page online store using React,
        Vite, React Router, a custom data-fetching hook, and Zustand for state
        management. Core features include product listing, search filtering,
        shopping cart, and checkout flow, all with client-side routing and
        global state.
      </p>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li><FaReact title="React" size={38} color="#61dafb" /></li>
          <li><SiVite title="Vite" size={38} color="#646cff" /></li>
          <li><FaJsSquare title="JavaScript" size={38} color="#f7df1e" /></li>
          <li className="tech-text">React Router</li>
          <li className="tech-text">Zustand</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img
            src={JsRouter}
            alt="React Router setup snippet"
            className="project-inline-img"
          />
          <p>
            Implementing React Router allowed me to structure the app into
            separate pages and nested layouts. I learned to use <code>Routes</code>,
            dynamic <code>Route</code> parameters for product details, and
            <code>Outlet</code> for shared layouts.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={JsHook}
            alt="useAPI custom hook"
            className="project-inline-img"
          />
          <p>
            Building a <code>useAPI</code> custom hook deepened my understanding
            of <strong>hooks</strong>, async data fetching, and managing <code>loading</code>
            and <code>error</code> states centrally.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={JsCart}
            alt="FetchStore component example"
            className="project-inline-img"
          />
          <p>
            The <code>FetchStore</code> component taught me how to combine
            filtering logic with React state and Zustand for global product and
            cart management. I also practiced debouncing and efficient list
            rendering.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={JsResponsiveNav}
            alt="Responsive navigation snippet"
            className="project-inline-img"
          />
          <p>
            I created a responsive navigation with a hamburger menu using local
            React state and the <code>lucide-react</code> icon library,
            ensuring accessibility and mobile-friendly design.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Challenges Faced</h2>
        <p>
          Managing global state with Zustand and syncing it with component-level
          filtering took some iteration. I also debugged an issue with the
          <code>catch</code> block in <code>useAPI</code> that wasn’t correctly
          handling errors due to arrow function syntax. Ensuring responsive
          design across breakpoints was another focus.
        </p>
      </section>

      <section className="project-section">
        <h2>Live Demo & Code</h2>
        <p>
          <a
            href="https://tee-shop-erlhal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}|
          {" "}
          <a
            href="https://github.com/ErlandHeenHalvorsen/ca-js-frameworks-erlhal"
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

export default JsFrameworks;
