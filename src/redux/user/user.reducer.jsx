//user reducer holds props or data of users in our appp
import UserActionTypes from "./user.types";
//initial state of userReducer
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

//userReducer function
const userReducer = (state = INITIAL_STATE, action) => {
  //switch...if SET_CURRENT_USER is the action that gets fired then we want to return
  //a new object which represents the new state that our user reducer is going to transform
  //into and what the value will be is everything else on the state.
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    //if none of these action types match any of the case statement then return current state of what the reducer is
    default:
      return state;
  }
};

export default userReducer;
