import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import axios from "../../api/axios";
import "./style.css";

const CreateNotice = () => {
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
          await axios.post("/user/createnotice", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setState("");
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
    <div className="card-body">
      <br />
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#noticeModel"
      >
        Publish Notice
      </button>
      <div
        className="modal fade"
        id="noticeModel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Publish Notice
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <input
                    name="heading"
                    type="text"
                    value={state.heading || ""}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Notice Heading"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="1"
                    cols="23"
                    type="textarea"
                    name="content"
                    className="form-control"
                    id="formGroupExampleInput"
                    value={state.content || ""}
                    placeholder="Type Notice Content here"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <div className="user-notice-drop-area">
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
                <button type="submit" className="btn btn-primary">
                  Publish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
