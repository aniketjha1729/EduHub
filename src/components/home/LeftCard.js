import React from "react";
import "./style.css";
const LeftCard = () => {
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="left-card-profileCard">
          <img
            className="left-card-ProfileIcon"
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            alt=""
          />
        </div>
        <div className="card-body left-card-profileDes">

          <p className="card-text left-profileDescription">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <br />
      <div className="card" style={{ width: "100%" }}>
        <div className="card-header">Featured</div>
        
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
