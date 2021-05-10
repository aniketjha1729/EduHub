import React, { useState, useEffect } from "react";
import "./css/adminDashboard.css";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";

const AdminDashboardTable = (props) => {
  const [allUser, setAllUser] = useState([]);
  const [dataChange, setDataChange] = useState();
  const [loader, showLoader, hideLoader] = useLoader();

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
    props.getAllUser();
  }, [dataChange]);

  const verifyUser = async (id) => {
    showLoader();
    const body = { verify: true };
    try {
      const { data } = await axios.put(`/admin/verify/${id}`, body);
      setDataChange(data);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  const unVerify = async (id) => {
    showLoader();
    const body = { verify: false };
    try {
      const { data } = await axios.put(`/admin/verify/${id}`, body);
      setDataChange(data);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    showLoader();
    try {
      const { data } = await axios.delete(`/admin/deleteUser/${id}`);
      setDataChange(data);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {allUser ? (
        <div className="container dashboardData">
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
                <i class="fas fa-user-check"></i> &nbsp;{props.noOfVerifiedUser}
              </div>
            </div>
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.teacher}</b>
              <div>
                <i class="fas fa-chalkboard-teacher"></i> &nbsp;
                {props.noOfTeacher}
              </div>
            </div>
            <div className="col-2 dashborad_right_menu_item">
              <b>{props.student}</b>
              <div>
                <i class="fas fa-user"></i> &nbsp;{props.noOfStudent}
              </div>
            </div>
          </div>
          <div className="dashborad_right_table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      {user.isVerified ? (
                        <button type="button" className="btn btn-success">
                          <i class="fas fa-user-check"></i> &nbsp;Verified
                        </button>
                      ) : (
                        <button type="button" className="btn btn-warning">
                          <i class="fas fa-flask"></i> &nbsp; Pending
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => deleteUser(user._id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i class="fas fa-trash"></i> &nbsp; Delete
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      {!user.isVerified ? (
                        <button
                          onClick={() => verifyUser(user._id)}
                          type="button"
                          className="btn btn-primary"
                        >
                          <i class="fas fa-arrow-right"></i> &nbsp; Verify
                        </button>
                      ) : (
                        <button
                          onClick={() => unVerify(user._id)}
                          type="button"
                          className="btn btn-secondary"
                        >
                          <i class="fas fa-arrow-left"></i> &nbsp; Revert
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
      {loader}
    </>
  );
};

export default AdminDashboardTable;
