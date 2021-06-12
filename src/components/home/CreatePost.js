import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const CreatePost = () => {
  const [values, setValues] = useState({
    document: "",
    content: "",
    formData: "",
  });
  
  const { content, document, formData } = values;
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value =
      name === "document" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("/user/post/createPost", formData);
  };
  return (
    <div className="card-body">
      <br />
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#postModel"
      >
        Create Post
      </button>
      <div
        className="modal fade"
        id="postModel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Create Post
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
              <form>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      name="document"
                      onChange={handleChange("document")}
                      className="custom-file-input"
                      id="validatedCustomFile"
                      accept="image"
                    />
                    <label
                      className="custom-file-label"
                      for="validatedCustomFile"
                    >
                      {document.name}
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput">Example label</label>
                  <input
                    onChange={handleChange("content")}
                    name="content"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input"
                    value={content}
                  />
                </div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-primary"
                  value="Save changes"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
