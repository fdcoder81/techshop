import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-shop.jpg";
import "./header.scss";
import cartIcon from "../../images/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="cart-container">
          <p>Your Cart</p>
          <div className="cart-icon">
            <span className="counter">2</span>
            <img className="cart" src={cartIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="options">
        <NavLink to="/laptops" activeClassName="active">
          Laptops
        </NavLink>
        <NavLink to="/pcs" activeClassName="active">
          PCs
        </NavLink>
        <NavLink to="/monitors" activeClassName="active">
          Monitors
        </NavLink>
        <NavLink to="/tablets" activeClassName="active">
          Tablet
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
