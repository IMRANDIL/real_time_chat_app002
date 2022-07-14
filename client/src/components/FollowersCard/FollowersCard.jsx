import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/data";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower) => (
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
      ))}
    </div>
  );
};

export default FollowersCard;
