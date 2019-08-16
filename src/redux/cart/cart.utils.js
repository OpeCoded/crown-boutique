//This file controls the quantity of products...when added to cart array

//this function takes all the existing cart items in the cart items array and the new cart item we want to add
//then we check if the new item id we want to add is already in the cart items array...if the id matches it sets the cart item where the condition is true to our constant, if not it will be undefined
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  //if the items matches
  //we return a new array through map by passing in our cartItem...cus we need to return a new version of our state so that our components know what to re render
  //then we increase the quantity of the cart item if the old item matches the new item by creating a new object
  //then we return the original cart items if the the items dont match
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //if the cart item is not found inside of our array, then we return a new array with all of our existing cart items already there and an object which is equal to our cart item to add and set the quantity to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//for removing item
//we check if the existing cartItem id is equal to the one we want to remove
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  //so we want to remove an item if its quantity is 1
  if (existingCartItem.quantity === 1) {
    //so if the id is not the one we want to remove we keep them
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  //if the quantity is not 1..decrease it
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
