import React from "react";

// Styles
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.style.jsx";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import {
  selectCartQuantity,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const handleOpenCloseAction = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleOpenCloseAction}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
