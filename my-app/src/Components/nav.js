import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <ul className="navContainer">
        <li>
          <Link className="link" to="/" style={{ textDecoration: "none" }}>
            <a href="#home">
              <img className="icon" src="./icon.png"></img>
            </a>
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <a id='hover' style={{ textDecoration: "none" }} href="#home">Home</a>
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className = "link"
            style={{ textDecoration: "none" }}
            href="#about-me-section"
            to="/"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="/portfolio"
            style={{ textDecoration: "none" }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            id="hover"
            className="link"
            to="https://docs.google.com/document/d/1A2geNwd7XtleQkzHiqqhC9NzVTAxRnpT1eLVNfghVwI/edit"
            style={{ textDecoration: "none" }}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/contact"
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
