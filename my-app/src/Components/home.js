import React, { useEffect, useRef } from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import Cube from "./cube";

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
        style={{ fontSize: "4vw", display: "inline-block", color: 'white'}}
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

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [colours, setColours] = useState(['red', 'yellow', 'orange', 'green', 'purple']);
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColours(prevColours => {
      const newColors = [...prevColours, getRandomColor()];

    if (prevColours.length >= 50) {
      return newColors.slice(1);
    }
    return newColors
  });

    setColorIndex(prevIndex => (prevIndex + 1) % colours.length);
  }

  useEffect(() => {
    console.log(colours);
  }, [colours]);

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
        <div onClick={changeColor} className="cover">
          <div className="nameContainer">
            <Cube color={colours[colorIndex]}/>
            <div className="name">
              <p className="hi">
                hi, i am justin.
                <img
                  className="hand"
                  src={require("../assets/wavinghand.gif")}
                ></img>
              </p>
              <ExampleComponent></ExampleComponent>
            </div>
          </div>
        </div>
      </div>
      <div id="about-me-section" className="idContainer">
        <div className="photo">
          <div className="photoContainer">
            {/* <img src="../assets/mogged.jpg"></img> */}
            <div>hello</div>
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
            <h1 className="world">You landed on my page!</h1>
            <p className="emphasis">
              "Hi I am Justin, a interdisciplinary student at Berkeley. I love
              working on full-stack web development projects. Outside of class,
              I love videograhy and exploring the intersection between business
              and tech. If you're interested in joining forces to make a
              positive impact on the world, don't hesitate to reach out."
            </p>
            <p className="emphasis">Current Location: Berkeley, California</p>
            <p className="emphasis">Hometown: Queens, New York</p>
            <p className="emphasis">
              Seeking opportunities in: Product Management and Software
              Engineering
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
