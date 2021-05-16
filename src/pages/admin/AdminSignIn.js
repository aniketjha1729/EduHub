import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogin } from "../../redux/actions/admin";
import AdminNavbar from "../../components/navbar/AdminNavbar";

const AdminSignIn = ({ adminLogin, isAuthenticated, errors }) => {
  const [formData, setFormData] = useState({
    email: "admin@test.com",
    password: "admin@1234",
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
    return <Redirect to="/admin/users" />;
  }
  return (
    <>
      <AdminNavbar />
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
          {errors ? (
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {errors}
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
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={onChange}
            />
            <br />
            <br />
            <input type="submit" className="btn btn-primary" value="Login" />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

AdminSignIn.propTypes = {
  adminLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.admin.isAuthenticated,
  errors: state.admin.errors,
});

export default connect(mapStateToProps, { adminLogin })(AdminSignIn);
