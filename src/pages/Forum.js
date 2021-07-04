import React, { useState } from "react";
import ForumFeed from "../components/forum/ForumFeed";
import PostQuestion from "../components/forum/PostQuestion";
import RightImg from "../assets/right.svg";
import LeftImg from "../assets/left.svg";
import { Link } from "react-router-dom";
import "./home.css";

const Forum = () => {
  const [toggleQuestion, setToggleQuestion] = useState(false);
  const toggleQuestionSection = () => {
    setToggleQuestion(!toggleQuestion);
  };
  return (
    <div className="forumContainer">
      <div className="forum-left-view">
        <div
          className="card ForumCards"
          // style={{ width: "100%", height: "100%", border: "none", margin: "auto" }}
        >
          <Link to="/" className="forumToBack">
            <button
              className="btn forum-question-button"
              // style={{ marginLeft: "30px" }}
            >
              <i class="fas fa-arrow-circle-left"></i> Back
            </button>
          </Link>
          <img
            src={LeftImg}
            style={{ height: "100%" }}
            className="card-img-top"
            alt="..."
          />
          <img
            src={RightImg}
            style={{ height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="forum-middle-view">
        {toggleQuestion ? <PostQuestion /> : <ForumFeed />}
      </div>
      <div className="forum-right-view">
        <div
          className="card ForumCards"
          // style={{ width: "100%", height: "100%", border: "none", margin: "auto" }}
        >
          <button
            className="btn forum-question-button"
            // style={{ marginLeft: "30px" }}
            onClick={toggleQuestionSection}
          >
            <i class="fas fa-arrow-circle-left"></i> Ask Question
          </button>
          <img
            src={RightImg}
            style={{ height: "100%" }}
            className="card-img-top"
            alt="..."
          />
          <img
            src={LeftImg}
            style={{ height: "100%" }}
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Forum;
