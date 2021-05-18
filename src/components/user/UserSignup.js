import React from "react";
import { UserLogin } from "./UserLogin"
import "./css/usersignup.css";


import {
    Container,
    Button,
    Row,
    Col,
    Form,
    FormControl
} from "react-bootstrap";

const UserSignup = () => {

    return (
        <div className="userLogin">
            <div className="login-container">
                <div className="card login-card">
                    <div className="card-body">
                        <div className="circle"></div>
                        <header className="login-head text-center">
                            <i className="fas fa-user fa-2x"></i>
                            <p>Sign Up</p>
                        </header>
                        <form action="" className="main-form text-center">
                            <div className="form-group my-0">
                                <label className="my-0">
                                    <i className="fas fa-user login-icon"></i>
                                    <input
                                        type="text"
                                        className="login-input"
                                        placeholder="Name"
                                    />
                                </label>
                            </div>
                            <div className="form-group my-0">
                                <label className="my-0">
                                    <i className="fas fa-envelope login-icon"></i>
                                    <input
                                        type="text"
                                        className="login-input"
                                        placeholder="Email"
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

                            <div class="custom-select" >
                                <select>
                                    <option value="0">Gender:</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                 
                                </select>
                            </div>
                            <br />
                            <div class="custom-select" >
                                <select>
                                    <option value="0">Role:</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Student">Student</option>
                                 
                                </select>
                            </div>
                            <br />
                            <div class="custom-select" >
                                <select>
                                    <option value="0">Select Year:</option>
                                    <option value="1">First Year</option>
                                    <option value="2">Second Year</option>
                                    <option value="3">Third Year</option>
                                    <option value="4">Fourth Year</option>
                                </select>
                            </div>
                            <br />




                            <label className="login-check_1">
                                <input type="checkbox" />
                    &nbsp;Remember Me
                  </label>
                            <div className="form-group">
                                <label>
                                    <input
                                        type="button"
                                        className="form-control login-button"
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
}


export default UserSignup;
