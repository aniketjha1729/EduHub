import React, { useEffect, useState } from "react";
import "../../components/admin/css/adminDashboard.css";
import AdminDashboardTable from "../../components/admin/AdminDashboardTable";
import axios from "../../api/axios";

const AdminDashboard = () => {
  const [allUser, setAllUser] = useState([]);
  const [totalUserCount, setTotalUserCount] = useState();
  const [verfiedUserCount, setVerfiedUserCount] = useState();
  const [teacherCount, setTeacherCount] = useState();
  const [studentCount, setStudentCount] = useState();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const { data } = await axios.get("/admin/allUsers");
      setAllUser(data);
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <br />
      <AdminDashboardTable
        alluser={allUser}
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
    </div>
  );
};

export default AdminDashboard;
