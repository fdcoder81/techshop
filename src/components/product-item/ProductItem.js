import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/actions';
import './productItem.scss';

const ProductItem = ({ item, addItem }) => {
  const { title, price, imgUrl } = item;
  const imgSrc = require(`../../${imgUrl}`);

  return (
    <div className='product-item'>
      <div
        className='img-container'
        style={{
          backgroundImage: `url("${imgSrc}")`,
        }}
      ></div>
      <div className='title'>{title}</div>
      <p className='price'>{price}£</p>
      <button onClick={() => addItem(item)}>Add To Cart</button>
    </div>
  );
};

ProductItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(ProductItem);
