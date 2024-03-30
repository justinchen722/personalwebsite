import "./cube.css";
import React from "react";

function Cube(props) {
  // Function to convert CSS string to object
  const getStyle = (cssString) => {
    return cssString
      .split(";")
      .filter(Boolean)
      .reduce((styleObject, rule) => {
        const [property, value] = rule.split(":").map((str) => str.trim());
        styleObject[property] = value;
        return styleObject;
      }, {});
  };
  const dynamicCSS = `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    background: linear-gradient(black, ${props.color});
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  `;

  // Create spans dynamically based on props
  const spans = [];
  for (let i = 0; i < 4; i++) {
    // Apply inline style to each span using the dynamicCSS string
    spans.push(
      <span key={i} style={{ "--i": i, ...getStyle(dynamicCSS) }}></span>
    );
  }

  // Render the Cube component with the dynamic spans
  return (
    <div className="cube">
      <div className="top"></div>
      <div className="cubeDiv">{spans}</div>
    </div>
  );
}

export default Cube;
