import { createSlice } from "@reduxjs/toolkit";

const addCartItemHelper = (cartItems, productToAdd) => {
  // find if cart items has product to add
  const found = cartItems.find((item) => item.id === productToAdd.id);

  // if found increment quantity
  if (found) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  // return new array with modified cart items/new car item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const modifyItemQuantityHelper = (cartItems, id, actionType) => {
  const newCartItems = cartItems.map((item) => {
    if (item.id === id) {
      if (actionType === "decrement") {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return { ...item, quantity: item.quantity + 1 };
      }
    }
    return item;
  });
  return newCartItems.filter((item) => item.quantity > 0);
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newList = addCartItemHelper(state.cartItems, action.payload);
      state.cartItems = newList;
    },
    removeCartItem: (state, action) => {
      const newList = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newList;
    },
    modifyItemQuantity: (state, action) => {
      const { id, actionType } = action.payload;
      const newList = modifyItemQuantityHelper(state.cartItems, id, actionType);
      state.cartItems = newList;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  modifyItemQuantity,
  removeCartItem,
  setIsCartOpen,
} = cartReducer.actions;

export default cartReducer.reducer;
