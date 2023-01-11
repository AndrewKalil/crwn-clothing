import React from "react";

// Styles
import {
  CartItemContainer,
  Image,
  ItemDetail,
  Name,
  Price,
} from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetail>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
