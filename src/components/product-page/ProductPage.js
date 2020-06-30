import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actions';
import ProductItem from '../product-item/ProductItem';
import './productPage.scss';
import SidebarFilter from '../sidebar-filters/SidebarFilter';

const ProductPage = ({ products, filteredProducts, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (filteredProducts.length === 0) {
    fetchData();
  }

  return (
    <div className='product-page'>
      <SidebarFilter products={products} />
      <div className='product-list'>
        {filteredProducts.map((item, idx) => {
          return <ProductItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
  };
};

export default connect(mapStateToProps, { fetchData })(ProductPage);
