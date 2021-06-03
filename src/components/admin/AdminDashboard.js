import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import "./css/adminDashboard.css";
const AdminDashboard = () => {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const getAllDaysOfMonth = () => {
      let date = new Date(Date.UTC(2021, 6, 1));
      let days = [];
      while (date.getUTCMonth() === 6) {
        days.push(new Date(date).toLocaleString('en-us',{month:'short', day:'numeric'}));
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
                      data: [2,5,10,4,1,0,5,6,5,7,8,10,12,4,2,2,2,2,4,6,7,4,3,5,10,14,20,10,3,0],
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
        <div className="col">
          <div className="card" style={{ width: "100%", height: "400px" }}>
            <div class="card-header text-center">Featured</div>
            <div className="card-body">
              <Bar
                options={{ maintainAspectRatio: false }}
                data={{
                  labels: ["CSE", "IT", "ECE", "CIVIL", "EE", "MECH"],
                  datasets: [
                    {
                      label: "",
                      data: [250, 280, 206, 104, 150, 80],
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
