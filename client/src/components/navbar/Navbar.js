import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/admin";

const Navbar = ({ logout }) => {
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
                  Admin
                </Link>
              </li>
              <li class="nav-item">
                <a onClick={logout} href="" class="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navbar);
