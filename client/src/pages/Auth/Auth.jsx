import React from "react";
import LogoImg from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./Auth.css";
const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-left">
        <img src={LogoImg} alt="logo-img" draggable="false" />
        <div className="webname">
          <h1 className="logoGrad">AIA Hub</h1>
          <h6>Explore the world of possibilities!</h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};

function Signup() {
  return (
    <div className="auth-right">
      <form className="info auth-form">
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
            Already a bee? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Auth;
