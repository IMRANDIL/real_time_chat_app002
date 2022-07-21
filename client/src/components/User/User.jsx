import React from "react";
const User = ({ follower }) => {
  return (
    <div className="follower" key={follower.id}>
      <div>
        <img
          src={follower.img}
          alt={follower.username}
          className="followerImg"
          draggable="false"
        />
        <div className="name">
          <span>{follower.name}</span>
          <span>@{follower.username}</span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default User;
