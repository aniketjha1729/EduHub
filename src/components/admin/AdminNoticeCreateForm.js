import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "../../api/axios";
import "./css/adminDashboard.css";

const AdminNoticeCreateForm = () => {
  const history = useHistory();
  const [file, setFile] = useState(null); 
  const [previewSrc, setPreviewSrc] = useState("");
  const [state, setState] = useState({
    content: "",
    heading: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); 
  const dropRef = useRef();

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
    dropRef.current.style.border = "2px dashed rgb(213, 255, 134)";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed rgb(213, 255, 134)";
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { content, heading } = state;
      if (content.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("content", content);
          formData.append("heading", heading);
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
    <div className="noticeUpload main media-body">
      <Form className="search-form" onSubmit={handleOnSubmit}>
        <div style={{ width: "600px" }}>
          <div className="row shadow p-3 mb-5 bg-body rounded">
            <div className="col-sm-6">
              <Form.Group
                controlId="title"
                className="shadow p-3 mb-5 bg-body rounded"
              >
                <Form.Control
                  type="text"
                  name="heading"
                  value={state.heading || ""}
                  placeholder="Notice Heading"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
            <div className="col-sm-6">
              <Form.Group
                controlId="title"
                className="shadow p-3 mb-5 bg-body rounded"
              >
                <textarea
                  rows="1"
                  cols="23"
                  type="textarea"
                  name="content"
                  value={state.content || ""}
                  placeholder="Type Notice Content here"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="upload-section shadow p-3 mb-5 bg-body rounded">
                  <Dropzone
                    onDrop={onDrop}
                    onDragEnter={() => updateBorder("over")}
                    onDragLeave={() => updateBorder("leave")}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps({ className: "drop-zone" })}
                        ref={dropRef}
                      >
                        <input {...getInputProps()} />
                        <p>
                          Drag and drop a file OR click here to select a file
                        </p>
                        {file && (
                          <div style={{ width: "100px" }}>
                            <strong>Selected file:</strong> {file.name}
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ "margin-left": "40%" }}>
            <div className="col-sm-12">
              <Button variant="primary" type="submit">
                Publish
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AdminNoticeCreateForm;
