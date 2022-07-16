import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Login() {
  return (
    <div className="container">
      <Auth />
      <div className="auth-right">
        <form className="info auth-form">
          <h3>Login</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              required
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
