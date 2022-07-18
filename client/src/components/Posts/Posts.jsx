import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { PostData } from "../../Data/PostsData";
import { getTimelinePosts } from "../../Actions/PostActions";
import Post from "../Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.registerUser);

  useEffect(() => {
    if (userInfo) {
      dispatch(getTimelinePosts(userInfo._id));
    }
  }, [dispatch, userInfo]);
  return (
    <div className="posts">
      {PostData.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
