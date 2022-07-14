import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <ProfileCard />
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
