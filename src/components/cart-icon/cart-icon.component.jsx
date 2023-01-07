import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart-context";

import React, { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

  const handleOpenCloseAction = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleOpenCloseAction}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
