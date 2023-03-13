import React from "react";
import { GetDataFromDBContext } from "../../../contex/getDataFromDBContext";
import CategoryCard from "../CategoryCard";
import { ScrollReveal } from "reveal-on-scroll-react";
import TopCategory from "../TopCategory";

export default function ViewAll() {
  const { data } = React.useContext(GetDataFromDBContext);
  return (
    <>
      <div className="category-container">
        <TopCategory />
        {data.map((item) => (
          <CategoryCard
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
