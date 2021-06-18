import React, { useState} from "react";
import { Link } from "react-router-dom";
import CreateNotice from "./CreateNotice";
import CreatePost from "./CreatePost";

const CreateCard = (props) => {
  const [postModel, setPostModel] = useState(false);
  const [noticeModel, setNoticeModel] = useState(true);
  const [forumModel, setForumModel] = useState(false);

  return (
    <div>
      <div className="card text-center">
        <div className="card-header" id="CreateCardIDdown">
          <ul className="nav nav-tabs card-header-tabs CreateCardBold">
            <li className="nav-item">
              <Link
                className="nav-link"
                className={noticeModel ? "nav-link active CreateCardNoticeBoard" : "nav-link"}
                onClick={() => {
                  setNoticeModel(true);
                  setPostModel(false);
                  setForumModel(false);
                }}
              >
                <i class="fas fa-clipboard"></i> Notice Board
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={postModel ? "nav-link active CreateCardSocial" : "nav-link"}
                onClick={() => {
                  setPostModel(true);
                  setNoticeModel(false);
                  setForumModel(false);
                }}
              >
                <i class="fas fa-users"></i> Social
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                className={forumModel ? "nav-link active" : "nav-link"}
                to="/forum"
              >
                <i class="fas fa-chalkboard-teacher"></i> Forum
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
