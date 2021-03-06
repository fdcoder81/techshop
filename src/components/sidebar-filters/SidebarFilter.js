import React from 'react';
import { connect } from 'react-redux';
import {
  filter,
  updateBrandsToFilter,
  updateCategoriesToFilter,
} from '../../actions/actions';
import './sidebarFilter.scss';

const SidebarFilter = ({
  products,
  filter,
  updateBrandsToFilter,
  updateCategoriesToFilter,
}) => {
  const handleBrandChange = (name, e) => {
    updateBrandsToFilter(name, e.target.checked);
    filter();
  };

  const handleCategoryChange = (name, e) => {
    updateCategoriesToFilter(name, e.target.checked);
    filter();
  };

  const brands = products
    .map((item) => item.brand)
    .filter((item, index, self) => self.indexOf(item) === index);

  const categories = products
    .map((item) => item.category)
    .filter((item, index, self) => self.indexOf(item) === index);

  return (
    <div className='sidebar'>
      <h3>Sort by brand</h3>
      {brands.map((brand) => {
        return (
          <div key={brand} className='input-group'>
            <input
              onChange={(e) => handleBrandChange(e.target.name, e)}
              type='checkbox'
              name={brand}
            />
            <label>{brand}</label>
          </div>
        );
      })}

      <h3>Sort by category</h3>
      {categories.map((category) => {
        return (
          <div key={category} className='input-group'>
            <input
              onChange={(e) => handleCategoryChange(e.target.name, e)}
              type='checkbox'
              name={category}
            />
            <label>{category}</label>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, {
  filter,
  updateBrandsToFilter,
  updateCategoriesToFilter,
})(SidebarFilter);
