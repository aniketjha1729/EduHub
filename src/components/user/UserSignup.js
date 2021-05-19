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
        <div className="usersignup">
            <div className="signup-container">
                <div className="card signup-card">
                    <div className="card-body">
                        <div className="circle"></div>
                        <header className="signup-head text-center">
                            <i className="fas fa-user fa-2x"></i>
                            <p>Sign Up</p>
                        </header>
                        <form action="" className="main-form text-center">
                            <div className="form-group my-0">
                                <label className="my-0">
                                    <i className="fas fa-user signup-icon"></i>
                                    <input
                                        type="text"
                                        className="signup-input"
                                        placeholder="Name"
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
                                    />
                                </label>
                            </div>

                            <div className="form-group my-0">
                                <label className="my-0">
                                    <i className="fas fa-lock signup-icon"></i>
                                    <input
                                        type="password"
                                        className="signup-input"
                                        placeholder="password"
                                    />
                                </label>
                            </div>
                            <Row className="spacing">
                                <Col>
                                    <div class="custom-select" >
                                        <select className="drop">
                                            <option value="0">Gender:</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>

                                        </select>
                                    </div>

                                </Col>
                                <Col>
                                    <div class="custom-select" >
                                        <select className="drop">
                                            <option value="0">Role:</option>
                                            <option value="Teacher">Teacher</option>
                                            <option value="Student">Student</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="spacing">
                                <Col>

                                    <div class="custom-select" >
                                        <select className="drop">
                                            <option value="0">Select Year:</option>
                                            <option value="1">First Year</option>
                                            <option value="2">Second Year</option>
                                            <option value="3">Third Year</option>
                                            <option value="4">Fourth Year</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>


                                    <div class="custom-select" >
                                        <select className="drop">
                                            <option value="0">Department:</option>
                                            <option value="Teacher">CSE</option>
                                            <option value="Student">ECE</option>
                                            <option value="Student">IT</option>

                                        </select>
                                    </div>
                                </Col>
                            </Row>



                            <label className="signup-check_1">
                                <input type="checkbox" />
                    &nbsp;Remember Me
                  </label>
                            <div className="form-group">
                                <label>
                                    <input
                                        type="button"
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
}


export default UserSignup;
