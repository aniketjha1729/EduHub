import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import AdminCreateNotice from "../pages/admin/AdminCreateNotice";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <AdminPrivateRoute exact path="/admin/users" component={AdminDashboard} />
      <AdminPrivateRoute exact path="/admin/posts" component={""} />
      <AdminPrivateRoute exact path="/admin/notices" component={AdminCreateNotice} />
      <Route exact path="/admin" component={Admin}/>
    </Switch>
  );
};

export default Routes;
