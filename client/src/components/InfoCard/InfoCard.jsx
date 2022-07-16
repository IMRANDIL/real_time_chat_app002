import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
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

      <button className="button log-button">Logout</button>
    </div>
  );
};

export default InfoCard;
