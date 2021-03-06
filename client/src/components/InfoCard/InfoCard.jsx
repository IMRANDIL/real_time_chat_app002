import React, { useState, useEffect } from "react";
import "./InfoCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Actions/UserActions";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";
import { logoutUser } from "../../Actions/AuthActions";
import { getTimelinePosts } from "../../Actions/PostActions";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const { user } = useSelector((state) => state.getUser);
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

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getTimelinePosts(id));
  }, [dispatch, id]);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user && user._id === userInfo._id ? (
          <div>
            <UilPen width="2rem" height="1.2rem" onClick={handleModal} />
            <ProfileModel
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              user={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <span>
          <b>Status:</b>
        </span>
        <span>
          {" "}
          {user && user.relationship ? user.relationship : "Not updated"}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in:</b>
        </span>
        <span> {user && user.livesin ? user.livesin : "Not updated"}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at:</b>
        </span>
        <span> {user && user.worksAt ? user.worksAt : "Not updated"}</span>
      </div>

      <button className="button log-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
