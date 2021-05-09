import axios from "../../api/axios";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  CURRENT_ADMIN_USER,
} from "./types";

export const loadAdminData = () => async (dispatch) => {
  try {
    const res = await axios.get("/admin/currentUser");
    dispatch({
      type: CURRENT_ADMIN_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const adminLogin = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post("/admin/signin", body);
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdminData());
  } catch (err) {
    const errors = err.response.data.error;
    dispatch({
      type: ADMIN_LOGIN_FAIL,
    });
  }
};

export const logout = () => ({ type: ADMIN_LOGOUT });
