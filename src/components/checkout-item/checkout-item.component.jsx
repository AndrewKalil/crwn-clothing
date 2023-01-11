import React from "react";

// Styled
import {
  Arrow,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Quantity,
  RemoveButton,
  Text,
  Value,
} from "./checkout-item.style";

const CheckoutItem = ({ item, itemQuantityAction, removeCartItem }) => {
  const { imageUrl, name, quantity, id, price } = item;

  const incrementQuantity = () => {
    itemQuantityAction(id, "increment");
  };

  const decrementQuantity = () => {
    itemQuantityAction(id, "decrement");
  };

  const clearCartItem = () => {
    removeCartItem(id);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <Arrow onClick={decrementQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementQuantity}>&#10095;</Arrow>
      </Quantity>
      <Text>${price}</Text>
      <RemoveButton onClick={clearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
