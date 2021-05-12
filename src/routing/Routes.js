import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import AdminCreateNotice from "../pages/admin/AdminCreateNotice";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PageNoteFound from "../pages/404/PageNoteFound";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Home from "../pages/Home";
import AdminNotices from "../pages/admin/AdminNotices";
import ShowNotice from "../pages/admin/ShowNotice";
const Routes = () => {
  return (
    <Switch>
      <AdminPrivateRoute exact path="/admin/users" component={AdminDashboard} />
      <AdminPrivateRoute exact path="/admin/posts" component={""} />
      <AdminPrivateRoute exact path="/admin/notices" component={ShowNotice} />
      <AdminPrivateRoute
        exact
        path="/admin/createnotice"
        component={AdminCreateNotice}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route component={PageNoteFound} />
    </Switch>
  );
};

export default Routes;
