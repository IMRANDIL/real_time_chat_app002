import React from "react";
import "./ProfileLeft.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
