const INITIALSTATE = {
  cartItems: [],
};

const cartReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
