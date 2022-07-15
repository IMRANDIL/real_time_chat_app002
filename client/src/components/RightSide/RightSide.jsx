import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="home-img" draggable="false" />
        <UilSetting />
        <img src={Noti} alt="noti-img" draggable="false" />
        <img src={Comment} alt="comment-img" draggable="false" />
      </div>

      <TrendCard />

      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
