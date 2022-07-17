import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { useSelector, useDispatch } from "react-redux";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.registerUser);
  const imageRef = useRef();
  const desc = useRef();
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    const newPost = {
      userId: userInfo._id,
      description: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + "-" + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
    }
  };

  return (
    <div className="postShare">
      <img src={ProfileImg} alt="profile-img" draggable="false" />
      <div>
        <input
          type="text"
          placeholder="What's in your mind?"
          ref={desc}
          required
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={handleShare}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={handleImage}
            />
          </div>
        </div>
        {image && (
          <div className="previewImg">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview-img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
