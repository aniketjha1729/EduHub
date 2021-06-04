import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import AdminDashboardContainer from "../../components/admin/AdminDashboard";
import useLoader from "../../components/loader/useLoader";

const AdminDashboard = () => {
  const [totalUserCount, setTotalUserCount] = useState();
  const [totalNoticeCount, setNoticeCount] = useState();
  const [verfiedNoticeCount, setverfiedNoticeCount] = useState();
  const [verfiedUserCount, setVerfiedUserCount] = useState();
  const [teacherCount, setTeacherCount] = useState();
  const [noticeByAdminCount, setnoticeByAdminCount] = useState();
  const [noticeByStudentCount, setnoticeByStudentCount] = useState();
  const [noticeByTeacherCount, setnoticeByTeacherCount] = useState();
  const [studentCount, setStudentCount] = useState();
  const [csestudentCount, setCseStudentCount] = useState();
  const [itstudentCount, setItStudentCount] = useState();
  const [ecestudentCount, setEceStudentCount] = useState();
  const [civilstudentCount, setCivilStudentCount] = useState();
  const [eestudentCount, setEeStudentCount] = useState();
  const [mechstudentCount, setMechStudentCount] = useState();
  const [loader, showLoader, hideLoader] = useLoader();

  useEffect(() => {
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
        let cse=0,it=0,ece=0,civil=0,ee=0,mech=0;
        data.map((data)=>{
          if(data.department=="CSE"){
            cse++;
          }else if(data.department=="IT"){
            it++;
          }else if(data.department=="IT"){
            it++;
          }else if(data.department=="ECE"){
            ece++;
          }else if(data.department=="CIVIL"){
            civil++;
          }else if(data.department=="EE"){
            ee++;
          }else if(data.department=="MECH"){
            mech++;
          }
        })
        setStudentCount(studentCount.length);
        setCseStudentCount(cse);
        setEceStudentCount(ece);
        setItStudentCount(it);
        setEeStudentCount(ee);
        setCivilStudentCount(civil);
        setMechStudentCount(mech);
        hideLoader();
      } catch (err) {
        console.log(err);
      }
    };
    const getAllNotice = async () => {
      showLoader();
      try {
        const { data } = await axios.get("/admin/notices");
        setNoticeCount(data.length);
        let verifedNotice = 0;
        let noticeByTeacher=0;
        let noticeByAdmin=0;
        let noticeByStudent=0;
        data.map((data) => {
          if (data.isVerified) {
            verifedNotice++;
          }
          if(data.postedBy=="admin"){
            noticeByAdmin++;
          }else if (data.postedBy=="teacher"){
            noticeByTeacher++;
          }else{
            noticeByStudent++;
          }
        });
        setverfiedNoticeCount(verifedNotice);
        setnoticeByAdminCount(noticeByAdmin);
        setnoticeByStudentCount(noticeByStudent);
        setnoticeByTeacherCount(noticeByTeacher);
      } catch (err) {}
    };
    getAllUser();
    getAllNotice();
  }, []);
  return (
    <>
      <AdminNavbar />
      <div>
        <AdminDashboardContainer
          totalUser="Total User"
          userCount={totalUserCount}
          noOfVerifiedUser={verfiedUserCount}
          noOfPendingUser={totalUserCount - verfiedUserCount}
          noOfTeacher={teacherCount}
          noOfStudent={studentCount}
          notice="Total Notice"
          noticeCount={totalNoticeCount}
          verfiedNoticeCount={verfiedNoticeCount}
          pendingNoticeCount={totalNoticeCount - verfiedNoticeCount}
          noticeByAdminCount={noticeByAdminCount}
          noticeByStudentCount={noticeByStudentCount}
          noticeByTeacherCount={noticeByTeacherCount}
          csestudentCount={csestudentCount}
          itstudentCount={itstudentCount}
          ecestudentCount={ecestudentCount}
          civilstudentCount={civilstudentCount}
          eestudentCount={eestudentCount}
          mechstudentCount={mechstudentCount}
        />
        {loader}
      </div>
    </>
  );
};

export default AdminDashboard;
