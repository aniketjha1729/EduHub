import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";

import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "../../api/axios";
import "./css/adminCreateNotice.css";

const AdminNoticeCreateForm = () => {
  const history = useHistory();
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [state, setState] = useState({
    content: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { content } = state;
      if (content.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("content", content);

          setErrorMsg("");
          await axios.post("/admin/createnotice", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setState("");
          history.push("/admin/notices");
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container noticeUpload">
      <Form className="search-form" onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                name="content"
                value={state.content || ""}
                placeholder="Notice Content"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="upload-section">
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder("over")}
            onDragLeave={() => updateBorder("leave")}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Drag and drop a file OR click here to select a file</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong> {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form>
    </div>
  );
};

export default AdminNoticeCreateForm;
