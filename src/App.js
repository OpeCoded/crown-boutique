// THIS FILE IS THE MAIN REPRESENTATION OF OUR APP IN THE FORM OF ROUTES AND COMPONENTS
import React from "react";
import { Route, Switch } from "react-router-dom";
//connect allows to modify states or update states
import { connect } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//allows us to have access to setCurrentUser prop
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  //Unsubscribing
  unsubscribeFromAuth = null;
  //Subcribing...we are fetching data from firebase here to check when a user is logged in
  componentDidMount() {
    //destructuring setCurrentUser so that we can just type setCurrentUser instead of this.props.set....
    const {setCurrentUser} = this.props;

    //open subscription..its an open messaging system between our application and our firebase at whenever any changes occur
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //when a user is signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //storing the user object data in our state
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
          //console.log(this.state);
      } else {
        //when the user auth is null, i.e user signed out
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    //closes the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header /*currentUser={this.state.currentUser}*/ />
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

//mapDispatchToProps...This updates our app component so that it's able to update the reducer value with the new set current user action
//this gets a prop called dispatch and returns an object where the prop name will be whatever prop we want to pass in that dispatches the new action which is set current user 
const mapDispatchToProps = dispatch => ({
//this is what will be returned => this is an action object (user) from user.action.js which will be passed to every reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);
