import React, {useState } from "react";
import "../../components/admin/css/adminDashboard.css";
import AdminDashboardTable from "../../components/admin/AdminDashboardTable";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";
import AdminNavbar from "../../components/navbar/AdminNavbar";

const AdminDashboard = () => {
  const [totalUserCount, setTotalUserCount] = useState();
  const [verfiedUserCount, setVerfiedUserCount] = useState();
  const [teacherCount, setTeacherCount] = useState();
  const [studentCount, setStudentCount] = useState();
  const [loader, showLoader, hideLoader] = useLoader();

  const getAllUser = async () => {
    showLoader();
    try {
      const { data } = await axios.get("/admin/allUsers");
      setTotalUserCount(data.length);
      const verfiedUser = [];
      data.map((user) => {
        if (user.isVerified) {
          verfiedUser.push(user);
        }
      });
      setVerfiedUserCount(verfiedUser.length);
      const teacherCount = [];
      data.map((user) => {
        if (user.role === "teacher") {
          teacherCount.push(user);
        }
      });
      setTeacherCount(teacherCount.length);
      const studentCount = [];
      data.map((user) => {
        if (user.role === "student") {
          studentCount.push(user);
        }
      });
      setStudentCount(studentCount.length);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container" >
        <br />
        <AdminDashboardTable
          totalUser="Total User"
          userCount={totalUserCount}
          verifiedUser="Verfied User"
          noOfVerifiedUser={verfiedUserCount}
          teacher="Teachers"
          noOfTeacher={teacherCount}
          student="Students"
          noOfStudent={studentCount}
          getAllUser={getAllUser}
        />
        {loader}
      </div>
    </>
  );
};

export default AdminDashboard;
