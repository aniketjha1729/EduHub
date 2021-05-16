import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routing/Routes";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { ADMIN_LOGIN_FAIL } from "./redux/actions/types";
import { loadAdminData } from "./redux/actions/admin";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadAdminData());
    console.log(store);

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: ADMIN_LOGIN_FAIL });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
