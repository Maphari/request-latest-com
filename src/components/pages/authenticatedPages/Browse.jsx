import React from "react";
import TopCategory from "./TopCategory";

export default function Browse() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [location, setLocation] = React.useState([]);
  const [locationErr, setLocationErr] = React.useState("");

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        try {
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const address = data.display_name;
              setLocation(address);
            });
        } catch (error) {
          setLocationErr(error.message);
        }
      });
    } else {
      setLocationErr("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <div className="browse-container">
        <div className="browse-container__subnav">
          <h1 className="browse-container__subnav__header">Browse</h1>
          <form>
            <div className="browse-container__subnav__location">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                {locationErr
                  ? locationErr
                  : location.length > 10
                  ? location.slice(0, 33)
                  : location}
              </p>
            </div>
            <div className="form">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="grocery stores, event handlers, laundry stops, etc."
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
              />
              {searchTerm && (
                <div className="search-box drop-shadow-2xl">{searchTerm}</div>
              )}
            </div>
          </form>
        </div>

        <TopCategory />
      </div>
    </>
  );
}
