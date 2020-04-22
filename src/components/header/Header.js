import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-shop.jpg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <Link to="/laptops">Laptops</Link>
        <Link to="/pc">PCs</Link>
        <Link to="/monitors">Monitors</Link>
        <Link to="/tablet">Tablet</Link>
      </div>
    </div>
  );
};

export default Header;
