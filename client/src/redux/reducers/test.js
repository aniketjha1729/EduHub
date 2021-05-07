import { TEST_API, TEST_ERROR } from "../actions/types";

const initialState = {
  msg: null,
  isWorking: false,
};

function testReducers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TEST_API:
      return {
        ...state,
        isWorking: true,
        msg:payload
      };
    case TEST_ERROR:
      return {
        ...state,
        isWorking: false,
      };
    default:
      return state;
  }
}

export default testReducers;
