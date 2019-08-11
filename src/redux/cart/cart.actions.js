import CartActionTypes from './cart.types';


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
})