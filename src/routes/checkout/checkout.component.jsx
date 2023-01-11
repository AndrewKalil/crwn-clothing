import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// Styles
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style";

const Checkout = () => {
  const { cartItems, itemQuantityAction, removeCartItem, cartTotal } =
    useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quality</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return (
          <CheckoutItem
            item={item}
            itemQuantityAction={itemQuantityAction}
            removeCartItem={removeCartItem}
            key={item.id}
          />
        );
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
