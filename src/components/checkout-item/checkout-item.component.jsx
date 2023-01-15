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

// Redux
import { useDispatch } from "react-redux";
import {
  modifyItemQuantity,
  removeCartItem,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, id, price } = item;

  const incrementQuantity = () => {
    dispatch(modifyItemQuantity({ id, actionType: "increment" }));
  };

  const decrementQuantity = () => {
    dispatch(modifyItemQuantity({ id, actionType: "decrement" }));
  };

  const clearCartItem = () => {
    dispatch(removeCartItem(id));
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
