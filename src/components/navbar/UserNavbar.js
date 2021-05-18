import React from "react";
import "./navbar.css";
const UserNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary userDivSticky">
        <a href="" className="navbar-brand" style={{ color: "white" }}>
          <b>EduHub</b>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
