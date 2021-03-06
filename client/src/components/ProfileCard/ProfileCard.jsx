import React, { useEffect } from "react";
import "./ProfileCard.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NoImg from "../../img/noback.jpeg";
import { getUser } from "../../Actions/UserActions";
import noProfileImg from "../../img/noProfile.jpg";
import { USER_GET_RESET } from "../../Constants/userConstants";

const ProfileCard = ({ location }) => {
  const { user, error } = useSelector((state) => state.getUser);
  const { userInfo } = useSelector((state) => state.registerUser);
  const { timelinePost, loading } = useSelector((state) => state.timelinePost);
  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: USER_GET_RESET,
      });
    }

    dispatch(getUser(userInfo._id));
  }, [error, dispatch, userInfo]);

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            user && user.coverPicture
              ? serverPublicFolder + user.coverPicture
              : NoImg
          }
          alt="cover-img"
          draggable="false"
        />
        <img
          src={
            user && user.profilePicture
              ? serverPublicFolder + user.profilePicture
              : noProfileImg
          }
          alt="profile-img"
          draggable="false"
        />
      </div>

      <div className="profileName">
        <span>
          {user && user.firstname} {user && user.lastname}
        </span>
        <span>{user && user.worksAt ? user.worksAt : "Not updated"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user && user.following?.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>

          <div className="follow">
            <span>{user && user.followers?.length}</span>
            <span>Follower</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>

              <div className="follow">
                <span>
                  {loading && <p>...</p>}
                  {timelinePost &&
                    timelinePost.filter(
                      (timelinePost) => timelinePost.userId === user?._id
                    ).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user && user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
