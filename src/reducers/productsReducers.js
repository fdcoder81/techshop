import {
  FETCH_DATA,
  FILTER_BY_BRAND,
  UPDATE_BRAND_FILTER,
} from '../actions/types';

const initialState = {
  products: [],
  filteredProducts: [],
  brandsToFilter: [],
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

    case FILTER_BY_BRAND:
      return {
        ...state,
        filteredProducts: state.products.filter((item) =>
          state.brandsToFilter.includes(item.brand)
        ),
        /*  filteredProducts: state.brandsToFilter.map((brand) => {
          return state.products.filter((item) => item.brand === brand);
        }), */
      };
    default:
      return state;
  }
};
