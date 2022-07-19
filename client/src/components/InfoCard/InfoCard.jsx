import React, { useState, useEffect } from "react";
import "./InfoCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";
import { logoutUser } from "../../Actions/AuthActions";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileUser, setProfileUser] = useState({});
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.registerUser);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleModal = () => {
    setModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation("/auth/login");
  };

  useEffect(() => {}, []);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={handleModal} />
          <ProfileModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status:</b>
        </span>
        <span>
          {" "}
          {userInfo.relationship ? userInfo.relationship : "Not updated"}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in:</b>
        </span>
        <span> {userInfo.livesin ? userInfo.livesin : "Not updated"}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at:</b>
        </span>
        <span> {userInfo.worksAt ? userInfo.worksAt : "Not updated"}</span>
      </div>

      <button className="button log-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
