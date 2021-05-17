import React, { useState, useEffect } from "react";
import "./css/adminDashboard.css";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";

const AdminDashboardTable = (props) => {
  const [allUser, setAllUser] = useState([]);
  const [dataChange, setDataChange] = useState();
  const [loader, showLoader, hideLoader] = useLoader();
  const [filterType, setFilterType] = useState("");

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

  const fieldChange = async (e) => {
    if (e.target.value == "verified") {
      setFilterType(e.target.value);
      try {
        const { data } = await axios.get("/admin/allUsers");
        const filteredData = data.filter((item) => item.isVerified == true);
        console.log(filteredData);
        setAllUser(filteredData);
      } catch (err) {
        console.log(err);
      }
    } else {
      setFilterType(e.target.value);
      try {
        const { data } = await axios.get("/admin/allUsers");
        const filteredData = data.filter((item) => item.isVerified == false);
        console.log(filteredData);
        setAllUser(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <div className="row justify-content-around dashborad_right_menu divSticky">
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
            <div className="col-2">
              <select
                className="drop"
                name="filter"
                value={filterType}
                onChange={(value) => fieldChange(value)}
              >
                <option value="">Filter</option>
                <option value={"verified"}>Verified</option>
                <option value={"pending"}>Pending</option>
              </select>
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
                  <th className="text-center">S.No</th>
                  <th className="text-center" scope="col">
                    Name
                  </th>
                  <th className="text-center" scope="col">
                    Email
                  </th>
                  <th className="text-center" scope="col">
                    Role
                  </th>
                  <th className="text-center" scope="col">
                    Department
                  </th>
                  <th className="text-center" scope="col">
                    Year
                  </th>
                  <th className="text-center" scope="col">
                    Status
                  </th>
                  <th className="text-center" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user, index) => (
                  <tr key={index} className={index % 2 == 0 ? "tdcolors" : ""}>
                    <td className="text-center">{index}</td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.role}</td>
                    <td className="text-center">{user.department}</td>
                    <td className="text-center">{user.year}</td>
                    <td className="text-center">
                      {user.isVerified ? (
                        <button type="button" className="btn btn-success">
                          <i className="fas fa-user-check"></i> &nbsp;Verified
                        </button>
                      ) : (
                        <button type="button" className="btn btn-warning">
                          <i className="fas fa-flask"></i> &nbsp; Pending
                        </button>
                      )}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteUser(user._id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="fas fa-trash"></i> &nbsp; Delete
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      {!user.isVerified ? (
                        <button
                          onClick={() => verifyUser(user._id)}
                          type="button"
                          className="btn btn-primary"
                        >
                          <i className="fas fa-arrow-right"></i> &nbsp; Verify
                        </button>
                      ) : (
                        <button
                          onClick={() => unVerify(user._id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          <i className="fas fa-ban"></i> &nbsp; Block
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
