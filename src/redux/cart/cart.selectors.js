//this file is used for itemCount...we made it separate file to make it reuseable
import { createSelector } from "reselect";

//types of selectors: input and output
//input: does not use create selector
//output: use input selector and create selector

//INPUT SELECTOR
//input selector..it gets the whole state (reducer state) and returns a slice of it (state).
//so we are getting the cart state as a slice from the entire state
const selectCart = state => state.cart;

//OUTPUT SELECTOR
//we created input selector above bcus this use a create selector call
//it takes in 2 args, first is a collection of an array (input selector) and a function that will return the value we want out of the selector,
//and what we're going to get in its params is each output of the input selctors in the array but in the order that those selectors were written
//then return our cartItems
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//OUTPUT SELECTOR
//itemCount selector
export const selectCartItemsCount= createSelector(
  [selectCartItems],
  cartItems =>
    //pass in a value of count which = accumulating the quantity on each of our cart items, to get the accummulating qty,
    //we use our reduce function to bring it down to one final value
    //we pass in the accumuledQuantity as the first arg,and then the actual cart item,
    //then return accumulatedQuantity + cart item quantity (which will accumulate all the num values of the quantities on all the cart items), we pass in 0 as the initial accumulating value
    //the value is then stored in the itemCount parameter
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
