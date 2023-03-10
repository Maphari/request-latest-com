import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS IMPORTS
import CategoryCard from "./CategoryCard";
//CONTEXT
import { GetDataFromDBContext } from "../../contex/getDataFromDBContext";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function OtherCategorySection(props) {
  const { header } = props;
  const { data } = React.useContext(GetDataFromDBContext);
  return (
    <>
      <div className="otherCategorySection-container">
        <div className="flex align-items-center justify-between my-[2rem]">
          <h1 className="otherCategorySection-container__header">{header}</h1>
          <Link to="/viewmore" className="font-medium view">
            View all
          </Link>
        </div>
      </div>
      <div className="category-container">
        {data.map((item) => (
          <CategoryCard
            Id={item.id}
            key={item.id}
            header={item.shopName}
            src={item.imageUrl}
            alt={item.category}
            isOpenOrClose="open"
            address={item.location}
            ratings={item.rating}
            iconName={
              item.category === "catering"
                ? "bowl-food"
                : item.category === "laundry"
                ? "hands-bubbles"
                : item.category === "grocery"
                ? "basket-shopping"
                : item.category === "gamers"
                ? "gamepad"
                : item.category === "photography"
                ? "camera"
                : item.category === "delivery"
                ? "truck"
                : null
            }
          />
        ))}
        <ScrollReveal.div
          animation="fade-in"
          easing="easeIn"
          className="category-container__cat drop-shadow-2xl hover:cursor-pointer hx-[5rem]"
        >
          <i className="fa-solid fa-plus font-2xl"></i>
        </ScrollReveal.div>
      </div>
    </>
  );
}
