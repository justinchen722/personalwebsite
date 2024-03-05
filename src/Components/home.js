import React, { useEffect, useRef } from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";

function Home(props) {
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

  // const MyComponent = () => {
  //   const targetRef = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('show');
  //         } else {
  //           entry.target.classList.remove('show');
  //         }
  //       });
  //     });

  //     observer.observe(targetRef.current);

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }, []);

  //   return (
  //     <div ref={targetRef} className="nameContainer">
  //       <h1 className="name">
  //         <p className="hi">
  //           hi, i am justin.
  //           <img className="hand" src="wavinghand.gif" alt="Waving Hand" />
  //         </p>
  //         <ExampleComponent />
  //       </h1>
  //     </div>
  //   );
  // };

  const handleClickScroll = () => {
    const element = document.getElementById("about-me-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log(props.sasha);
      // console.log('this is props.sasha');
    }
  };

  const [sasha, setSasha] = useState("true");

  // useEffect(handleClickScroll, [sasha]);

  // if (props.sasha === 'true') {
  //   handleClickScroll();
  useEffect(() => {
    // Update the state based on the props value
    setSasha(props.sasha);
    if (props.sasha === "true") {
      handleClickScroll();
    }
    console.log("this is props.sasha");
    console.log(props.sasha);
    console.log("bobby");
  }, [props.sasha]);

  // useEffect(() => {
  //   // Call handleClickScroll when sasha changes
  //   handleClickScroll();
  // }, [sasha]);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div
        onload=' location.href="#myanchor" '
        id="myanchor"
        href="#"
        className="coverContainer"
      >
        <div className="cover">
          <div className="nameContainer">
            <h1 className="name">
              <p className="hi">
                hi, i am justin.
                <img
                  className="hand"
                  src={require("../assets/wavinghand.gif")}
                ></img>
              </p>
              <ExampleComponent></ExampleComponent>
            </h1>
          </div>
        </div>
      </div>
      <div id="about-me-section" className="idContainer">
        <div className="photo">
          <div className="photoContainer">
            <img src={require("../assets/mogged.jpg")}></img>
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
            <h1 className="world">
              Welcome to my little <p className="colorfulWorld">WORLD!</p>
            </h1>
            <p className="emphasis">
              Software Developer currenty located in Berkeley California ☀️
            </p>
            <p className="emphasis">
              On the lookout for work in development and intern opportunities in
              product management and software engineering.
            </p>
            <p className="aboutmeText">
              "I'm a Computer Science student at UC Berkeley. I love working on
              full-stack web development projects. Outside of classes, I'm into
              exploring entrepreneurship and the intersection of business and
              tech. If you're interested in joining forces to make a positive
              impact on the world, don't hesitate to reach out. ✨"
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
