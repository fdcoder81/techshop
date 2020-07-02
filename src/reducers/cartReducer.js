import { ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_QUANTITY } from '../actions/types';
import { addItemToCart, removeItemQuantity } from '../utils/utils';

const INITIALSTATE = {
  cartItems: [],
};

const cartReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case REMOVE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: removeItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
