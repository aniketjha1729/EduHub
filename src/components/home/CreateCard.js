import React, { useState} from "react";
import { Link } from "react-router-dom";
import CreateNotice from "./CreateNotice";
import CreatePost from "./CreatePost";

const CreateCard = () => {
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
            <CreatePost/>
          ) : (
            ""
          )}
          {noticeModel ? (
            <CreateNotice/>
          ) : (
            ""
          )}
          {quesModel ? (
            <div className="card-body">
              <br />
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

export default CreateCard;
