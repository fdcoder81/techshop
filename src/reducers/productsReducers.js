import {
  FETCH_DATA,
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  UPDATE_BRAND_FILTER,
  UPDATE_CATEGORY_FILTER,
} from '../actions/types';

const initialState = {
  products: [],
  filteredProducts: [],
  brandsToFilter: [],
  categoriesToFilter: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case UPDATE_BRAND_FILTER:
      if (action.payload.isChecked) {
        return {
          ...state,
          brandsToFilter: [...state.brandsToFilter, action.payload.brand],
        };
      } else {
        return {
          ...state,
          brandsToFilter: state.brandsToFilter.filter(
            (item) => item !== action.payload.brand
          ),
        };
      }

    case UPDATE_CATEGORY_FILTER:
      if (action.payload.isChecked) {
        return {
          ...state,
          categoriesToFilter: [
            ...state.categoriesToFilter,
            action.payload.category,
          ],
        };
      } else {
        return {
          ...state,
          categoriesToFilter: state.categoriesToFilter.filter(
            (item) => item !== action.payload.category
          ),
        };
      }

    case FILTER_BY_BRAND:
      if (
        state.categoriesToFilter.length === 0 &&
        state.brandsToFilter.length === 0
      ) {
        return {
          ...state,
          filteredProducts: state.products,
        };
      }

      if (state.brandsToFilter.length === 0) {
        return {
          ...state,
          filteredProducts: state.products.filter((item) =>
            state.categoriesToFilter.includes(item.category)
          ),
        };
      }

      if (state.categoriesToFilter.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.filter((item) =>
            state.brandsToFilter.includes(item.brand)
          ),
        };
      }

      return {
        ...state,
        filteredProducts: state.products.filter((item) =>
          state.brandsToFilter.includes(item.brand)
        ),
      };

    case FILTER_BY_CATEGORY:
      if (
        state.categoriesToFilter.length === 0 &&
        state.brandsToFilter.length === 0
      ) {
        return {
          ...state,
          filteredProducts: state.products,
        };
      }

      if (state.categoriesToFilter.length === 0) {
        return {
          ...state,
          filteredProducts: state.products.filter((item) =>
            state.brandsToFilter.includes(item.brand)
          ),
        };
      }

      if (state.brandsToFilter.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.filter((item) =>
            state.categoriesToFilter.includes(item.category)
          ),
        };
      }

      return {
        ...state,
        filteredProducts: state.products.filter((item) =>
          state.categoriesToFilter.includes(item.category)
        ),
      };

    default:
      return state;
  }
};
