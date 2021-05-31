import React from "react";
import "./style.css";
const LeftCard = () => {
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="left-card-profileCard">
          <img
            className="left-card-ProfileIcon"
            src="https://images.unsplash.com/photo-1558899622-6e22c5d1c554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div className="card-body left-card-profileDes">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <br />
      <div className="card" style={{ width: "100%" }}>
        <div className="card-header">Featured</div>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <br />
      
    </div>
  );
};

export default LeftCard;
