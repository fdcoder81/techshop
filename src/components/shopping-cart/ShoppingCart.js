import React from 'react';
import { connect } from 'react-redux';
import { removeItem, removeItemQuantity, addItem } from '../../actions/actions';
import './shoppingCart.scss';
import { cartTotal } from '../../utils/utils';

const ShoppingCart = ({
  cart,
  removeItem,
  removeItemQuantity,
  addItem,
  total,
}) => {
  return (
    <div className='shopping-cart'>
      <div className='cart-header'>
        <h1>Shopping Cart</h1>
        <h3>Price</h3>
      </div>

      {cart.cartItems.map((item) => {
        const imgSrc = require(`../../${item.imgUrl}`);
        return (
          <div key={item.id} className='cart-body'>
            <img src={imgSrc} alt='' />
            <p className='description'>{item.title}</p>
            <div className='price'>
              <p className='price'>{item.price}£</p>
              <div className='quantity'>
                <div onClick={() => removeItemQuantity(item)} className='arrow'>
                  &#10094;
                </div>
                <span className='value'>{item.quantity}</span>
                <div onClick={() => addItem(item)} className='arrow'>
                  &#10095;
                </div>
              </div>
              <p onClick={() => removeItem(item)} className='remove'>
                Remove
              </p>
            </div>
          </div>
        );
      })}

      <div className='total'>
        <p>Total : {total}£</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: cartTotal(state.cart.cartItems),
  };
};

export default connect(mapStateToProps, {
  removeItem,
  removeItemQuantity,
  addItem,
})(ShoppingCart);
