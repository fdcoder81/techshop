import {
  ADD_ITEM,
  FETCH_DATA,
  UPDATE_BRAND_FILTER,
  UPDATE_CATEGORY_FILTER,
  FILTER,
  REMOVE_ITEM,
  REMOVE_ITEM_QUANTITY,
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

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const removeItemQuantity = (item) => {
  return {
    type: REMOVE_ITEM_QUANTITY,
    payload: item,
  };
};

export const updateBrandsToFilter = (brand, isChecked) => {
  return {
    type: UPDATE_BRAND_FILTER,
    payload: { brand, isChecked },
  };
};

export const updateCategoriesToFilter = (category, isChecked) => {
  return {
    type: UPDATE_CATEGORY_FILTER,
    payload: { category, isChecked },
  };
};

export const filter = () => {
  return {
    type: FILTER,
  };
};
