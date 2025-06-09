import React from "react";
import "./Project.css";
import SemesterThumb from "../assets/SemesterThumb.png"; // Placeholder for thumbnail
import { SiVite } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import SemBidListingCode from "../assets/SemBidListingCode.png"; // Placeholder for listing image
import SemBidListingView from "../assets/SemBidListingView.png"; // Placeholder for listing view image
import SemProfileListing from "../assets/SemProfileListing.png"; // Placeholder for profile listing image
import SemRegisterUser from "../assets/SemRegisterUser.png"; // Placeholder for register user image
import SemStorageHandling from "../assets/SemStorageHandling.png"; // Placeholder for storage handling image

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
        BidNest is a dynamic auction platform built with Vite and vanilla
        JavaScript, styled with Tailwind CSS. Users can register, bid on
        listings, and manage their own auctions via modular API functions and
        client-side storage.
      </p>

      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li>
            <SiVite title="Vite" size={38} color="#646cff" />
          </li>
          <li>
            <FaJsSquare title="JavaScript" size={38} color="#f7df1e" />
          </li>
          <li>
            <FaCss3Alt title="Tailwind CSS" size={38} color="#38bdf8" />
          </li>
          <li className="tech-text">LocalStorage</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img
            src={SemRegisterUser}
            alt="User registration API snippet"
            className="project-inline-img"
          />
          <p>
            Crafting the <code>getRegisterUser</code> module deepened my grasp
            of asynchronous <code>fetch</code> calls, error checking, and JSON
            handling. I learned to centralize my API constants and headers for
            cleaner imports.
          </p>
        </div>

        <div className="project-flex">
          <div className="project-inline-images">
            <img
              src={SemBidListingCode}
              alt="Bid on listing function snippet"
              className="project-inline-img"
            />
            <img
              src={SemBidListingView}
              alt="View"
              className="project-inline-img"
            />
          </div>
          <p>
            Implementing <code>bidOnListing</code> reinforced robust error
            handling, including parsing error messages from the server and
            rethrowing them for UI feedback. Ensuring consistent return shapes
            was critical.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={SemProfileListing}
            alt="Fetch profile listings snippet"
            className="project-inline-img"
          />
          <p>
            Building <code>getProfileListings</code> taught me about dynamic
            query parameters, authentication headers, and mapping API responses
            to UI-ready data for profile pages.
          </p>
        </div>

        <div className="project-flex">
          <img
            src={SemStorageHandling}
            alt="LocalStorage token management snippet"
            className="project-inline-img"
          />
          <p>
            The <code>storage</code> utilities showed me how to persist tokens
            and usernames with expiration timeouts, balancing user convenience
            and security in a purely client-side environment.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Challenges Faced</h2>
        <p>
          Coordinating modular JS functions across multiple pages required
          careful imports and proper build configuration. Tailwind custom
          classes in
          <code>input.css</code> taught me to leverage utility-first CSS for
          rapid UI iteration.
        </p>
      </section>

      <section className="project-section">
        <h2>Live Demo & Code</h2>
        <p>
          <a
            href="https://thebidnest.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ErlandHeenHalvorsen/semester-project-2-erlhal"
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

export default SemesterProject2;
