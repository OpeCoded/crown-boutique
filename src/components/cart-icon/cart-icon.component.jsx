import React from "react";

//we use this two to bind the cart toggle action
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

//the toggleCartHidden prop here is from redux
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

//here we are dispatching the action
const mapDispatchToProps = dispatch => ({
  //the action we are dispatching (toggleCartHidden) which will be a function that trigger the dispatch of toggleCartHidden
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//binding the cart toggle action to our CartIcon component
export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
