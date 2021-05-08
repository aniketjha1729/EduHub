import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from "../actions/types";

const initialState = {
  authToken: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("isAuth"),
};

function adminAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        authToken: null,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

export default adminAuthReducer;
