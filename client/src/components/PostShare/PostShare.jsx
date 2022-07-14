import React from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="postShare">
      <img src={ProfileImg} alt="profile-img" draggable="false" />
      <div>
        <input type="text" placeholder="What's in your mind?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
