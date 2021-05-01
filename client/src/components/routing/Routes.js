import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
