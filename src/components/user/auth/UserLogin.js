import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../../redux/actions/user";
import "../css/userlogin.css";

const UserLogin = ({ userLogin, isAuthenticated, errors }) => {
  const [formData, setFormData] = useState({
    email: "test3@gmail.com",
    password: "Test@1234",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="userLogin">
      <div className="login-container">
        <div className="card login-card">
          <div className="card-body">
            <header className="login-head text-center">
              <i className="fas fa-user fa-2x"></i>
              <p>Login</p>
            </header>
            {errors ? (
              <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                {errors}
              </div>
            ) : (
              ""
            )}
            <form onSubmit={onSubmit} className="main-form text-center">
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-user login-icon"></i>
                  <input
                    type="email"
                    className="login-input"
                    placeholder=" Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-lock login-icon"></i>
                  <input
                    type="password"
                    className="login-input"
                    name="password"
                    placeholder=" Password"
                    value={password}
                    onChange={onChange}
                  />
                </label>
              </div>
              <label className="login-check_1">
                <input type="checkbox" />
                &nbsp;Remember Me
              </label>
              <div className="form-group">
                <label>
                  <input
                    type="submit"
                    className="form-control login-button"
                    value="Login"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UserLogin.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  errors: state.user.errors,
});

export default connect(mapStateToProps, { userLogin })(UserLogin);
