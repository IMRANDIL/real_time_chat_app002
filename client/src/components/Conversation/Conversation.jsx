import axios from "axios";
import React, { useEffect, useState } from "react";

const Conversation = ({ chat, currentUserId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = chat.members.find((id) => id !== currentUserId);
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
    fetchUserData();
  }, [chat, currentUserId, userData]);

  return <div>Conversation</div>;
};

export default Conversation;
