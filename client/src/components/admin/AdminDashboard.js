import React from "react";
import "./css/adminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="row">
          <div className="col-2 dashborad_left">
            <div>Menu</div>
          </div>
          <div className="col-9 dashborad_right">Actions Area</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
