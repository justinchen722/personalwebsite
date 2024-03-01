import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Home() {
  const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          "Software x Business",
          2000,
          "Software x Videography",
          2000,
          "Software x Marketing",
          2000,
          "Software x Hardware",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3vw", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  function iconSize() {
    const size = 30;
    return size;
  }

  return (
    <div>
      <div
        onload=' location.href="#myanchor" '
        id="myanchor"
        href="#"
        className="coverContainer"
      >
        <div className="cover">
          <div className="nameContainer">
            <h1 className="name">
              <p className="hi">hi, i am justin.</p>
              <ExampleComponent></ExampleComponent>
            </h1>
          </div>
        </div>
      </div>
      <div id="about-me-section" className="idContainer">
        <div className="photo">
          <div className="photoContainer">
            <img src="mogged.jpg"></img>
          </div>
        </div>
        <div className="justin">
          <div className="socialMedia">
            <a href="https://github.com/justinchen722">
              <FaGithub id="hover" className="icons" size={40} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100015106847882">
              <FaFacebookSquare id="hover" className="icons" size={40} />
            </a>
            <a href="https://www.instagram.com/justinwooooooo/">
              <FaInstagram id="hover" className="icons" size={40} />
            </a>
            <a href="https://www.linkedin.com/in/justin1chen/">
              <FaLinkedin id="hover" className="icons" size={40} />
            </a>
          </div>
          <div className="textContainer">
            <h1>Welcome to my little world!</h1>
            <p className="aboutmeText">
              "I'm a Computer Science student at UC Berkeley. I love working on
              full-stack web development projects. Outside of classes, I'm into
              exploring entrepreneurship and the intersection of business and
              tech. If you're interested in joining forces to make a positive
              impact on the world, don't hesitate to reach out." - Justin 😊
            </p>
          </div>
          <script>
            window.onload = function() {(window.location.hash = "myanchor")}
          </script>
        </div>
      </div>
    </div>
  );
}

export default Home;
