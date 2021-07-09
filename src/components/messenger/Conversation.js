import React from "react";
import "./style.css";

const Conversation = () => {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.unsplash.com/photo-1558899622-6e22c5d1c554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt=""
      />
      <span className="conversationText"> Aniket Kumar</span>
    </div>
  );
};

export default Conversation;
