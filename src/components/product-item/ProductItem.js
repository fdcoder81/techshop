import React from "react";

const ProductItem = ({ item }) => {
  const { title, price, imgUrl } = item;
  const imgSrc = require(`../../${imgUrl}`);

  return (
    <div className="product-item">
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
      <div className="title">{title}</div>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductItem;
