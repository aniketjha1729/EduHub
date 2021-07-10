import React from "react";
import { format } from "timeago.js";
import "./style.css";

const Message = ({ own, message }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageButtom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
