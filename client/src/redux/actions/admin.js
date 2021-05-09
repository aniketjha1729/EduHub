import axios from "../../api/axios";
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL,ADMIN_LOGOUT } from "./types";
import setAuthToken  from "../../utils/setAuthToken";

export const adminLogin = (email, password) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const body = { email, password };
  try {
    const res = await axios.post("/admin/signin", body);
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    dispatch({
      type: ADMIN_LOGIN_FAIL,
    });
  }
};

export const logout = () => ({ type: ADMIN_LOGOUT });
