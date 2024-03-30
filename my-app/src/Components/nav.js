import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <ul className="navContainer">
        <li>
          <a id="home" href="#home">
            JC
          </a>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="/personalwebsite/"
            style={{ textDecoration: "none" }}
          >
            <a id="hover" style={{ textDecoration: "none" }} href="#home">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            style={{ textDecoration: "none" }}
            href="#about-me-section"
            to="/personalwebsite/about-me"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="/personalwebsite/portfolio"
            style={{ textDecoration: "none" }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="https://pdf.ac/1ad6hw"
            style={{ textDecoration: "none" }}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="mailto:justinchen722@berkeley.edu"
            style={{ textDecoration: "none" }}
          >
            <button className="button-17" role="button">
              Contact Me
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
