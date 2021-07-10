import React, { useState, useEffect, useRef } from "react";
import ChatOnline from "../components/messenger/ChatOnline";
import Conversation from "../components/messenger/Conversation";
import Message from "../components/messenger/Message";
import { connect } from "react-redux";
import axios from "../api/axios";
import "./home.css";

const Messenger = ({ user: { user } }) => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axios.get(`/messenger/${user._id}`);
        console.log(data);
        setConversations(data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(
          `/messenger/message/${currentChat._id}`
        );
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const { data } = await axios.post(
        "/messenger/create/newMessage",
        message
      );
      setMessages([...messages, data]);
      setNewMessages("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input
            type="text"
            placeholder="Search for Friends...."
            className="chatMenuInput"
          />
          {conversations.map((conversation) => (
            <div onClick={() => setCurrentChat(conversation)}>
              <Conversation conversation={conversation} currentUser={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((messages) => (
                  <div ref={scrollRef}>
                    <Message
                      message={messages}
                      own={messages.sender === user._id}
                    />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <input
                  className="chatMessageInput"
                  placeholder="Write Something....."
                  onChange={(e) => setNewMessages(e.target.value)}
                  value={newMessage}
                ></input>
                <button className="chatSendButton" onClick={handlSubmit}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText">Open a conversation.....</span>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Messenger);
