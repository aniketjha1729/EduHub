import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CURRENT_USER,
} from "../actions/types";

const initialState = {
  userAuthToken: localStorage.getItem("usertoken"),
  isAuthenticated: false,
  user: null,
  errors: null,
};

function userAuthReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAIL:
      return{
        ...state,
        userAuthToken:null,
        isAuthenticated:false,
        user:null,
        errors:payload
      }
    case USER_LOGOUT:
      return {
        ...state,
        userAuthToken: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export default userAuthReducer;
