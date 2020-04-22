import React from "react";
import { connect } from "react-redux";
import ProductItem from "../product-item/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.items.map((item, idx) => {
        return <ProductItem key={idx} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products[ownProps.match.params.category],
  };
};

export default connect(mapStateToProps)(ProductList);
