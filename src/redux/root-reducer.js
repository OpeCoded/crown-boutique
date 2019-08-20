//this file houses all other reducers
//this is the base reducer object that represents all of the state of our app so this root reduceer will end up being the actual coode that combines all of our other states together.

//combineReducers combines all reducers in our app and export them in key value pairs
import { combineReducers } from "redux"; 

//will want to use this to update our reducer, cus we are now using redux persist (store , persistor) in wrappin our app
import { persistReducer } from 'redux-persist';
//the type of storage we wanna use (we want to use local storage as my default storage)
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";

import cartReducer from './cart/cart.reducer';

import directoryReducer from './directory/directory.reducer';
import shopReducer from "./shop/shop.reducer";

//our new persist config...which is the json object that reps our config that we want redux persist to use
//which use keys and strings to hold our data
//our key is root: which indicates the point we want to start storing our data inside our reducer object, which is our root
//storage is the type of storage we imported above
//whitelist is an array of strings containing string names of any of the reducer that we want to store
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

//this is the new reducer we will wrap in our persist ... it is what our redux persist will use
//creating our root reducer objects
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//this is a modified version of our root reducer with persistence capablilites
export default persistReducer(persistConfig, rootReducer)