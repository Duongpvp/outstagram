import React from "react";
import "./Auth.css";
import Logo from "../../assets/img/Logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="Left-Info">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>OUTSTAGRAM</h1>
          <h5>Share with us your moments</h5>
        </div>
      </div>
      <Login/>
      <SignUp />
    </div>
  );
};

function Login() {
  return (
    <div className="From">
      <h3>WELCOME</h3>
      <form className="infoFrom">
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="Password"
          />
        </div>
        <div>
          <button type="submit" className="btn SignUp-btn">LOGIN</button>
        </div>
      </form>
      <span>No Account . Sign Up</span> 
      <hr />
      <span>Or login with</span>
      <div className="SocialIcons">
        <div className="FacebookIcon">
          <FaFacebookF />
        </div>
        <div className="InstagramIcon">
          <FaInstagram />
        </div>
        <div className="TwitterIcon">
          <FaTwitter />
        </div>
      </div>
      <span>Forgot password</span> 
    </div>
  );
}

function SignUp() {
  return (
    <div className="From">
      <h3>WELCOME</h3>
      <form className="infoFrom">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="User Name (Ex:user@gmail.com)"
            className="infoInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="Password"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Comfirm password"
            className="infoInput"
            name="confirmPasswod"
          />
        </div>
        <div>
          <button type="submit" className="btn SignUp-btn">SIGN UP</button>
        </div>
      </form>
      <span>ALready have an account. Login</span> 
    </div>
  );
}

export default Auth;
