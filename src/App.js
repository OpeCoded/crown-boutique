// THIS FILE IS THE MAIN REPRESENTATION OF OUR APP IN THE FORM OF ROUTES AND COMPONENTS
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//connect allows to modify states or update states
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import { checkUserSession } from "./redux/user/user.actions";

// import {
//   auth,
//   createUserProfileDocument,
// } from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
//allows us to have access to setCurrentUser prop
// import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header /*currentUser={this.state.currentUser}*/ />
      {/* if switch sees a route that does not have exact attribute, it will render only the route that match / */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

//getting the current user from our redux state for redirect after login
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
//mapDispatchToProps...This updates our app component so that it's able to update the reducer value with the new set current user action
//this gets a prop called dispatch and returns an object where the prop name will be whatever prop we want to pass in that dispatches the new action which is set current user
// const mapDispatchToProps = dispatch => ({
//   //this is what will be returned => this is an action object (user) from user.action.js which will be passed to every reducer
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
