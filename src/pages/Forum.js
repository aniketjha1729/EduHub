import React, { useState } from "react";
import ForumFeed from "../components/forum/ForumFeed";
import Question from "../components/forum/Question";
import "./home.css";

const Forum = () => {
  const [toggleQuestion, setToggleQuestion] = useState(false);
  const toggleQuestionSection = () => {
    setToggleQuestion(!toggleQuestion);
  };
  return (
    <div className="forumContainer">
      <div className="forum-left-view">hello</div>
      <div className="forum-middle-view">
        {toggleQuestion ? <Question /> : <ForumFeed />}
      </div>
      <div className="forum-right-view">
        <button className="btn btn-primary" onClick={toggleQuestionSection}>
          Ask Question
        </button>
      </div>
    </div>
  );
};

export default Forum;
