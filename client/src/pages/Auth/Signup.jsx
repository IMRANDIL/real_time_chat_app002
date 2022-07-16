import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Signup() {
  return (
    <div className="container">
      <Auth />

      <div className="auth-right">
        <form className="infoAuth auth-form">
          <h3>Sign up</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              required
            />
          </div>
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
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Confirm Password"
              required
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
