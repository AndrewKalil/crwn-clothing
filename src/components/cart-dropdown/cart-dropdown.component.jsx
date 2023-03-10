import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

// Styles
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Cart is currenty empty</EmptyMessage>
        )}
      </CartItems>

      <Button
        style={{ marginTop: "auto" }}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckout}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
