import axios from "axios";
import React, { useEffect, useState } from "react";
import noProfileImg from "../../img/noProfile.jpg";
const Conversation = ({ chat, currentUserId, online }) => {
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

  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot">Online</div>}

          <img
            src={
              userData?.profilePicture
                ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
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
            <span>Online</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
