import React, { useState} from "react";
import { Link } from "react-router-dom";
import CreateNotice from "./CreateNotice";
import CreatePost from "./CreatePost";

const CreateCard = (props) => {
  const [postModel, setPostModel] = useState(true);
  const [noticeModel, setNoticeModel] = useState(false);
  const [forumModel, setForumModel] = useState(false);

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
                  setForumModel(false);
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
                  setForumModel(false);
                }}
              >
                Publish Notice
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                className="nav-link"
                className={forumModel ? "nav-link active" : "nav-link"}
                onClick={() => {
                  setForumModel(true);
                  setPostModel(false);
                  setNoticeModel(false);
                }}
              >
                Forum
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {postModel ? (
            <CreatePost getAllPost={props.getAllPost}/>
          ) : (
            ""
          )}
          {noticeModel ? (
            <CreateNotice/>
          ) : (
            ""
          )}
          {forumModel ? (
            <div className="card-body">
              <br />
              <a href="#" className="btn UserHome-TextBoxLikeButton">
                Drop your query.....
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
