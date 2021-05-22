import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminCreateNotice from "../pages/admin/AdminCreateNotice";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PageNoteFound from "../pages/404/PageNoteFound";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Home from "../pages/Home";
import AdminNotices from "../pages/admin/AdminNotices";
import AdminSignIn from "../pages/admin/AdminSignIn";
import UserSignup from "../components/user/UserSignup";
const Routes = () => {
  return (
    <Switch>
      <AdminPrivateRoute exact path="/admin/users" component={AdminDashboard} />
      <AdminPrivateRoute exact path="/admin/posts" component={""} />
      <AdminPrivateRoute exact path="/admin/notices" component={AdminNotices} />
      <AdminPrivateRoute
        exact
        path="/admin/createnotice"
        component={AdminCreateNotice}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={UserSignup} />
      <Route exact path="/admin" component={AdminSignIn} />
      <Route component={PageNoteFound} />
    </Switch>
  );
};

export default Routes;
