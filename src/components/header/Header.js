import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-shop.jpg';
import './header.scss';
import cartIcon from '../../images/cart.png';

const Header = ({ quantity }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <div className='cart-container'>
          <p>Your Cart</p>
          <NavLink to='/cart'>
            <div className='cart-icon'>
              <span className='counter'>{quantity}</span>
              <img className='cart' src={cartIcon} alt='' />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.cart.quantity,
  };
};

export default connect(mapStateToProps)(Header);
