import React, { useState } from "react";
import ForumFeed from "../components/forum/ForumFeed";
import Question from "../components/forum/Question";
import RightImg from "../assets/right.svg";
import LeftImg from "../assets/left.svg";
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
          className="card"
          style={{ width: "100%", height: "100%", border: "none" }}
        >
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
        {toggleQuestion ? <Question /> : <ForumFeed />}
      </div>
      <div className="forum-right-view">
        <div
          className="card"
          style={{ width: "100%", height: "100%", border: "none" }}
        >
          <button className="btn btn-primary" onClick={toggleQuestionSection}>
            Ask Question
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
