import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
} from "../actions/types";

const initialState = {
  authToken: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("isAuth")
};

function adminAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case ADMIN_LOGIN_FAIL:
    case ADMIN_LOGOUT:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default adminAuthReducer;
