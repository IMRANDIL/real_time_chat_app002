import React, { useState } from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoImg from "../../img/noback.jpeg";
import noProfileImg from "../../img/noProfile.jpg";

const ProfileCard = () => {
  const [ProfilePage, setProfilePage] = useState(false);
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
        <span>{userInfo.worksAt ? userInfo.worksAt : "Self Employed"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{userInfo.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>

          <div className="follow">
            <span>{userInfo.followers.length}</span>
            <span>Follower</span>
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
      {ProfilePage ? (
        ""
      ) : (
        <span>
          <Link
            to={ProfilePage ? "/profile" : "/"}
            onClick={() => setProfilePage(true)}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
