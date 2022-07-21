import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/data";
import User from "../User/User";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>People you may know</h3>

      {Followers.map((follower) => (
        <User follower={follower} />
      ))}
    </div>
  );
};

export default FollowersCard;
