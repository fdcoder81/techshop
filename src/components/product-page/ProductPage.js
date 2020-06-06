import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../product-item/ProductItem';
import './productPage.scss';
import SidebarFilter from '../sidebar-filters/SidebarFilter';

const ProductPage = ({ products }) => {
  return (
    <div className='product-page'>
      <SidebarFilter products={products} />
      <div className='product-list'>
        {products.map((item, idx) => {
          return <ProductItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
