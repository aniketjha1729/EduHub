import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/admin";

const Navbar = ({ logout, isAuthenticated, admin: { user } }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
          <a href="#" class="navbar-brand">
            EduHub
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  {user ? (
                    user.user.name
                  ) : (
                    <Link to="/admin/signin" class="nav-link">
                      Login
                    </Link>
                  )}
                </Link>
              </li>
              {isAuthenticated ? (
                <li class="nav-item">
                  <a onClick={logout} href="" class="nav-link">
                    Logout
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

//for action to be called
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

//for fetching the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.admin.isAuthenticated,
  admin: state.admin,
});

export default connect(mapStateToProps, { logout })(Navbar);
