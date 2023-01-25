import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../attachments/logo.svg";
import logo_title from "../attachments/softLanding.svg";

import "./LoginPage.css";
import { useApp } from "../Contexts/appContext";

export default function LoginPage() {
  const [loginMode, setLoginMode] = useState(false);

  const navigate = useNavigate();
  const toCultureSelection = () => {
    navigate("/CultureSelection");
  };

  const { fetchSignUp, fetchLogin } = useApp();

  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleSignUp(e) {
    e.preventDefault();
    fetchSignUp(signup).then((isFetch) => {
      if (isFetch) {
        toCultureSelection();
      }
    });
  }

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    fetchLogin(login).then((isLogedin) => {
      if (isLogedin) {
        toCultureSelection();
      }
    });
  }

  return (
    <div className="page">
      <div className="topPage">
        <img id="logo" src={logo} alt="logo" />
        <img id="logo_title" src={logo_title} alt="logo_title" />
      </div>
      <div className="bodyPage">
        {loginMode ? (
          <form onSubmit={handleLogin}>
            <label>
              <p>Email</p>
              <input
                type="email"
                onChange={(e) => setlogin({ ...login, email: e.target.value })}
                required
              ></input>
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) =>
                  setlogin({ ...login, password: e.target.value })
                }
                required
              ></input>
            </label>
            <div id="loginbutton-container">
              <input id="logInButton" type="submit" value="Login"></input>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            <label>
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) =>
                  setSignup({ ...signup, firstName: e.target.value })
                }
                required
              ></input>
            </label>
            <label>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) =>
                  setSignup({ ...signup, lastName: e.target.value })
                }
                required
              ></input>
            </label>
            <label>
              <p>Email</p>
              <input
                type="email"
                onChange={(e) =>
                  setSignup({ ...signup, email: e.target.value })
                }
                required
              ></input>
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) =>
                  setSignup({ ...signup, password: e.target.value })
                }
                required
              ></input>
            </label>
            <div id="loginbutton-container">
              <input id="logInButton" type="submit" value="Sign Up"></input>
            </div>
          </form>
        )}
      </div>
      <div className="bottomPage">
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => setLoginMode(!loginMode)}
        >
          {loginMode
            ? "Create an account here!"
            : "Already a user? Please login"}
        </p>
      </div>
    </div>
  );
}
