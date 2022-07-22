import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FOLLOW_USER_RESET,
  UNFOLLOW_USER_RESET,
} from "../../Constants/userConstants";
import { followUser, getUser, unFollowUser } from "../../Actions/UserActions";
import NoImg from "../../img/noProfile.jpg";

const User = ({ follower }) => {
  const { userInfo } = useSelector((state) => state.registerUser);
  const { user } = useSelector((state) => state.getUser);
  const [following, setFollowing] = useState(
    follower.followers.includes(userInfo._id)
  );

  const { success: followSuccess } = useSelector((state) => state.followUser);
  const { success: unFollowSuccess } = useSelector(
    (state) => state.unFollowUser
  );
  const dispatch = useDispatch();
  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(follower._id, user._id))
      : dispatch(followUser(follower._id, user._id));
    setFollowing((prev) => !prev);
  };

  useEffect(() => {
    if (followSuccess || unFollowSuccess) {
      dispatch(getUser(userInfo._id));
      dispatch({
        type: FOLLOW_USER_RESET,
      });

      dispatch({
        type: UNFOLLOW_USER_RESET,
      });
    }
  }, [dispatch, followSuccess, userInfo, unFollowSuccess]);

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
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
