import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import { useSelector } from "react-redux";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import NoImg from "../../img/noImg.png";

const Post = ({ post }) => {
  const { userInfo } = useSelector((state) => state.registerUser);
  const [like, setLike] = useState(post.likes.includes(userInfo._id));
  const [numLike, setNumLike] = useState(post.likes.length);

  const handleLike = () => {
    setLike((prev) => !prev);
    numLike ? setNumLike((prev) => prev - 1) : setNumLike((prev) => prev + 1);
  };

  return (
    <div className="post">
      <img
        src={
          post.image ? process.env.REACT_APP_PUBLIC_FOLDER + post.image : NoImg
        }
        alt="post-img"
        draggable="false"
      />
      <div className="postReact">
        <img
          src={like ? Heart : NotLike}
          alt="like-unlike-img"
          onClick={handleLike}
        />
        <img src={Comment} alt="comment-img" draggable="false" />
        <img src={Share} alt="share-img" draggable="false" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {numLike} likes
      </span>
      <div className="detail">
        <span>
          <b>{post.firstname}</b>
        </span>
        <span> {post.description}</span>
      </div>
    </div>
  );
};

export default Post;
