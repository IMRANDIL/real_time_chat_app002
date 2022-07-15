import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
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
