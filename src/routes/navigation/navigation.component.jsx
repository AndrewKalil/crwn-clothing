import React from "react";
import { Outlet } from "react-router-dom";

// Styles
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinkContainer,
} from "./navigation.style";

// Components
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// Redux
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/user/user.reducer";

const Navigation = () => {
  const currentUser = useSelector(selectUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutCurrentUser = () => {
    dispatch(signOut());
  };

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutCurrentUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
