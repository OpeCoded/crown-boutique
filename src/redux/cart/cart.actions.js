import CartActionTypes from './cart.types';


//the action type and value (payload) of the action...but here we only did type not with value
export const toggleCartHidden = () => ({
type: CartActionTypes.TOGGLE_CART_HIDDEN
});