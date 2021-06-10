import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreatePostCard = () => {
  const [postModel, setPostModel] = useState(true);
  const [noticeModel, setNoticeModel] = useState(false);
  const [quesModel, setQuesModel] = useState(false);
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
                Publich Notice
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
              <a href="#" className="btn btn-primary">
                Create Post
              </a>
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
