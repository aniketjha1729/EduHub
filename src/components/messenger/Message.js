import React from "react";
import "./style.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="https://images.unsplash.com/photo-1558899622-6e22c5d1c554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
          srcset=""
          className="messageImg"
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. temporibus
          optio quasi porro?
        </p>
      </div>
    </div>
  );
};

export default Message;
