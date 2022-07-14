import React from "react";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide">Post</div>
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
