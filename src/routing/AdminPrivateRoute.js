import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AdminPrivateRoute = ({
  component: Component,
  admin: { isAuthenticated, authToken },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && authToken != null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/admin" />
      )
    }
  />
);

AdminPrivateRoute.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps)(AdminPrivateRoute);
