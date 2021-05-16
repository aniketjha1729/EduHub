import React from "react";
import "./css/userlogin.css";
const UserLogin = () => {
  return (
    <div className="userLogin">
      <div className="login-container">
        <div className="card login-card">
          <div className="card-body">
            <div className="circle"></div>
            <header className="login-head text-center">
              <i className="fas fa-user fa-2x"></i>
              <p>Login</p>
            </header>
            <form action="" className="main-form text-center">
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-user login-icon"></i>
                  <input
                    type="text"
                    className="login-input"
                    placeholder="userName"
                  />
                </label>
              </div>
              <div className="form-group my-0">
                <label className="my-0">
                  <i className="fas fa-lock login-icon"></i>
                  <input
                    type="password"
                    className="login-input"
                    placeholder="password"
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
                    type="button"
                    className="form-control login-button"
                    value="Login"
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

export default UserLogin;
