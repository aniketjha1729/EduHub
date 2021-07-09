import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routing/Routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { setAuthToken, setUserAuthToken } from "./utils/setAuthToken";
import { ADMIN_LOGIN_FAIL } from "./redux/actions/types";
import { loadAdminData } from "./redux/actions/admin";
import { loadUserData } from "./redux/actions/user";
import UserNavbar from "./components/navbar/UserNavbar";


const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.admintoken) {
      setAuthToken(localStorage.admintoken);
      store.dispatch(loadAdminData());
    } else if (localStorage.usertoken) {
      setUserAuthToken(localStorage.usertoken);
      store.dispatch(loadUserData());
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.admintoken) store.dispatch({ type: ADMIN_LOGIN_FAIL });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <UserNavbar />
          <Switch>qwertyuiop[]    
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
