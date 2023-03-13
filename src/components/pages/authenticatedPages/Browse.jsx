import React from "react";

export default function Browse() {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <>
      <div className="browse-container">
        <div className="browse-container__subnav">
          <h1 className="browse-container__subnav__header">Browse</h1>
          <form>
            <div className="browse-container__subnav__location">
              <i className="fa-solid fa-location-dot"></i>
              <p>Location</p>
            </div>
            <div className="form">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="grocery stores, event handlers, laundry stops, etc."
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
              />
            </div>
          </form>
        </div>

        <div className="browse-container__category-container">
          <h1 className="browse-container__category-container-header">
            Explore by category
          </h1>
          <div className="browse-container__category-container-cat">
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>Grocery</h1>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>Laundry</h1>
              <i className="fa-solid fa-hands-bubbles"></i>
            </div>
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>Photography</h1>
              <i className="fa-solid fa-camera"></i>
            </div>
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>Gamers</h1>
              <i className="fa-solid fa-gamepad"></i>
            </div>
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>Catering</h1>
              <i className="fa-solid fa-bowl-food"></i>
            </div>
            <div className="browse-container__category-container-cat-one hover:drop-shadow-2xl">
              <h1>More services</h1>
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>

        <div className="browse-container__cards"></div>
      </div>
    </>
  );
}
