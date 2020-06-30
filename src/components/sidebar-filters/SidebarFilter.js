import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterByBrand, updateBrandsToFilter } from '../../actions/actions';
import './sidebarFilter.scss';

const SidebarFilter = ({ products, filterByBrand, updateBrandsToFilter }) => {
  /*   const [checkboxBrand, setCheckBoxBrand] = useState([]);
   */
  /*  useEffect(() => {
    console.log(checkboxBrand);
  }); */

  const handleChange = (name, e) => {
    updateBrandsToFilter(name, e.target.checked);
    filterByBrand();
  };

  const brands = products
    .map((item) => item.brand)
    .filter((item, index, self) => self.indexOf(item) === index);

  return (
    <div className='sidebar'>
      <h3>Sort by brand</h3>
      {brands.map((brand) => {
        return (
          <div key={brand} className='input-group'>
            <input
              onChange={(e) => handleChange(e.target.name, e)}
              type='checkbox'
              name={brand}
            />
            <label>{brand}</label>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { filterByBrand, updateBrandsToFilter })(
  SidebarFilter
);
