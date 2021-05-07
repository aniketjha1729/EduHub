import axios from "../../api/axios";
import { TEST_API, TEST_ERROR } from "./types";

export const testApi = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/test");
    dispatch({
      type: TEST_API,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TEST_ERROR,
    });
  }
};
