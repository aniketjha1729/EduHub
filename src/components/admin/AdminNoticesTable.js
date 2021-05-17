import React, { useState, useEffect } from "react";
import "./css/adminDashboard.css";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";
import download from "downloadjs";

const AdminNoticesTable = (props) => {
  const [allNotices, setAllNotices] = useState([]);
  const [dataChange, setDataChange] = useState();
  const [loader, showLoader, hideLoader] = useLoader();
  const [filterType, setFilterType] = useState("");

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

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`/admin/downloadNotice/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      return download(result.data, filename, mimetype);
    } catch (error) {
      console.log(error);
    }
  };

  const fieldChange = async (e) => {
    if (e.target.value == "verified") {
      setFilterType(e.target.value);
      try {
        const { data } = await axios.get("/admin/notices");
        const filteredData = data.filter((item) => item.isVerified == true);
        console.log(filteredData);
        setAllNotices(filteredData);
      } catch (err) {
        console.log(err);
      }
    } else {
      setFilterType(e.target.value);
      try {
        const { data } = await axios.get("/admin/notices");
        const filteredData = data.filter((item) => item.isVerified == false);
        console.log(filteredData);
        setAllNotices(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <div className="row justify-content-around dashborad_right_menu divSticky">
            <div className="col-3 dashborad_right_menu_item">
              <b>{props.totalNotice}</b>
              <div>
                <i class="fas fa-users"></i> &nbsp;{props.totalNoticesCount}
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
                  <th className="text-center" scope="col">S.No</th>
                  <th className="text-center" scope="col">Heading</th>
                  <th className="text-center" scope="col">Date</th>
                  <th className="text-center" scope="col">Creator</th>
                  <th className="text-center" scope="col">Download</th>
                  <th className="text-center" scope="col">Status</th>
                  <th className="text-center" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allNotices.map((notice, index) => (
                  <tr key={index} className={index % 2 == 0 ? "tdcolors" : ""}>
                    <th className="text-center" scope="row">{index}</th>
                    <td className="text-center">{notice.content}</td>
                    <td className="text-center">{new Date(notice.date).toLocaleDateString()}</td>
                    <td className="text-center">{notice.postedBy}</td>
                    <td className="text-center">
                      <i
                        onClick={() =>
                          downloadFile(
                            notice._id,
                            notice.file_path,
                            notice.file_mimetype
                          )
                        }
                        className="fas fa-cloud-download-alt fa-2x"
                        style={{ cursor: "pointer" }}
                      ></i>
                      &nbsp;
                    </td>
                    <td className="text-center">
                      {notice.isVerified ? (
                        <i className="fas fa-clipboard-check fa-2x"></i>
                      ) : (
                        <i className="fas fa-flask fa-2x"></i>
                      )}
                    </td>
                    <td className="text-center">
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
                          <i className="fas fa-ban"></i> &nbsp; Spam
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
