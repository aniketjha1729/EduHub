import React from "react";
import ChatOnline from "../components/messenger/ChatOnline";
import Conversation from "../components/messenger/Conversation";
import Message from "../components/messenger/Message";

import "./home.css";
const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input
            type="text"
            placeholder="Search for Friends...."
            className="chatMenuInput"
          />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
          </div>
          <div className="chatBoxBottom">
            <input
              className="chatMessageInput"
              placeholder="Write Something....."
            ></input>
            <button className="chatSendButton">Send</button>
          </div>
        </div>
      </div>
      <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
        </div>
    </div>
  );
};

export default Messenger;
