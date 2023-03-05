import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../../../firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const signInWithEmailPassword = async () => {
    const userToken = localStorage.getItem("token");
    try {
      if (!email || !password) {
        handleEmailErr();
        handlePasswordErr();
      } else if (userToken) {
        await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("isAuth", true);
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      localStorage.setItem("isAuth", true);
      navigate("/home");
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleEmailErr = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailErr("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailErr("Please provide a valid email address");
    } else {
      setEmailErr("");
    }
  };

  const handlePasswordErr = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!passwordRegex.test(password)) {
      setPasswordErr("at least 8 charactes that contains letters and symbols");
    } else if (password.length < 8) {
      setPasswordErr("more than 8 characters required");
    } else {
      setPasswordErr("");
    }
  };
  const prevent = (e) => {
    e.preventDefault();
  };

  const divEmailErr = {
    border: `1px solid ${emailErr && "red"}`,
  };
  const divPasswordErr = {
    border: `1px solid ${passwordErr ? "red" : null}`,
  };

  return (
    <>
      <div className="register-container">
        <div className="register-container__inner drop-shadow-2xl rounded-lg">
          <div className="inner">
            <h1 className="register-container__inner-head">Login</h1>
            <p className="register-container__inner-para">
              Welcome back amazing feature are ready for you
            </p>

            <form onSubmit={prevent}>
              {err && err}
              <div className="input-group mb-1">
                <span
                  className="input-group-text rounded-md"
                  id="basic-addon1"
                  style={divEmailErr}
                >
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Example@gmail.com"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={divEmailErr}
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {emailErr && emailErr}
              </p>
              <div className="input-group mb-1">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={divPasswordErr}
                >
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="at least 8 charactes"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={divPasswordErr}
                />
              </div>
              <p className="text-[red] err mb-[0.75rem]">
                {passwordErr && passwordErr}
              </p>
              <p>
                By logging in you agree to our{" "}
                <span className="color">terms</span> and{" "}
                <span className="color">conditions</span>
              </p>
              <button
                className="btn-sub rounded-lg"
                onClick={signInWithEmailPassword}
              >
                Log in
              </button>
              <div className="google rounded-lg" onClick={signInWithGoogle}>
                <i className="fa-brands fa-google"></i> Log in with google
              </div>
              <div className="container-btn">
                <p className="para">Don't have an account?</p>
                <button className="btn-log" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h1>Request.com</h1>
          </div>
        </div>
      </div>
    </>
  );
}
