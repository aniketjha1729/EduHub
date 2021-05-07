import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogin } from "../../redux/actions/admin";

const AdminSignIn = ({ adminLogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [errormsg, setErrormsg] = useState("");

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    adminLogin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }
  return (
    <div className="signin">
      <div
        className="card signin_card"
        style={{
          padding: "3%",
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "5px 10px 20px #888888",
        }}
      >
        <h2>Admin Panel</h2>
        <br />
        {errormsg ? (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {errormsg}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrormsg("")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <form className="form" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={onChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={onChange}
          />
          <br />
          <Link to="/reset">Forgot Password?</Link>
          <br />
          <input type="submit" className="btn btn-primary" value="Login" />
          <br />
        </form>
      </div>
    </div>
  );
};

AdminSignIn.propTypes = {
  adminLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.admin.isAuthenticated,
});

export default connect(mapStateToProps, { adminLogin })(AdminSignIn);
