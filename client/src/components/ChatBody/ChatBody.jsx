import React, { useState, useEffect } from "react";
import axios from "axios";
import noProfileImg from "../../img/noProfile.jpg";
import "./ChatBody.css";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatBody = ({ chat, currentUserId }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  //fetching data for header

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);

    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/user/${userId}`
        );
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    chat && fetchUserData();
  }, [chat, currentUserId]);

  //fetching messages......

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/message/${chat._id}`
        );
        setMessages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    chat && fetchMessage();
  }, [chat]);

  const handleInputChange = () => {};

  return (
    <>
      <div className="ChatBox-container">
        <>
          <div className="chat-header">
            <div className="follower">
              <div>
                <img
                  src={
                    userData?.profilePicture
                      ? process.env.REACT_APP_PUBLIC_FOLDER +
                        userData.profilePicture
                      : noProfileImg
                  }
                  alt="user-img"
                  draggable="false"
                  className="followerImage"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="name" style={{ fontSize: ".8rem" }}>
                  <span>
                    {userData?.firstname} {userData?.lastname}
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
          </div>

          {/* chatBox_Message */}

          <div className="chat-body">
            {messages.map((message) => (
              <>
                <div
                  className={
                    message.senderId === currentUserId
                      ? "message own"
                      : "message"
                  }
                  key={message._id}
                >
                  <span>{message.text}</span>
                  <span>{format(message.createdAt)}</span>
                </div>
              </>
            ))}
          </div>

          {/* chatSender */}

          <div className="chat-sender">
            <div>+</div>
            <InputEmoji value={newMessage} onChange={handleInputChange} />
          </div>
        </>
      </div>
    </>
  );
};

export default ChatBody;
