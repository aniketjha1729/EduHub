import React, { useEffect } from "react";
import "./css/navbar.css";
import axios from "../../api/axios";
const Navbar = () => {
  useEffect(() => {
    const apiCall = async () => {
      try {
        axios.get("/user/test").then(({ data }) => {
          console.log(data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
          Aniket
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="" class="nav-link">
                Users
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                Users
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
