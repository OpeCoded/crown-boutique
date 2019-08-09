//this is the base reducer object that represents all of the state of our app so this root reduceer will end up being the actual coode that combines all of our other states together.

//combineReducers combines all reducers in our app and export them in key value pairs
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//creating our root reducer objects
export default combineReducers({
  user: userReducer
});
