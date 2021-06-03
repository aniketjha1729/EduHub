import React from "react";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import AdminDashboardContainer from "../../components/admin/AdminDashboard";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div><AdminDashboardContainer/></div>
    </>
  );
};

export default AdminDashboard;
