import React, { useState } from "react";
import "./Chat.css";
import { useSelector } from "react-redux";
import LogoSearch from "../../components/LogoSearch/LogoSearch";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const { userInfo } = useSelector((state) => state.registerUser);

  return (
    <div className="Chat">
      {/* LeftSide */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">conversations</div>
        </div>
      </div>

      {/* RightSide */}
      <div className="Right-side-chat">Right side</div>
    </div>
  );
};

export default Chat;
