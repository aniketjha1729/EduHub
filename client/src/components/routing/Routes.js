import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import AdminSignIn from "../admin/AdminSignIn";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/signin" component={AdminSignIn} />
      </Switch>
  );
};

export default Routes;
