import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminSignIn from "../pages/admin/AdminSignIn";
import AdminPrivateRoute from "./AdminPrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <AdminPrivateRoute
        exact
        path="/admin/dashboard"
        component={AdminDashboard}
      />
      <Route exact path="/admin/signin" component={AdminSignIn} />
    </Switch>
  );
};

export default Routes;
