import React from "react";
import { withRouter } from "react-router-dom";
import "./categoryItem.scss";

const CategoryItem = ({ category, imgCat, history }) => {
  const img = require(`../../${imgCat}`);

  return (
    <div onClick={() => history.push(`/${category}`)} className="category-item">
      <div
        className="category-box"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      ></div>
      <h2 className="title">{category}</h2>
    </div>
  );
};

export default withRouter(CategoryItem);
