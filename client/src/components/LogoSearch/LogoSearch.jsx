import React from "react";
import "./LogoSearch.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Actions/UserActions";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  const { userInfo } = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(getUser(userInfo._id));
  };

  return (
    <div className="logoSearch">
      <Link to="/">
        <img
          src={Logo}
          alt="logo-img"
          draggable="false"
          onClick={handleRefresh}
        />
      </Link>

      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
