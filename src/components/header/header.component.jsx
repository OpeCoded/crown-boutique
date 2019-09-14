import React from "react";

//connect is a highered order component that lets us modify our component to have access to things related to redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//we now use styled component with link
//import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

//import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop"> SHOP </OptionLink>
      <OptionLink to="/shop"> CONTACT </OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          {" "}
          SIGN OUT{" "}
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {//cart icon toggle
    hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//this allows us to access our reducers and pull data from it
//state ({user: { currentUser }, cart: { hidden } }) from root-reducer.js......we are destructuring our state here in a nested form
//user = user value in our root-reducer.js
//currentUser = is the property that holds our currently logged in user in user.reducer.js
//cart is our cartReducer property
//hidden = is the value gotten off our cart icon action toggle

//we used createStructuredSelector because we are selecting more state to props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
//here we export our connect with the header and pass in some values
//we pass in a function to our connect which allows us to access the states with the state being our root-reducer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
