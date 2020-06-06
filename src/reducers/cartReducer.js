const INITIALSTATE = {
  cartItems: [],
};

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return (
        cartItem.id === cartItemToAdd.id && {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      );
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const cartReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
