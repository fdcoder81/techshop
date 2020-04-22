import React from "react";
import { connect } from "react-redux";
import CategoryItem from "../category-item/CategoryItem";
import "./categoryList.scss";

const CategoryList = ({ products }) => {
  return (
    <div className="category-list">
      {Object.keys(products).map((category, idx) => {
        return (
          <CategoryItem
            key={idx}
            category={category}
            imgCat={products[category].imgCat}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(CategoryList);
