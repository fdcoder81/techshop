import {
  ADD_ITEM,
  FILTER_BY_BRAND,
  FETCH_DATA,
  UPDATE_BRAND_FILTER,
} from './types';
import DATA from '../DATA';

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: DATA,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const updateBrandsToFilter = (brand, isChecked) => {
  return {
    type: UPDATE_BRAND_FILTER,
    payload: { brand, isChecked },
  };
};

export const filterByBrand = () => {
  return {
    type: FILTER_BY_BRAND,
  };
};
