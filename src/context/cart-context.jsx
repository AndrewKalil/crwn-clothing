import { useEffect, useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  removeCartItem: () => {},
  itemQuantityAction: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartQuantity(
      cartItems.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const itemQuantityAction = (id, action) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (action === "decrement") {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
    setCartItems(newCartItems.filter((item) => item.quantity > 0));
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    itemQuantityAction,
    removeCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
