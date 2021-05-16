import React, { useState } from "react";
import "../../components/admin/css/adminDashboard.css";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import axios from "../../api/axios";
import useLoader from "../../components/loader/useLoader";
import AdminNoticesTable from "../../components/admin/AdminNoticesTable";

const AdminNotices = () => {
  const [totalNoticesCount, setTotalNoticesCount] = useState();
  const [verfiedNoticeCount, setVerfiedNoticeCount] = useState();
  const [unverfiedNoticeCount, setUnverfiedNoticeCount] = useState();
  const [loader, showLoader, hideLoader] = useLoader();

  const getAllNotices = async () => {
    showLoader();
    try {
      const { data } = await axios.get("/admin/notices");
      setTotalNoticesCount(data.length);
      const verifiedNotice = [];
      const unverifiedNotice = [];
      data.map((notice) => {
        if (notice.isVerified) {
          verifiedNotice.push(notice);
        } else {
          unverifiedNotice.push(notice);
        }
      });
      setVerfiedNoticeCount(verifiedNotice.length);
      setUnverfiedNoticeCount(unverifiedNotice.length);
      hideLoader();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <br />
        <AdminNoticesTable
          totalNotice="Total Notices"
          totalNoticesCount={totalNoticesCount}
          verifiedNotice="Verified Notices"
          verfiedNoticeCount={verfiedNoticeCount}
          unverfiedNotice="Pending"
          unverfiedNoticeCount={unverfiedNoticeCount}
          getAllNotices={getAllNotices}
        />
        {loader}
      </div>
    </>
  );
};

export default AdminNotices;
