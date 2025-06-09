import React from 'react';
import "./Project.css";
import SemesterThumb from "../assets/SemesterThumb.png"; // Placeholder for thumbnail
import { SiVite } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

function SemesterProject2() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <img
          src={SemesterThumb}
          alt="Semester project homepage"
          className="project-hero-img"
        />
        <h1 className="project-hero-title">BidNest - Semester Project 2</h1>
      </div>

      <p className="project-description">
        BidNest is a dynamic auction platform built with Vite and vanilla JavaScript,
        styled with Tailwind CSS. Users can register, bid on listings, and manage
        their own auctions via modular API functions and client-side storage.
      </p>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li><SiVite title="Vite" size={38} color="#646cff" /></li>
          <li><FaJsSquare title="JavaScript" size={38} color="#f7df1e" /></li>
          <li><FaCss3Alt title="Tailwind CSS" size={38} color="#38bdf8" /></li>
          <li className="tech-text">LocalStorage</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img
            src={''}
            alt="User registration API snippet"
            className="project-inline-img"
          />
          <p>
            Crafting the <code>getRegisterUser</code> module deepened my grasp of
            asynchronous <code>fetch</code> calls, error checking, and JSON handling.
            I learned to centralize my API constants and headers for cleaner imports.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={''}
            alt="Bid on listing function snippet"
            className="project-inline-img"
          />
          <p>
            Implementing <code>bidOnListing</code> reinforced robust error handling,
            including parsing error messages from the server and rethrowing them
            for UI feedback. Ensuring consistent return shapes was critical.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={''}
            alt="Fetch profile listings snippet"
            className="project-inline-img"
          />
          <p>
            Building <code>getProfileListings</code> taught me about dynamic query
            parameters, authentication headers, and mapping API responses to UI-ready
            data for profile pages.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={''}
            alt="LocalStorage token management snippet"
            className="project-inline-img"
          />
          <p>
            The <code>storage</code> utilities showed me how to persist tokens and
            usernames with expiration timeouts, balancing user convenience and
            security in a purely client-side environment.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Challenges Faced</h2>
        <p>
          Coordinating modular JS functions across multiple pages required careful
          imports and proper build configuration. Tailwind custom classes in
          <code>input.css</code> taught me to leverage utility-first CSS for rapid
          UI iteration.
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
          </a>{" "}|
          {" "}
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </p>
      </section>
    </div>
  );
}

export default SemesterProject2;
