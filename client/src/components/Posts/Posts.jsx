import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../Actions/PostActions";
import Post from "../Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.getUser);
  const { timelinePost, loading } = useSelector((state) => state.timelinePost);

  useEffect(() => {
    dispatch(getTimelinePosts(user?._id));
  }, [dispatch, user]);
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
