import CartActionTypes from "./cart.types";
import {addItemToCart} from './cart.utils';
//this is the initial state of our cart icon, cart items when user first come to our site
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

//the reducer receives the initial state and action type(in form of string) performed by the user
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //for cart icon toggle on the header...the action type was received which is a string
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        //now it returns the all the states ...spread ,initial state and sets a new value for the initial state
        ...state,
        hidden: !state.hidden
      };
    //for adding items to cart
    case CartActionTypes.ADD_ITEM:
      return {
        //returns an object with all the states, sets the the cart items array to old cart items
        //and then with the newest action that got fired(add item)
        //deposit whatever the item it is in the payload(value) of that action into the new array of cart [] from our cart reducer.js
        //by spreading our existing cart items into the new array and append the new item we get as a payload
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    //now returns the new state as default
    default:
      return state;
  }
};
export default cartReducer;
