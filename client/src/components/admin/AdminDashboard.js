import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./css/adminDashboard.css";
import AdminDashboardTable from "./AdminDashboardTable";

const AdminDashboard = () => {
  
  return (
    <div className="container">
      <div className="dashboard">
        <div className="row">
          <div className="col-2 dashborad_left">
            <br />
            <div className="dashborad_left_header">
              <i class="fas fa-chalkboard-teacher" size="3x"></i> &nbsp;&nbsp;
              <b>EduHub</b>
            </div>
            <div className="dashborad_left_menu">
              <div className="dashborad_left_menu_item">User</div>
              <div className="dashborad_left_menu_item">Notices</div>
              <div className="dashborad_left_menu_item">CreateNotice</div>
            </div>
          </div>
          <div className="col-10 dashborad_right">
            <br />
            <AdminDashboardTable
              totalUser="Total User"
              userCount="130"
              verifiedUser="Verfied User"
              noOfVerifiedUser="50"
              teacher="Teacher"
              noOfTeacher="30"
              student="Student"
              noOfStudent="52"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
