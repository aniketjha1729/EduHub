import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserPrivateRoute = ({
  component: Component,
  user: { isAuthenticated, userAuthToken },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && userAuthToken != null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

UserPrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserPrivateRoute);
