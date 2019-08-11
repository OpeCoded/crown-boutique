import React from "react";

//connect is a highered order component that lets us modify our component to have access to things related to redux
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        SHOP{" "}
      </Link>
      <Link className="option" to="/shop">
        {" "}
        CONTACT{" "}
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT{" "}
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {//cart icon toggle
    hidden ? null : <CartDropdown />}
  </div>
);

//this allows us to access our reducers and pull data from it
//state ({user: { currentUser }, cart: { hidden } }) from root-reducer.js......we are destructuring our state here in a nested form
//user = user value in our root-reducer.js
//currentUser = is the property that holds our currently logged in user in user.reducer.js
//cart is our cartReducer property
//hidden = is the value gotten off our cart icon action toggle

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

//here we export our connect with the header and pass in some values
//we pass in a function to our connect which allows us to access the states with the state being our root-reducer
export default connect(mapStateToProps)(Header);
