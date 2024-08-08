import React from "react";
import "./Hero.css";
import hand_icon from "../../Assetes/hand_icon.png";
import arrow_icon from "../../Assetes/arrow.png";
import hero_image from "../../Assetes/shop.jpg";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY dsds</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-leatest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
