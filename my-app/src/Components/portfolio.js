import "./portfolio.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Portfolio() {
  return (
    <div className="allContainer">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="titleContainer">
        <h1 className="topTitle">These are the things I've been up to.</h1>
      </div>
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
      <div className="resContainer">
        {/* lemonleaf grill */}
        <div className="cardContainer">
          <div className="card">
            <div className="firstC">
              <p className="projectTitle">Miami Car Wash</p>
              <div className="firstTitle">
                <a id="hover" href="https://www.miamicarwash.us/">
                  <p className="title">
                    A fashioned digital marketing attempt for the car wash
                  </p>
                </a>
              </div>
              <button className="skillButton">Web Dev</button>
            </div>
            <div className="secondC">
              <p>
                During my time at Miami Car Wash in East Meadows, NY from March
                2020 to February 2023, I wore two hats: Sales Manager and
                Software Developer. As Sales Manager, I led a crew of 8-10 folks
                every day for a solid three years, flexing my leadership muscles
                and keeping sales operations running smoothly. On the tech side
                of things, I whipped up some cool stuff. With React.js and Git,
                I cooked up a slick website that made sales shoot up by 10%,
                giving our online presence a serious boost and making us more
                visible to the masses. Then, I dove into Node.js and MySQL to
                build a nifty inventory system tailored just for our car wash.
                It kept our inventory in check, making sure everything flowed
                smoothly and we never ran out of the essentials. Overall, I
                played a big part in making Miami Car Wash a well-oiled machine
                during my time there.
              </p>
            </div>
            <div className="thirdC">
              <a href="https://www.miamicarwash.us/">
                <img
                  src={require("../assets/MiamiCarWash.png")}
                  alt="Description of the"
                />
              </a>
            </div>
          </div>
        </div>
        {/* miami car wash */}
        <div className="cardContainer">
          <div className="card">
            <div className="firstC">
              <p className="projectTitle">Lemonleaf Grill</p>
              <div className="firstTitle">
                <a
                  id="hover"
                  href="https://lemonleafgrill.m988.com/index.html?nav=CONTACT"
                >
                  <p className="title">A secure restaurant ordering system</p>
                </a>
              </div>
              <button className="skillButton">Web Dev</button>
            </div>
            <div className="secondC">
              <p>
                The links to the right and left is to the website I helped make
                when I was in middle school 😅
              </p>
              <p>---</p>
              <p>
                At Lemonleaf Grill, I worked with a team of four innovators to
                develop and launch an intuitive POS system, which completely
                transformed the restaurant's operational efficiency and
                significantly improved the dining experience for our customers.
                This initiative resulted in substantial financial growth, with
                an average daily online order revenue of around $6500, largely
                due to the successful implementation of the POS system.
                Leveraging the platform independence of Java and the robust data
                management capabilities of SQL, we engineered a scalable and
                adaptable solution capable of handling over 30 distinct dishes
                while providing dynamic user interaction tailored to various
                roles within the restaurant.
              </p>
            </div>
            <div className="thirdC">
              <a href="https://lemonleafgrill.m988.com/index.html?nav=CONTACT">
                <img
                  src={require("../assets/Lemonleaf_Grill.jpg")}
                  alt="Description of the image"
                />
              </a>
            </div>
          </div>
        </div>
        {/* project destined */}
        <div className="cardContainer">
          <div className="card">
            <div className="firstC">
              <p className="projectTitle">W.P. Carey</p>
              <div className="firstTitle">
                <a
                  id="hover"
                  href="https://www.canva.com/design/DAFsnyOUZ0M/cHfmughEsAnBYS2En00xtQ/edit"
                >
                  <p className="title">
                    Selling 38-unit multi-family property in Crown Heights,
                    Brooklyn
                  </p>
                </a>
              </div>
              <button className="skillButton">
                Financial Modeling and Decking
              </button>
            </div>
            <div className="secondC">
              <p>
                I dedicated over 60 hours to intensive training in real estate
                fundamentals, property valuation, deal financing, and financial
                modeling. As part of this experience, I actively participated in
                the evaluation of a live real estate deal, specifically a
                40-unit development in Crown Heights, NYC. Collaborating with
                W.P. Carey real estate professionals, I played a key role in
                constructing comprehensive 10-year cash flow projections.
                Additionally, I contributed to the development of LP/GP
                waterfall payout structures, refinancing strategies, and
                sensitivity analyses, incorporating various growth rates, hold
                periods, and exit cap rates.
              </p>
            </div>
            <div className="thirdC">
              <a
                id="hover"
                href="https://www.canva.com/design/DAFsnyOUZ0M/cHfmughEsAnBYS2En00xtQ/edit"
              >
                <img
                  src={require("../assets/crownHeights.jpeg")}
                  alt="Description of the image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
