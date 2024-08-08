import React from "react";
import footer_logo from "../../Assetes/logo_big.png";
import instagram from "../../Assetes/instagram_icon.png";
import pintester_icon from "../../Assetes/pintester_icon.png";
import whatsapp_icon from "../../Assetes/whatsapp_icon.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer_link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyrigth @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
