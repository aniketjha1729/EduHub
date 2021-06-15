import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/navbar/AdminNavbar";
import "./home.css";

const Teams = () => {return(
<div className="container team-container text-center"><AdminNavbar />
  <div className="container" style={{"padding-top":"60px"}}> 
    <div className="row">
      <div className="col-5 teamCol teamName teamCardUp teamCardLeft">
        <img 
          className="teamPic"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        ></img>
          Aniket Kumar
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamName teamCardUp teamCardRight">
        <img
          className="teamPic"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        ></img>
          Amit Rai
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamCardDown teamCardLeft teamNameID">
      <a href="https://github.com/aniketjha1729" style={{color:"black"}}>
        <i className="fab fa-github fa-2x">
          {" "}
          https://github.com/aniketjha1729
        </i>
      </a>
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamCardDown teamCardRight teamNameID">
      <a href="https://github.com/ardev472" style={{color:"black"}}>
        <i className="fab fa-github fa-2x">
          {" "}
          https://github.com/ardev472
        </i>
      </a>
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamName teamCardUp teamCardLeft">
        <img className="teamPic" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
          Amit Raj Singh
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamName teamCardUp teamCardRight">
        <img className="teamPic" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
          Sharad Baid
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamCardDown teamCardLeft teamNameID">
      <a href="https://github.com/Amit-CBS" style={{color:"black"}}>
        <i className="fab fa-github fa-2x">
          {" "}
          https://github.com/Amit-CBS
        </i>
      </a>
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamCardDown teamCardRight teamNameID">
      <a href="https://github.com/sharad16j" style={{color:"black"}}>
        <i className="fab fa-github fa-2x">
          {" "}
          https://github.com/sharad16j
        </i>
      </a>
      </div>
    </div>
  </div>
</div>
);};export default Teams;