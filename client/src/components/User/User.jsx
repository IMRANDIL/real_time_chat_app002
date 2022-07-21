import React from "react";

import NoImg from "../../img/noProfile.jpg";

const User = ({ follower }) => {
  const handleFollow = () => {};

  return (
    <div className="follower">
      <div>
        <img
          src={
            follower.profilePicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + follower.profilePicture
              : NoImg
          }
          alt={follower.username}
          className="followerImg"
          draggable="false"
        />
        <div className="name">
          <span>
            {follower.firstname} {follower.lastname}
          </span>
          <span>{follower.username}</span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>
        Follow
      </button>
    </div>
  );
};

export default User;
