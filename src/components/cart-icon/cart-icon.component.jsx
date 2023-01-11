import { CartContext } from "../../context/cart-context";

import React, { useContext } from "react";

// Styles
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

  const handleOpenCloseAction = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={handleOpenCloseAction}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
