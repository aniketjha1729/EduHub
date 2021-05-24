import React, { useState } from "react";
import "./css/usersignup.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userRegister } from "../../redux/actions/user";
const UserSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "",
    department: "",
    year: "",
    gender: "",
  });
  const { name, email, password, role, department, year, gender } = formData;
  const [errormsg, setErrormsg] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    // userLogin(email, password);
  };
  return (
    <div className="usersignup">
      <div className="signup-container">
        <div className="card signup-card">
          <div className="card-body">
            <div className="circle"></div>
            <header className="signup-head text-center">
              <i className="fas fa-user fa-2x"></i>
              <p>Sign Up</p>
            </header>
            <form onSubmit={onSubmit} className="main-form text-center">
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-user signup-icon"></i>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder=" Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-envelope signup-icon"></i>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-lock signup-icon"></i>
                  <input
                    type="password"
                    className="signup-input"
                    placeholder=" Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="row signup-spacing">
                <div className="col">
                  <select
                    className="drop"
                    name="gender"
                    value={gender}
                    onChange={onChange}
                  >
                    <option value="0">Gender:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    className="drop"
                    name="role"
                    value={role}
                    onChange={onChange}
                  >
                    <option value="">Role:</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
              </div>
              <div className="row signup-spacing1">
                <div className="col">
                  <select
                    className="drop"
                    name="year"
                    value={year}
                    onChange={onChange}
                  >
                    {role == "Teacher" ? (
                      <>
                        <option value="">Select Year:</option>
                        <option value="all">All</option>
                      </>
                    ) : (
                      <>
                        <option value="">Select Year:</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="col">
                  <select
                    className="drop"
                    name="department"
                    value={department}
                    onChange={onChange}
                  >
                    <option value="">Department:</option>
                    <option value="Teacher">CSE</option>
                    <option value="Student">ECE</option>
                    <option value="Student">IT</option>
                  </select>
                </div>
              </div>
              <div className="form-group signup-spacing">
                <label>
                  <input
                    type="submit"
                    className="form-control signup-button"
                    value="Signup"
                  />
                </label>
              </div>
              {/* <span className="check_1">Forget Password</span> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
