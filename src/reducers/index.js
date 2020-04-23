import { combineReducers } from "redux";
import productsReducer from "./productsReducers";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
