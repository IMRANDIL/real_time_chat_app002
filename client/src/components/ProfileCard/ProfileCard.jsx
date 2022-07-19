import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import CoverImg from "../../img/cover.jpg";
import ProfileImg from "../../img/profileImg.jpg";

const ProfileCard = () => {
  const ProfilePage = false;
  const { userInfo } = useSelector((state) => state.registerUser);
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={CoverImg} alt="cover-img" draggable="false" />
        <img src={ProfileImg} alt="profile-img" draggable="false" />
      </div>

      <div className="profileName">
        <span>
          {userInfo.firstname} {userInfo.lastname}
        </span>
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
          {ProfilePage && (
            <>
              <div className="vl"></div>

              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
