import { createSelector } from "reselect";

const selectorCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectorCartReducer],
  (cart) => cart.isCartOpen
);
export const selectCartTotal = createSelector([selectorCartReducer], (cart) =>
  getCartTotal(cart.cartItems)
);
export const selectCartQuantity = createSelector(
  [selectorCartReducer],
  (cart) => getCartQuantity(cart.cartItems)
);

const getCartQuantity = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

const getCartTotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
