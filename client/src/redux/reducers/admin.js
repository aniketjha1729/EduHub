import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
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
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default adminAuthReducer;
