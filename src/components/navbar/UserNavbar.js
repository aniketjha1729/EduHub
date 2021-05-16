import React from "react";
import "./navbar.css";
const UserNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary divSticky">
        <a href="" className="navbar-brand">
          EduHub
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="" className="nav-link">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Users
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
