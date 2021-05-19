import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { setAuthToken,setUserAuthToken } from "./utils/setAuthToken";
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  if (
    previousState.admin.adminAuthToken !== currentState.admin.adminAuthToken
  ) {
    const adminAuthToken = currentState.admin.adminAuthToken;
    setAuthToken(adminAuthToken);
  }else if(previousState.user.userAuthToken !== currentState.user.userAuthToken){
    const userAuthToken = currentState.user.userAuthToken;
    setUserAuthToken(userAuthToken);
  }
});

export default store;
