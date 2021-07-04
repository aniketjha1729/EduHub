import React from "react";
import "./style.css";
const Error = ({ error }) => {
  return (
    <div className="errorContainer">
      <div className="errorDiv text-center">
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
