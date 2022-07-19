import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import NoImg from "../../img/noImg.png";
import noProfileImg from "../../img/noProfile.jpg";

const ProfileCard = () => {
  const ProfilePage = false;
  const { userInfo } = useSelector((state) => state.registerUser);
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            userInfo.coverPicture
              ? serverPublicFolder + userInfo.coverPicture
              : NoImg
          }
          alt="cover-img"
          draggable="false"
        />
        <img
          src={
            userInfo.profilePicture
              ? serverPublicFolder + userInfo.profilePicture
              : noProfileImg
          }
          alt="profile-img"
          draggable="false"
        />
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
