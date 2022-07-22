import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import axios from "axios";
import Conversation from "../../components/Conversation/Conversation";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { Link } from "react-router-dom";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ChatBody from "../../components/ChatBody/ChatBody";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { userInfo } = useSelector((state) => state.registerUser);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/chat/${userInfo._id}`
        );
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChats();
  }, [userInfo]);

  return (
    <div className="Chat">
      {/* LeftSide */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                <Conversation chat={chat} currentUserId={userInfo._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RightSide */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <img src={Home} alt="home-img" draggable="false" />
            <UilSetting />
            <img src={Noti} alt="noti-img" draggable="false" />
            <Link to="/chat">
              <img src={Comment} alt="comment-img" draggable="false" />
            </Link>
          </div>
        </div>
        {/* chatBody */}

        <ChatBody currentUserId={userInfo._id} chat={currentChat} />
      </div>
    </div>
  );
};

export default Chat;
