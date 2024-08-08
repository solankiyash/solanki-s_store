import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/LoginRegister.css";

import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const [state, setState] = useState("Singup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const singup = async () => {
    await axios
      .post("http://localhost:4000/user", formData)
      .then((res) => {
        if (res.data.success === true) {
          setState("Login");
          setFormData({
            email: "",
            password: "",
          });
        } else {
          setState("Singup");
        }
      })
      .catch((err) => console.log(err));
  };

  const login = async () => {
    await axios
      .post("http://localhost:4000/login", formData)
      .then((res) => {
        if (res.data.success === true) {
          localStorage.setItem("auth-token", JSON.stringify(res.data));
          setState("");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginsingup">
      <div className="loginsinup-container">
        <h1>{state}</h1>
        <div className="loginsingup-fileds">
          {state === "Singup" ? (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "login" ? login() : singup();
          }}
        >
          Continue
        </button>
        {state === "Singup" ? (
          <p className="loginsinup-login">
            Already have an account{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setState("login")}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="loginsinup-login">
            Create an account{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setState("Singup")}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
