import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  CURRENT_ADMIN_USER,
} from "../actions/types";

const initialState = {
  authToken: localStorage.getItem("token"),
  isAuthenticated: false,
  isAdmin:false,
  user: null,
  errors:null,
};

function adminAuthReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_ADMIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin:true,
        user: payload,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isAdmin:true,
      };
    case ADMIN_LOGIN_FAIL:
      return{
        ...state,
        authToken:null,
        isAuthenticated:false,
        isAdmin:false,
        user:null,
        errors:payload
      }
    case ADMIN_LOGOUT:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
        isAdmin:false,
        user: null,
      };
    default:
      return state;
  }
}

export default adminAuthReducer;
