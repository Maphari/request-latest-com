import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function TopCategory() {
  const location = useLocation();
  return (
    <>
      <div className="browse-container__category-container">
        <h1 className="browse-container__category-container-header">
          Explore by category
        </h1>
        <div className="browse-container__category-container-cat">
          <NavLink
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/grocery" ? "actived" : ""
            }`}
            to="/grocery"
          >
            <h1>Grocery</h1>
            <i className="fa-solid fa-basket-shopping"></i>
          </NavLink>
          <NavLink
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/laundry" ? "actived" : ""
            }`}
            to="/laundry"
          >
            <h1>Laundry</h1>
            <i className="fa-solid fa-hands-bubbles"></i>
          </NavLink>
          <NavLink
            to="/photography"
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/photography" ? "actived" : ""
            }`}
          >
            <h1>Photography</h1>
            <i className="fa-solid fa-camera"></i>
          </NavLink>
          <NavLink
            to="/gamers"
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/gamers" ? "actived" : ""
            }`}
          >
            <h1>Gamers</h1>
            <i className="fa-solid fa-gamepad"></i>
          </NavLink>
          <NavLink
            to="/catering"
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/catering" ? "actived" : ""
            }`}
          >
            <h1>Catering</h1>
            <i className="fa-solid fa-bowl-food"></i>
          </NavLink>
          <NavLink
            to="/delivery"
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/delivery" ? "actived" : ""
            }`}
          >
            <h1>Delivery</h1>
            <i className="fa-solid fa-truck"></i>
          </NavLink>
          <NavLink
            to="/more"
            className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
              location.pathname === "/more" ? "actived" : ""
            }`}
          >
            <h1>More services</h1>
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
}
