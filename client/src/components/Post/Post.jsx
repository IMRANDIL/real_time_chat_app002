import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.img} alt="post-img" />
    </div>
  );
};

export default Post;
