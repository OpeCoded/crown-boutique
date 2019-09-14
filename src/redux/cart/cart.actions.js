import CartActionTypes from "./cart.types";

//the action type and value (payload) of the action...but here we only did type not with value
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//action to add items to cart
//gets an item that we want to add to the cart array
//returns a new action type object, and the payload (value) item (the item we want to add to our cart array)
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

//this dispatches the action CLEAR_ITEM_FROM_CART
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});


export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})

//for removing and reducing quantity of item in the checkout page
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})