import React from 'react';
import PropTypes from 'prop-types';
import './sidebarFilter.scss';

const SidebarFilter = ({ products }) => {
  const brands = products
    .map((item) => item.brand)
    .filter((item, index, self) => self.indexOf(item) === index);

  return (
    <div className='sidebar'>
      <h3>Sort by brand</h3>
      {brands.map((brand) => {
        return (
          <div key={brand} className='input-group'>
            <input type='checkbox' name='' />
            <label>{brand}</label>
          </div>
        );
      })}
    </div>
  );
};

SidebarFilter.propTypes = {};

export default SidebarFilter;
