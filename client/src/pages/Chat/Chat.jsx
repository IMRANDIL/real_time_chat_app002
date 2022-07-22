import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import axios from "axios";
import Conversation from "../../components/Conversation/Conversation";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const { userInfo } = useSelector((state) => state.registerUser);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/chat/${userInfo._id}`
        );
        setChats(data);
        console.log(data);
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
              <div key={chat._id}>
                <Conversation chat={chat} currentUserId={userInfo._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RightSide */}
      <div className="Right-side-chat">Right side</div>
    </div>
  );
};

export default Chat;
