import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Category from "./Category";

export default function Browse() {
  const location = useLocation();
  return (
    <>
      <div className="browse-container">
        <h1 className="browse-container__header">Browse</h1>
        <div className="browse-container__toggle-option">
          <NavLink
            to="/delivery"
            className={`link ${(location.pathname = "/display"
              ? "active-choice"
              : "")}`}
          >
            Delivery
          </NavLink>
          <NavLink
            to="/pickup"
            className={`link ${
              location.pathname === "/pickup" ? "active-choice" : ""
            }`}
          >
            Pick up
          </NavLink>
        </div>
        <div className="browse-container__toggle-location">
          <i className="fa-solid fa-location-dot mr-3"></i> user location
        </div>
        <form>
          <div className="form-container">
            <i className="fa-solid fa-magnifying-glass text-white text-[15px] ml-6"></i>
            <input
              type="text"
              className="browse-container__searchbar"
              placeholder="Grocery, laundry, event, etc."
            />
          </div>
        </form>
        <div className="browse-container__toggle-cart">
          <i className="fa-solid fa-cart-shopping"></i> {0} Cart
        </div>
      </div>
      <Category />
    </>
  );
}
