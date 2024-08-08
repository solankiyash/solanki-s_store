import React from "react";
import exclucive_image from "../../Assetes/shop.jpg";
import "./Offers.css";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
