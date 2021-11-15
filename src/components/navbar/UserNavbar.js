import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserNavbar = ({
  logout,
  isAuthenticated,
  adminisAuthenticated,
  user: { user },
}) => {
  // console.log(adminisAuthenticated);
  const [toogleUserInfo, setToogleUserInfo] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg userDivSticky userNav">
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>
          <b>EduHub</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {isAuthenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="user-nav-link"
                  onClick={() => setToogleUserInfo(!toogleUserInfo)}
                >
                  <span>{user ? user.name : ""}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" onClick={logout} className="user-nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              {!adminisAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="user-nav-link"
                      data-toggle="collapse"
                      data-target="#navbarMenu"
                    >
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/signup"
                      className="user-nav-link"
                      data-toggle="collapse"
                      data-target="#navbarMenu"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          )}
        </div>
      </nav>
      {toogleUserInfo ? (
        <div className="userInfoContainer text-center">
          <div className="row">
            <div className="col">
              <Link
                to="/profile"
                onClick={() => setToogleUserInfo(!toogleUserInfo)}
                data-toggle="collapse"
                data-target="#navbarMenu"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <Link
                to="/messenger"
                onClick={() => setToogleUserInfo(!toogleUserInfo)}
                data-toggle="collapse"
                data-target="#navbarMenu"
              >
                Messenger
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">Groups</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

UserNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  adminisAuthenticated: state.admin.isAuthenticated,
  user: state.user,
});

export default connect(mapStateToProps, { logout })(UserNavbar);
