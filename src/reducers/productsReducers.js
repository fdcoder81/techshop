import { SHOP_DATA } from "../SHOP_DATA";

export default (state = [], action) => {
  switch (action.type) {
    default:
      return SHOP_DATA;
  }
};
