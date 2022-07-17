import React, { useState, useEffect } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Actions/AuthActions";
import { LOGIN_RESET } from "../../Constants/AuthConstant";
import Auth from "./Auth";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { error, success, loading } = useSelector((state) => state.loginUser);
  const userInfo = localStorage.getItem("userInfo");

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (success || userInfo) {
      setData({
        username: "",
        password: "",
      });
      navigation("/");
    } else {
      toast.error(error);
      dispatch({
        type: LOGIN_RESET,
      });
    }
  }, [success, error, navigation, dispatch, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };

  return (
    <div className="container">
      <Auth />
      <div className="auth-right">
        <form className="infoAuth auth-form" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div>
            <input
              type="email"
              className="infoInput"
              name="username"
              placeholder="User Name"
              value={data.username}
              required
              autoFocus
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
          </div>
          <button
            type="submit"
            className="button auth-button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="confirmbee">
            <span>
              A new bee? <Link to="/auth/register">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
