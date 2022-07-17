import React, { useState } from "react";
import "./InfoCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";
import { logoutUser } from "../../Actions/AuthActions";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleModal = () => {
    setModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation("/auth/login");
  };

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
        <span> Commited</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in:</b>
        </span>
        <span> Raniganj</span>
      </div>

      <div className="info">
        <span>
          <b>Works at:</b>
        </span>
        <span> Freelancing</span>
      </div>

      <button className="button log-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
