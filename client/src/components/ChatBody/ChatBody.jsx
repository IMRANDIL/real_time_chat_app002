import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import noProfileImg from "../../img/noProfile.jpg";
import "./ChatBody.css";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatBody = ({ chat, currentUserId, setSendMessage, receiveMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();
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
      } catch (error) {
        console.log(error);
      }
    };

    chat && fetchMessage();
  }, [chat]);

  const handleInputChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    //send message to socket server....
    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId });

    //send message to db....

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/message`,
        message,
        config
      );
      setMessages([...messages, data]);
      setNewMessage("");
      scroll.current = "";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage, chat]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
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
                <div
                  ref={scroll}
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
              ))}
            </div>

            {/* chatSender */}

            <div className="chat-sender">
              <div>+</div>
              <InputEmoji value={newMessage} onChange={handleInputChange} />
              <div className="send-button button" onClick={handleSend}>
                Send
              </div>
            </div>
          </>
        ) : (
          <span className="chatbox-empty-message">
            💌...Tap on a chat to start conversation...💌
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBody;
