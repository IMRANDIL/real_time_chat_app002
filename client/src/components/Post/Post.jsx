import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.img} alt="post-img" />
      <div className="postReact">
        <img src={post.liked ? Heart : NotLike} alt="like-unlike-img" />
        <img src={Comment} alt="comment-img" />
        <img src={Share} alt="share-img" />
      </div>
      <span>{post.likes} likes</span>
      <div className="detail">
        <span>
          <b>{post.name}</b>
        </span>
        <span> {post.des}</span>
      </div>
    </div>
  );
};

export default Post;
