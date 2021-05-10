import React, { useEffect, useState } from "react";
import "../../components/admin/css/adminDashboard.css";
import AdminDashboardTable from "../../components/admin/AdminDashboardTable";
import axios from "../../api/axios";
const AdminDashboard = () => {
  const [allUser, setAllUser] = useState([])
  const [totalUserCount, setTotalUserCount] = useState();
  const [verfiedUserCount, setVerfiedUserCount] = useState();
  const [teacherCount, setTeacherCount] = useState();
  const [studentCount, setStudentCount] = useState();

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const { data } = await axios.get("/admin/allUsers");
        
        setAllUser(data)
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
          if (user.role==="teacher") {
            teacherCount.push(user);
          }
        });
        setTeacherCount(teacherCount.length);
        const studentCount = [];
        data.map((user) => {
          if (user.role==="student") {
            studentCount.push(user);
          }
        });
        setStudentCount(studentCount.length);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUser();
  }, []);
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
              alluser={allUser}
              totalUser="Total User"
              userCount={totalUserCount}
              verifiedUser="Verfied User"
              noOfVerifiedUser={verfiedUserCount}
              teacher="Teacher"
              noOfTeacher={teacherCount}
              student="Student"
              noOfStudent={studentCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
