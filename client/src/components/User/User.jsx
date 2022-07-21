import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FOLLOW_USER_RESET } from "../../Constants/userConstants";
import { getTimelinePosts } from "../../Actions/PostActions";
import { followUser, getUser, unFollowUser } from "../../Actions/UserActions";
import NoImg from "../../img/noProfile.jpg";

const User = ({ follower }) => {
  const { userInfo } = useSelector((state) => state.registerUser);
  // const [following, setFollowing] = useState(
  //   follower.followers.includes(userInfo._id)
  // );

  const { success: followSuccess, error: followError } = useSelector(
    (state) => state.followUser
  );
  // const { success: unFollowSuccess } = useSelector(
  //   (state) => state.unFollowUser
  // );
  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(followUser(follower._id, userInfo._id));
  };

  if (followError) {
    toast.error(followError);
    dispatch({
      type:FOLLOW_USER_RESET
    })
  }

  useEffect(() => {
    if (followSuccess) {
      dispatch(getUser(userInfo._id));
      dispatch(getTimelinePosts(userInfo._id));
    }
  }, [dispatch, followSuccess, userInfo]);

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
