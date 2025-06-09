import "./Project.css";
import ReturnButton from "../components/button/Button";
import React from "react";
import SemesterThumb from "../assets/SemesterThumb.png";
import { SiVite } from "react-icons/si";
import { FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

import SemBidListingCode from "../assets/SemBidListingCode.png";
import SemBidListingView from "../assets/SemBidListingView.png";
import SemProfileListing from "../assets/SemProfileListing.png";
import SemRegisterUser from "../assets/SemRegisterUser.png";
import SemStorageHandling from "../assets/SemStorageHandling.png";

function SemesterProject2() {
  return (
    <main className="project-page">
      {/* Hero */}
      <div className="project-hero">
        <img
          src={SemesterThumb}
          alt="BidNest homepage"
          className="project-hero-img"
        />
      </div>
      <ReturnButton />
      {/* Title & Intro */}
      <div className="project-intro">
        <h1 className="project-title">BidNest – Semester Project 2</h1>

        <div className="project-links">
          <a
            href="https://thebidnest.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/ErlandHeenHalvorsen/semester-project-2-erlhal"
            target="_blank"
            rel="noopener noreferrer"
            className="project-icon-link"
          >
            <VscGithubInverted />
            GitHub
          </a>
        </div>

        <p className="project-description">
          BidNest is a dynamic auction platform built with Vite and vanilla
          JavaScript, styled using Tailwind. Users can register, manage
          auctions, and place bids. Core features include modular API logic and
          secure client-side storage.
        </p>
      </div>

      {/* Technologies */}
      <section className="project-section">
        <h2>Technologies Used</h2>
        <ul className="tech-icon-list">
          <li>
            <SiVite size={24} />
            <span className="tech-text">Vite</span>
          </li>
          <li>
            <FaJsSquare size={24} />
            <span className="tech-text">JavaScript</span>
          </li>
          <li>
            <FaCss3Alt size={24} />
            <span className="tech-text">Tailwind</span>
          </li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="project-section">
        <h2>What I Learned</h2>

        <div className="project-flex">
          <img
            src={SemRegisterUser}
            alt="User registration snippet"
            className="project-inline-img"
          />
          <div>
            <h3 className="project-subheading">API Modules & Structure</h3>
            <p>
              Building <code>getRegisterUser</code> taught me to centralize API
              logic, reuse fetch calls, and maintain consistent error handling.
              I also learned to organize headers and endpoints cleanly.
            </p>
          </div>
        </div>

        <div className="project-flex">
          <div className="project-inline-images">
            <img
              src={SemBidListingCode}
              alt="Bidding code"
              className="project-inline-img"
            />
            <img
              src={SemBidListingView}
              alt="Bidding interface"
              className="project-inline-img"
            />
          </div>
          <div>
            <h3 className="project-subheading">Bidding & Error Handling</h3>
            <p>
              In <code>bidOnListing</code>, I practiced decoding API errors and
              rethrowing them for UI alerts. I ensured consistent return shapes
              and learned the value of feedback for async UX.
            </p>
          </div>
        </div>

        <div className="project-flex">
          <img
            src={SemProfileListing}
            alt="Profile listings"
            className="project-inline-img"
          />
          <div>
            <h3 className="project-subheading">Auth Headers & Query Params</h3>
            <p>
              The <code>getProfileListings</code> function reinforced building
              dynamic query strings and passing token headers securely. Mapping
              responses to displayable formats was a key step.
            </p>
          </div>
        </div>

        <div className="project-flex">
          <img
            src={SemStorageHandling}
            alt="LocalStorage handling"
            className="project-inline-img"
          />
          <div>
            <h3 className="project-subheading">Persistent Storage</h3>
            <p>
              With the <code>storage</code> utils, I explored storing auth data
              using timeouts and expirations. This helped balance user
              convenience and client-side security.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="project-section">
        <h2>Reflection</h2>
        <p>
          Coordinating modular JS across multiple pages required clean imports
          and consistent naming. I also gained speed working with utility-first
          Tailwind, especially in <code>input.css</code> where I built quick,
          responsive components.
        </p>
      </section>
    </main>
  );
}

export default SemesterProject2;
