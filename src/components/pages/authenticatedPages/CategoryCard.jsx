import React from "react";

export default function CategoryCard(props) {
  const { src, alt, header, isOpenOrClose, address, ratings, iconName } = props;
  return (
    <div className="category-container__cat drop-shadow-2xl hover:cursor-pointer  hover:transform hover:scale-110">
      <div className="category-container__cat-image-container">
        <img src={src} alt={alt} className="category-container__cat-image" />
        <div className="drop-shadow-md">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="category-container__cat-inner">
        <h1 className="category-container__cat-inner-header">{header}</h1>
        <p className="category-container__cat-inner-para">{isOpenOrClose}</p>
      </div>
      <div className="flex justify-between align-items-center">
        <p className="category-container__cat-para">
          <i className="fa-solid fa-location-dot text-[#333]"></i> {address}
        </p>
        <i className={`fa-solid fa-${iconName}`}></i>
      </div>
      <div className="category-container__cat-rating">
        <p>Company ratings</p>
        <div>{ratings}</div>
      </div>
      <button>View company</button>
    </div>
  );
}
