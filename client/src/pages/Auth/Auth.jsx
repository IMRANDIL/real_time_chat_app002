import React from "react";
import LogoImg from "../../img/logo.png";
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
      <form className="info">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
        </div>
      </form>
    </div>
  );
}

export default Auth;
