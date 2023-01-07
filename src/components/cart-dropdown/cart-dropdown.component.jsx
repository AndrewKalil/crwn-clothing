import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button buttonType="inverted" onClick={goToCheckout}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
