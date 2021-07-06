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

  const [cseQues, setCseQues] = useState();
  const [itQues, setItQues] = useState();
  const [eceQues, setEceQues] = useState();
  const [civilQues, setCivilQues] = useState();
  const [eeQues, setEEQues] = useState();
  const [mechQues, setMechQues] = useState();

  const [subQues, setSubQues] = useState();
  const [dbmsQues, setDbmsQues] = useState();
  const [dsQues, setDSQues] = useState();
  const [mathsQues, setMathsQues] = useState();
  const [cdQues, setCdQues] = useState();
  const [deQues, setDeQues] = useState();
  const [meQues, setMeQues] = useState();

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
          if (user.role === "Teacher") {
            teacherCount.push(user);
          }
        });
        setTeacherCount(teacherCount.length);
        const studentCount = [];
        data.map((user) => {
          if (user.role === "Student") {
            studentCount.push(user);
          }
        });
        let cse = 0,
          it = 0,
          ece = 0,
          civil = 0,
          ee = 0,
          mech = 0;
        data.map((data) => {
          if (data.department == "CSE") {
            cse++;
          } else if (data.department == "IT") {
            it++;
          } else if (data.department == "ECE") {
            ece++;
          } else if (data.department == "CIVIL") {
            civil++;
          } else if (data.department == "EE") {
            ee++;
          } else if (data.department == "MECH") {
            mech++;
          }
        });
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
        let noticeByTeacher = 0;
        let noticeByAdmin = 0;
        let noticeByStudent = 0;
        data.map((data) => {
          if (data.isVerified) {
            verifedNotice++;
          }
          if (data.postedBy == "admin") {
            noticeByAdmin++;
          } else if (data.postedBy == "Teacher") {
            noticeByTeacher++;
          } else {
            noticeByStudent++;
          }
        });
        setverfiedNoticeCount(verifedNotice);
        setnoticeByAdminCount(noticeByAdmin);
        setnoticeByStudentCount(noticeByStudent);
        setnoticeByTeacherCount(noticeByTeacher);
      } catch (err) {}
    };
    const getAllForumData = async () => {
      showLoader();
      try {
        const { data } = await axios.get("admin/forum/allQuestion");
        setSubQues(data.length);

        let filteredData;
        filteredData = data.filter((item) => item.subject == "Compiler Design");
        setCdQues(filteredData.length);

        filteredData = data.filter(
          (item) => item.subject == "Digital Electornics"
        );
        setDeQues(filteredData.length);

        filteredData = data.filter((item) => item.subject == "Mechanics");
        setMeQues(filteredData.length);

        filteredData = data.filter((item) => item.subject == "DS-ALGO");
        setDSQues(filteredData.length);

        filteredData = data.filter((item) => item.subject == "Maths");
        setMathsQues(filteredData.length);

        filteredData = data.filter((item) => item.subject == "DBMS");
        setDbmsQues(filteredData.length);

        filteredData = data.filter((item) => item.postedBy.department == "CSE");
        setCseQues(filteredData.length);

        filteredData = data.filter((item) => item.postedBy.department == "IT");
        setItQues(filteredData.length);

        filteredData = data.filter((item) => item.postedBy.department == "ECE");
        setEceQues(filteredData.length);

        filteredData = data.filter(
          (item) => item.postedBy.department == "CIVIL"
        );
        setCivilQues(filteredData.length);

        filteredData = data.filter((item) => item.postedBy.department == "EE");
        setEEQues(filteredData.length);

        filteredData = data.filter(
          (item) => item.postedBy.department == "MECH"
        );
        setMechQues(filteredData.length);
      } catch (err) {}
    };
    getAllForumData();
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
          subQues={subQues}
          cdQues={cdQues}
          dbmsQues={dbmsQues}
          dsQues={dsQues}
          mathsQues={mathsQues}
          deQues={deQues}
          meQues={meQues}
          cseQues={cseQues}
          itQues={itQues}
          eceQues={eceQues}
          civilQues={civilQues}
          eeQues={eeQues}
          mechQues={mechQues}
        />
        {loader}
      </div>
    </>
  );
};

export default AdminDashboard;
