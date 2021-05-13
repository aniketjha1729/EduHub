import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import axios from "../../api/axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import AdminNoticeCreateForm from "../../components/admin/AdminNoticeCreateForm";

const AdminCreateNotice = () => {
  

  return (
    <>
      <Navbar/>
      <AdminNoticeCreateForm />
    </>
  );
};

export default AdminCreateNotice;
