import React, { useState } from "react";

import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../Actions/UserActions";
import { uploadImage } from "../../Actions/uploadActons";

function ProfileModel({ modalOpen, setModalOpen, user }) {
  const theme = useMantineTheme();

  const [formData, setFormData] = useState(user);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  // const { userInfo } = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profilePicture"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let userData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + "-" + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      userData.profilePicture = fileName;
      dispatch(uploadImage(data));
    }

    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + "-" + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      userData.coverPicture = fileName;
      dispatch(uploadImage(data));
    }
    dispatch(updateUser(id, userData));
    setModalOpen(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form className="infoAuth">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleInputChange}
            value={formData.firstname}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleInputChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="worksAt"
            onChange={handleInputChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives In"
            name="livesin"
            onChange={handleInputChange}
            value={formData.livesin}
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
            onChange={handleInputChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
            name="relationship"
            onChange={handleInputChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input
            type="file"
            name="profilePicture"
            onChange={handleImageChange}
          />
          Cover Image
          <input type="file" name="coverPicture" onChange={handleImageChange} />
        </div>

        <button className="button log-button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </Modal>
  );
}
export default ProfileModel;
