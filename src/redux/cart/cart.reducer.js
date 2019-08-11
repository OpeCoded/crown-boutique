import CartActionTypes from './cart.types';

//this is the initial state of our cart icon when user first come to our site
const INITIAL_STATE = {
  hidden: true
};

//the reducer receives the initial state and action type(in form of string) performed by the user
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //the action type was received which is a string
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        //now it returns the initial state and sets a new value for the initial state
        ...state,
        hidden: !state.hidden
      };
    //now returns the new state as default
    default:
      return state;
  }
};
export default cartReducer;