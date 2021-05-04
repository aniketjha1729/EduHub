import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import axios from "../../api/axios";
const Navbar = () => {
  useEffect(() => {
    const apiCall = async () => {
      try {
        axios.get("/user/test").then(({data}) => {
          console.log(data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);
  return <div className="navbar_main">Navbar</div>;
};

export default Navbar;
