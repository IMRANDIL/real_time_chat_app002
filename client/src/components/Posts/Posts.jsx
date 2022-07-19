import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { PostData } from "../../Data/PostsData";
import { getTimelinePosts } from "../../Actions/PostActions";
import Post from "../Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  // const { userInfo } = useSelector((state) => state.registerUser);
  const { user } = useSelector((state) => state.getUser);
  const { timelinePost, loading, error } = useSelector(
    (state) => state.timelinePost
  );

  useEffect(() => {
    if (user) {
      dispatch(getTimelinePosts(user._id));
    }

    if (error) {
      toast.error(error);
    }
  }, [dispatch, user, error]);
  return (
    <div className="posts">
      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
      {timelinePost && timelinePost.length === 0 && (
        <h2 style={{ textAlign: "center" }}>Start writing your mind...!</h2>
      )}
      {timelinePost &&
        timelinePost.map((post) => <Post post={post} key={post._id} />)}
    </div>
  );
};

export default Posts;
