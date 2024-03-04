import "./portfolio.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Portfolio() {

  return (
    <div className="allContainer">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
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
                My second attempt at making a cool website with my family. It
                maintained a cool 3.9/5 ⭐️ on google, and increased sales
                during quarantine by ~10%. Coded in React.js.
              </p>
            </div>
            <div className="thirdC">
              <a href="https://www.miamicarwash.us/">
                <img src="MiamiCarWash.png" alt="Description of the image" />
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
                I made the frontend of the website for my family restaurant with
                my sister. It was a full stack development project using
                React.js and a restaurant specific hardware system. Presently,
                it has achieved an average of approximately $6500 in daily
                online orders and maintained a solid 4 ⭐️ in Google reviews.
                (Created in Highschool)
              </p>
            </div>
            <div className="thirdC">
              <a href="https://lemonleafgrill.m988.com/index.html?nav=CONTACT">
                <img src="Lemonleaf_Grill.jpg" alt="Description of the image" />
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
                <img src="crownHeights.jpeg" alt="Description of the image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
