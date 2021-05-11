import React, { useState, useEffect } from "react";
import "./css/adminDashboard.css";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";

const AdminNoticesTable = (props) => {
  const [allNotices, setAllNotices] = useState([]);
  const [dataChange, setDataChange] = useState();
  const [loader, showLoader, hideLoader] = useLoader();

  useEffect(() => {
    const getAllNotices = async () => {
      try {
        const { data } = await axios.get("/admin/notices");
        console.log(data);
        setAllNotices(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllNotices();
    props.getAllNotices();
  }, [dataChange]);

  const verifyNotice = async (id) => {
    showLoader();
    const body = { verify: true };
    try {
      const { data } = await axios.put(`/admin/verifynotice/${id}`, body);
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
      const { data } = await axios.put(`/admin/verifynotice/${id}`, body);
      setDataChange(data);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNotice = async (id) => {
    showLoader();
    try {
      const { data } = await axios.delete(`/admin/deletenotice/${id}`);
      setDataChange(data);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <>
      {allNotices ? (
        <div className="container dashboardData">
          <div className="row justify-content-around dashborad_right_menu">
            <div className="col-3 dashborad_right_menu_item">
              <b>{props.totalNotice}</b>
              <div>
                <i class="fas fa-users"></i> &nbsp;{props.totalNoticesCount}
              </div>
            </div>
            <div className="col-3 dashborad_right_menu_item">
              <b>{props.verifiedNotice}</b>
              <div>
                <i class="fas fa-user-check"></i> &nbsp;
                {props.verfiedNoticeCount}
              </div>
            </div>
            <div className="col-3 dashborad_right_menu_item">
              <b>{props.unverfiedNotice}</b>
              <div>
                <i class="fas fa-chalkboard-teacher"></i> &nbsp;
                {props.unverfiedNoticeCount}
              </div>
            </div>
          </div>
          <div className="dashborad_right_table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Notice</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allNotices.map((notice, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{notice.content}</td>
                    <td>{notice.date}</td>
                    <td>
                      {notice.isVerified ? (
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
                        onClick={() => deleteNotice(notice._id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i class="fas fa-trash"></i> &nbsp; Delete
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      {!notice.isVerified ? (
                        <button
                          onClick={() => verifyNotice(notice._id)}
                          type="button"
                          className="btn btn-primary"
                        >
                          <i class="fas fa-arrow-right"></i> &nbsp; Verify
                        </button>
                      ) : (
                        <button
                          onClick={() => unVerify(notice._id)}
                          type="button"
                          className="btn btn-secondary"
                        >
                          <i class="fas fa-ban"></i> &nbsp; Spam
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

export default AdminNoticesTable;