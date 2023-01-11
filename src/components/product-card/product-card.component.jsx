import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// Styles
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.style";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const handleAddToCartAction = () => {
    addItemToCart(product);
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
