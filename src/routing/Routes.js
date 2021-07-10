import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminCreateNotice from "../pages/admin/AdminCreateNotice";
import AdminUser from "../pages/admin/AdminUser";
import PageNoteFound from "../pages/404/PageNoteFound";
import AdminPrivateRoute from "./AdminPrivateRoute";
import UserPrivateRoute from "./UserPrivateRoute";
import Home from "../pages/Home";
import AdminNotices from "../pages/admin/AdminNotices";
import AdminSignIn from "../pages/admin/AdminSignIn";
import UserSignup from "../components/user/auth/UserSignup";
import UserLogin from "../components/user/auth/UserLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Teams from "../pages/Teams";
import Forum from "../pages/Forum";
import Profile from "../pages/Profile";
import Messenger from "../pages/Messenger";

const Routes = () => {
  return (
    <Switch>
      <AdminPrivateRoute exact path="/admin/users" component={AdminUser} />
      <AdminPrivateRoute
        exact
        path="/admin/dashboard"
        component={AdminDashboard}
      />
      <AdminPrivateRoute exact path="/admin/notices" component={AdminNotices} />
      <AdminPrivateRoute
        exact
        path="/admin/createnotice"
        component={AdminCreateNotice}
      />
      <UserPrivateRoute exact path="/" component={Home} />
      <UserPrivateRoute exact path="/forum" component={Forum} />
      <UserPrivateRoute exact path="/profile" component={Profile} />
      <Route exact path="/messenger" component={Messenger} />
      <Route exact path="/signup" component={UserSignup} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/admin" component={AdminSignIn} />
      <Route exact path="/teams" component={Teams} />
      <Route component={PageNoteFound} />
    </Switch>
  );
};

export default Routes;
