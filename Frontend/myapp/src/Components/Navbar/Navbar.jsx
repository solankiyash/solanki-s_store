import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assetes/logo.png";
import cart_icon from "../../Assetes/cart_icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../../Assetes/download.jpeg";

function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname);
  const { getCartItemCount } = useContext(ShopContext);
  const manuRef = useRef();

  const dropdowntoggel = (e) => {
    e.preventDefault();
    manuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  useEffect(() => {
    setMenu(location.pathname);
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdowntoggel}
        width={100}
        src={nav_dropdown}
        alt="dropdown"
      />
      <ul ref={manuRef} className="nav-menu">
        <li onClick={() => setMenu("/")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "/" && <hr />}
        </li>
        <li onClick={() => setMenu("/mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "/mens" && <hr />}
        </li>
        <li onClick={() => setMenu("/women")}>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "/women" && <hr />}
        </li>
        <li onClick={() => setMenu("/kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "/kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getCartItemCount()}</div>
      </div>
    </div>
  );
}

export default Navbar;
