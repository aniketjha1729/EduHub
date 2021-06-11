import React, { useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

const CreatePostCard = () => {
  const [postModel, setPostModel] = useState(true);
  const [noticeModel, setNoticeModel] = useState(false);
  const [quesModel, setQuesModel] = useState(false);
  const [formData, setFormData] = useState({
    document: "",
    content: "",
  });

  const { content, document } = formData;

  // useEffect(() => {
  //   setFormData({...formData,photo:new Photo()})
  // }, [])

  const handleChange = (name) => (event) => {
    const value =
      name === "document" ? event.target.files[0] : event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("/user/post/createPost", formData);
  };

  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link
                className={postModel ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setPostModel(true);
                  setNoticeModel(false);
                  setQuesModel(false);
                }}
              >
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                className={noticeModel ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setNoticeModel(true);
                  setPostModel(false);
                  setQuesModel(false);
                }}
              >
                Publish Notice
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                className="nav-link"
                className={quesModel ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setQuesModel(true);
                  setPostModel(false);
                  setNoticeModel(false);
                }}
              >
                Ask Question
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {postModel ? (
            <div className="card-body">
              <h5 className="card-title">Post</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Create Post
              </button>
              <div
                className="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Modal title
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
                          <label for="formGroupExampleInput">
                            Example label
                          </label>
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
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {noticeModel ? (
            <div className="card-body">
              <h5 className="card-title">Notice</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Create Notice
              </a>
            </div>
          ) : (
            ""
          )}
          {quesModel ? (
            <div className="card-body">
              <h5 className="card-title">Question</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Ask Question
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
