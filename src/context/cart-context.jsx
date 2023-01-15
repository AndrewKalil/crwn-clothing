// import { useReducer } from "react";
// import { createContext } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// const addCartItemHelper = (cartItems, productToAdd) => {
//   // find if cart items has product to add
//   const found = cartItems.find((item) => item.id === productToAdd.id);

//   // if found increment quantity
//   if (found) {
//     return cartItems.map((item) => {
//       if (item.id === productToAdd.id) {
//         return { ...item, quantity: item.quantity + 1 };
//       } else {
//         return item;
//       }
//     });
//   }

//   // return new array with modified cart items/new car item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const modifyItemQuantityHelper = (cartItems, id, actionType) => {
//   const newCartItems = cartItems.map((item) => {
//     if (item.id === id) {
//       if (actionType === "decrement") {
//         return { ...item, quantity: item.quantity - 1 };
//       } else {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//     }
//     return item;
//   });
//   return newCartItems.filter((item) => item.quantity > 0);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   cartQuantity: 0,
//   removeCartItem: () => {},
//   modifyItemQuantity: () => {},
//   cartTotal: 0,
// });

// export const CART_ACTION_TYPES = {
//   UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`Unhandler type: ${type} in cartReducer`);
//   }
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartQuantity: 0,
//   cartTotal: 0,
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartItems, isCartOpen, cartQuantity, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);

//   const getCartQuantity = (cart) =>
//     cart.reduce((total, item) => total + item.quantity, 0);

//   const getCartTotal = (cart) =>
//     cart.reduce((total, item) => total + item.quantity * item.price, 0);

//   const addItemToCart = (productToAdd) => {
//     const newList = addCartItemHelper(cartItems, productToAdd);
//     updateCartItems(newList);
//   };

//   const removeCartItem = (id) => {
//     const newList = cartItems.filter((item) => item.id !== id);
//     updateCartItems(newList);
//   };

//   const modifyItemQuantity = (id, actionType) => {
//     const newList = modifyItemQuantityHelper(cartItems, id, actionType);
//     updateCartItems(newList);
//   };

//   const updateCartItems = (newCartList) => {
//     const total = getCartTotal(newCartList);
//     const quantity = getCartQuantity(newCartList);
//     const payload = {
//       cartItems: newCartList,
//       cartQuantity: quantity,
//       cartTotal: total,
//     };
//     const action = createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload);
//     dispatch(action);
//   };

//   const setIsCartOpen = () => {
//     const payload = {
//       isCartOpen: !isCartOpen,
//     };
//     const action = createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, payload);
//     dispatch(action);
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     cartQuantity,
//     modifyItemQuantity,
//     removeCartItem,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
