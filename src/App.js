// THIS FILE IS THE MAIN REPRESENTATION OF OUR APP IN THE FOR OF ROUTES AND COMPONENTS
import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    //here we are storing our auth state, note this is now a App class not a fucntion
    this.state = {
      currentUser: null
    }
  }

  //Unsubscribing
unsubscribeFromAuth = null
  //Subcribing...we are fetching data from firebase here to check when a user is logged in
  componentDidMount() {
    //open subscription..its an open messaging system between our application and our firebase at whenever any changes occur
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

componentWillUnmount() {
  //closes the subscription
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        {/* if switch sees a route that does not have exact attribute, it will render only the route that match / */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
