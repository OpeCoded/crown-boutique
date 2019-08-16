import React from "react";
//used in pulling cart items using our redux
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

//toggle hidden action
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        //we have access to this dispatch from connect
        //it hides the dropdown cart after navigating the checkout page
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//withRouter pass the history and the location objects into the components being wrapped
//withRouter gives us access to history which can be passed in to our comp as prop, (not sure yet, but its like the history carries data from one component to another page or comp)
//connect gives us a dispatch action by default if we dont pass in a second arg
export default withRouter(connect(mapStateToProps)(CartDropdown));
