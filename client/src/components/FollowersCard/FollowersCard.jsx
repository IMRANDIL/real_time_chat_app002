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
            <img src={follower.img} alt={follower.username} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
