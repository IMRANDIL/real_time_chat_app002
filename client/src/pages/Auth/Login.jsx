import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigate();
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      username: "",
      password: "",
    });
    navigation("/");
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
              required
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              required
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="button auth-button">
            Login
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
