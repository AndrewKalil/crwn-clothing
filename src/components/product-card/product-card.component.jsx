import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// Styles
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.style";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const handleAddToCartAction = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddToCartAction}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
