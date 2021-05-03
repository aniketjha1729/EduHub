import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import AdminSignIn from "../admin/AdminSignIn";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/signin" component={AdminSignIn} />
      </Switch>
    </section>
  );
};

export default Routes;
