import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import download from "downloadjs";
import "./style.css";
const NoticeCard = () => {
  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const [allNotices, setAllNotices] = useState([]);
  useEffect(() => {
    const getAllNotices = async () => {
      try {
        const { data } = await axios.get("/user/notices");
        const sortedData = data.sort(sortByDate);
        setAllNotices(sortedData);
      } catch (err) {
        console.log(err);
      }
    };
    getAllNotices();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`/user/downloadNotice/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      return download(result.data, filename, mimetype);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notice-container">
      {allNotices.map((notice, index) => (
        <div
          key={index}
          style={
            index % 2 == 0
              ? { backgroundColor: "#e7e7e7" }
              : { backgroundColor: "white" }
          }
        >
          <div className="card-body">
            <p className="card-text">
              <div className="notice-heading text-center">
                <b>{notice.heading}</b> &nbsp;
                <i
                  onClick={() =>
                    downloadFile(
                      notice._id,
                      notice.file_path,
                      notice.file_mimetype
                    )
                  }
                  className="fas fa-file-download"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="notice-postedBy text-center">
                {notice.postedBy}: {new Date(notice.date).toLocaleDateString()}
              </div>
              <div className="notice-description text-center">
                {notice.content}
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeCard;
