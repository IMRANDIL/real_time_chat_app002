import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { Link } from "react-router-dom";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="home-img" draggable="false" />
        <UilSetting />
        <img src={Noti} alt="noti-img" draggable="false" />
        <Link to="/chat">
          <img src={Comment} alt="comment-img" draggable="false" />
        </Link>
      </div>

      <TrendCard />
      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <button className="button r-button" onClick={() => setModalOpen(true)}>
        Share
      </button>
    </div>
  );
};

export default RightSide;
