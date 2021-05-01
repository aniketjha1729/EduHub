import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AdminSignIn from "../components/admin/SignIn";
import UserSignIn from "../components/user/SignIn";
import { Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/adminSign" component={AdminSignIn} />
        <Route exact path="/userSign" component={UserSignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
