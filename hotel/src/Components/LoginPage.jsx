import React, { useState } from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";
import Home1 from "../Components/Assests/images/Home1.jpg";

const Login = ({ onLogin }) => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setErrorMessage("");
      onLogin(true);
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <img src={Home1} alt="Background" className="login-image" />
      <form className="login-form">
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <br />
        <div className="register">
          Click <Link to="/register">here</Link> to Register
        </div>
        <div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <div className="error">{errorMessage}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;