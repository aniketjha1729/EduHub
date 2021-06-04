import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import "./css/adminDashboard.css";
const AdminDashboard = (props) => {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const getAllDaysOfMonth = () => {
      let date = new Date(Date.UTC(2021, 6, 1));
      let days = [];
      while (date.getUTCMonth() === 6) {
        days.push(
          new Date(date).toLocaleString("en-us", {
            month: "short",
            day: "numeric",
          })
        );
        date.setUTCDate(date.getUTCDate() + 1);
      }
      setDates(days);
    };
    getAllDaysOfMonth();
  }, []);
  return (
    <div className="admin-dashboard">
      <div className="row">
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header text-center">
              {props.totalUser} : {props.userCount}
            </div>
            <div className="card-body">
              <Doughnut
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: ["Teacher", "Student", "Verified", "Pending"],
                  datasets: [
                    {
                      data: [
                        props.noOfTeacher,
                        props.noOfStudent,
                        props.noOfVerifiedUser,
                        props.noOfPendingUser,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(75, 192, 192)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header text-center">Featured</div>
            <div className="card-body">
              <Doughnut
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: ["Teacher", "Student", "Verified", "Pending"],
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [30, 300, 266, 64],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(75, 192, 192)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header text-center">Featured</div>
            <div className="card-body">
              <Doughnut
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: ["Teacher", "Student", "Verified", "Pending"],
                  datasets: [
                    {
                      label: "# of Votes",
                      data: [30, 300, 266, 64],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(75, 192, 192)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-8">
          <div className="card" style={{ width: "100%", height: "400px" }}>
            <div class="card-header text-center">Featured</div>
            <div className="card-body">
              <Line
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: dates,
                  datasets: [
                    {
                      label: "",
                      data: [
                        2, 5, 10, 4, 1, 0, 5, 6, 5, 7, 8, 10, 12, 4, 2, 2, 2, 2,
                        4, 6, 7, 4, 3, 5, 10, 14, 11, 10, 3, 0,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(75, 192, 192)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header text-center">
              {props.notice} : {props.noticeCount}
            </div>
            <div className="card-body">
              <Doughnut
                height={200}
                data={{
                  labels: [
                    "Verified",
                    "Pending",
                    "ByTeacher",
                    "ByStudent",
                    "ByAdmin",
                  ],
                  datasets: [
                    {
                      data: [
                        props.verfiedNoticeCount,
                        props.pendingNoticeCount,
                        props.noticeByTeacherCount,
                        props.noticeByStudentCount,
                        props.noticeByAdminCount,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(75, 192, 192)",
                        "rgba(255, 206, 86)",
                        "rgba(150, 255, 125)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(150, 255, 125, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "100%", height: "400px" }}>
            <div class="card-header text-center">User By Department</div>
            <div className="card-body">
              <Bar
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: ["CSE", "IT", "ECE", "CIVIL", "EE", "MECH"],
                  datasets: [
                    {
                      label: "",
                      data: [
                        props.csestudentCount,
                        props.itstudentCount,
                        props.ecestudentCount,
                        props.civilstudentCount,
                        props.eestudentCount,
                        props.mechstudentCount,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(75, 192, 192)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default AdminDashboard;
