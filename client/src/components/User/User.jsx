import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FOLLOW_USER_RESET } from "../../Constants/userConstants";
import { getTimelinePosts } from "../../Actions/PostActions";
import { followUser, getUser } from "../../Actions/UserActions";
import NoImg from "../../img/noProfile.jpg";

const User = ({ follower }) => {
  const { userInfo } = useSelector((state) => state.registerUser);
  const { success, error } = useSelector((state) => state.followUser);
  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(followUser(follower._id, userInfo._id));
  };

  useEffect(() => {
    if (success) {
      dispatch(getUser(userInfo._id));
      dispatch(getTimelinePosts(userInfo._id));
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: FOLLOW_USER_RESET,
      });
    }
  }, [dispatch, success, error, userInfo]);

  return (
    <div className="follower">
      <div>
        <img
          src={
            follower.profilePicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + follower.profilePicture
              : NoImg
          }
          alt={follower.username}
          className="followerImg"
          draggable="false"
        />
        <div className="name">
          <span>
            {follower.firstname} {follower.lastname}
          </span>
          <span>{follower.username}</span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>
        Follow
      </button>
    </div>
  );
};

export default User;
