import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actions';
import ProductItem from '../product-item/ProductItem';
import './productPage.scss';
import SidebarFilter from '../sidebar-filters/SidebarFilter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ProductPage = ({ products, filteredProducts, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toastNotify = () => {
    toast.success('Added to the cart', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className='product-page'>
      <SidebarFilter products={products} />
      <div className='product-list'>
        {filteredProducts.map((item, idx) => {
          return (
            <ProductItem key={idx} item={item} toastNotify={toastNotify} />
          );
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
