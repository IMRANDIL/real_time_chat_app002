import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
