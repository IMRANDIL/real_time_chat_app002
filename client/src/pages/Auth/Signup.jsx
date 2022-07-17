import React, { useState, useEffect } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Actions/AuthActions";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SIGNUP_RESET } from "../../Constants/AuthConstant";
import Auth from "./Auth";

function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.registerUser);
  const userInfo = localStorage.getItem("userInfo");
  const navigation = useNavigate();
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (success || userInfo) {
      setData({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpassword: "",
      });
      navigation("/");
    } else {
      toast.error(error);
      dispatch({
        type: SIGNUP_RESET,
      });
    }
  }, [success, navigation, dispatch, error, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmpassword) {
      toast.error("Passwords do not match");
    } else {
      dispatch(registerUser(data));
    }
  };

  return (
    <div className="container">
      <Auth />

      <div className="auth-right">
        <form className="infoAuth auth-form" onSubmit={handleSubmit}>
          <h3>Sign up</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              autoFocus
              value={data.firstname}
              required
              onChange={handleInput}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              value={data.lastname}
              name="lastname"
              required
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="email"
              className="infoInput"
              name="username"
              value={data.username}
              placeholder="User Name"
              required
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              value={data.password}
              placeholder="Password"
              required
              onChange={handleInput}
            />
            <input
              type="password"
              className="infoInput"
              name="confirmpassword"
              value={data.confirmpassword}
              placeholder="Confirm Password"
              required
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="button auth-button">
            Signup
          </button>
          <div className="confirmbee">
            <span>
              Already a bee? <Link to="/auth/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
