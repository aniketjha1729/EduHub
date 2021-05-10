import React, { useState, useEffect } from "react";
import "./css/adminDashboard.css";
import axios from "../../api/axios";

const AdminDashboardTable = (props) => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const { data } = await axios.get("/admin/allUsers");
        console.log(data);
        setAllUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUser();
  }, []);

  return (
    <>
      {allUser ? (
        <div>
          <div className="row justify-content-around dashborad_right_menu">
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.totalUser}</b>
              <div>
                <i class="fas fa-users"></i> &nbsp;{props.userCount}
              </div>
            </div>
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.verifiedUser}</b>
              <div>
                <i class="fas fa-users-cog"></i> &nbsp;{props.noOfVerifiedUser}
              </div>
            </div>
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.teacher}</b>
              <div>
                <i class="fas fa-comments"></i> &nbsp;{props.noOfTeacher}
              </div>
            </div>
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.student}</b>
              <div>
                <i class="fas fa-comments"></i> &nbsp;{props.noOfStudent}
              </div>
            </div>
          </div>
          <div className="dashborad_right_table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      {user.isVerified ? (
                        <button type="button" className="btn btn-success">
                          Verified
                        </button>
                      ) : (
                        <button type="button" className="btn btn-warning">
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminDashboardTable;
