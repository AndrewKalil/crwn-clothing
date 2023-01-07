import React from "react";
import "./checkout-item.style.scss";

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementQuantity}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={incrementQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
