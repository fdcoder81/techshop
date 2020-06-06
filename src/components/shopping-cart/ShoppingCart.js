import React from "react";
import { connect } from "react-redux";
import "./shoppingCart.scss";

const ShoppingCart = ({ cart }) => {
  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <h3>Price</h3>
      </div>

      {cart.cartItems.map((item) => {
        const imgSrc = require(`../../${item.imgUrl}`);
        return (
          <div key={item.id} className="cart-body">
            <img src={imgSrc} alt="" />
            <p className="description">{item.title}</p>
            <div className="price">
              <p className="price">{item.price}£</p>
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
