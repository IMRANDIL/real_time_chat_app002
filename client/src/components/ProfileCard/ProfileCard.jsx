import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoImg from "../../img/noback.jpeg";
import noProfileImg from "../../img/noProfile.jpg";

const ProfileCard = ({ location }) => {
  const { userInfo } = useSelector((state) => state.registerUser);
  const { user } = useSelector((state) => state.getUser);
  const { timelinePost } = useSelector((state) => state.timelinePost);
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            user && user.coverPicture
              ? serverPublicFolder + user.coverPicture
              : NoImg
          }
          alt="cover-img"
          draggable="false"
        />
        <img
          src={
            user && user.profilePicture
              ? serverPublicFolder + user.profilePicture
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
        <span>
          {user && user.worksAt ? user && user.worksAt : "Not updated"}
        </span>
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
          {location === "profilePage" && (
            <>
              <div className="vl"></div>

              <div className="follow">
                <span>
                  {timelinePost &&
                    timelinePost.filter(
                      (timelinePost) => timelinePost.userId === userInfo._id
                    ).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${userInfo._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
