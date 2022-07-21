import React, { useState, useEffect } from "react";
import "./FollowersCard.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
// import { Followers } from "../../Data/data";
import User from "../User/User";

const FollowersCard = () => {
  const [Followers, setFollowers] = useState([]);
  const { userInfo } = useSelector((state) => state.registerUser);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/user`);
        setFollowers(data);
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="followersCard">
      <h3>People you may know</h3>

      {Followers?.map((follower) => {
        if (follower._id !== userInfo._id) {
          return <User follower={follower} key={follower._id} />;
        } else {
          return false;
        }
      })}
    </div>
  );
};

export default FollowersCard;
