import React, { useState, useRef, useEffect } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { getTimelinePosts } from "../../Actions/PostActions";
import { postAction } from "../../Actions/PostActions";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { uploadImage } from "../../Actions/uploadActons";
import { POST_RESET } from "../../Constants/PostConstant";
import { UPLOAD_RESET } from "../../Constants/UploadContant";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.registerUser);
  const { error: uploadError } = useSelector(
    (state) => state.uploadFile
  );
  const {
    error: postError,
    loading: loadingPost,
    success: postSuccess,
  } = useSelector((state) => state.userPost);
  const imageRef = useRef();
  const desc = useRef();
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  let newPost;
  const handleShare = (e) => {
    e.preventDefault();
    newPost = {
      userId: userInfo._id,
      description: desc.current.value,
    };

    if (image) {
      console.log(image.name);
      const data = new FormData();
      const filename = Date.now() + "-" + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      dispatch(uploadImage(data));
    }
    dispatch(postAction(newPost));
    
   
  };






  useEffect(() => {
    if (postError) {
      toast.error(postError);
      dispatch({
        type: POST_RESET,
      });
    }

 

    if (uploadError) {
      toast.error(uploadError);
    }


    if (postSuccess) {
      setImage(null);
      desc.current.value = "";
      dispatch(getTimelinePosts(userInfo._id));
      dispatch({
        type:UPLOAD_RESET
      });
      dispatch({
        type: POST_RESET,
      });
    }
  }, [postError, uploadError, postSuccess, dispatch, userInfo,]);

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
          <button
            className="button ps-button"
            onClick={handleShare}
            disabled={loadingPost}
          >
            {loadingPost ? "Sharing..." : "Share"}
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
