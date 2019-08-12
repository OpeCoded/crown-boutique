import React from "react";

//we use this two to bind the cart toggle action
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

//the toggleCartHidden prop here is from redux
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//here we are dispatching the action
const mapDispatchToProps = dispatch => ({
  //the action we are dispatching (toggleCartHidden) which will be a function that trigger the dispatch of toggleCartHidden
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//getting the number of cartItems....we used mapStateToProps (for pulling data from the state), pull the state in (destructure off our cart) and then get the value
//pass in a value of count which = accumulating the quantity on each of our cart items, to get the accummulating qty,

//A better way to do this is Memorization...caching or storing of the selector's (.reduce) value, we can achieve this using a library called reselect... to avoid rerendering of our component when the state changes
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

//binding the cart toggle action to our CartIcon component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
