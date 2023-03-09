import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
// IMAGES IMPORTS
import logoImage from "../../../assets/logo.png";

const Navigation = () => {
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="container-dashboard">
        <Link to="/" className="container-dashboard__head-container">
          <img
            src={logoImage}
            alt="logo"
            className="container-dashboard__head-container__image"
          />
          <h1 className="container-dashboard__head-container__header">
            equest.
          </h1>
        </Link>
        <ul className="container-dashboard__links">
          <li
            className={`container-dashboard__link drop-shadow-xl ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <NavLink to="/">Browse</NavLink>
          </li>
          <li
            className={`container-dashboard__link drop-shadow-xl ${
              location.pathname === "/message" ? "active" : ""
            }`}
          >
            <NavLink to="/message">Message</NavLink>
          </li>
          <li
            className={`container-dashboard__link drop-shadow-xl ${
              location.pathname === "/latest" ? "active" : ""
            }`}
          >
            <NavLink to="/latest">Latest</NavLink>
          </li>
          <li
            className={`container-dashboard__link drop-shadow-xl ${
              location.pathname === "/notification" ? "active" : ""
            }`}
          >
            <NavLink to="/notification">Notification</NavLink>
          </li>
          <li
            className={`container-dashboard__link drop-shadow-xl ${
              location.pathname === "/settings" ? "active" : ""
            }`}
          >
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>

        <ul>
          <li
            className={`container-dashboard__link drop-shadow-xl hover:cursor-pointer`}
            onClick={handleSignOut}
          >
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
