import React from "react";
import "./ProfileCard.css";
import CoverImg from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={CoverImg} alt="cover-img" draggable="false" />
        <img src={ProfileImg} alt="profile-img" draggable="false" />
      </div>

      <div className="profileName">
        <span>Lovely Sharma</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,999</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>

          <div className="follow">
            <span>3</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
