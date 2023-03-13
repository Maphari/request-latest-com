import React from "react";
// IMAGES IMPORTS
import photographyCompanyImage from "../../../assets/camera-company.jpg";
import gamerCompanyImage from "../../../assets/gamer.jpg";
import cateringCompanyImage from "../../../assets/catering.jpg";
import laundrycompanyImage from "../../../assets/laundry.jpg";
import groceryCompanyImage from "../../../assets/grocery.jpg";
//COMPONENTS IMPORTS
import CategoryCard from "./CategoryCard";


export default function Category() {
  return (
    <>
      <div className="category-container">
        <CategoryCard
          src={photographyCompanyImage}
          alt="category for photography company"
          header="The photography co."
          isOpenOrClose="Open"
          address="522 Thabo sehume Street"
          ratings="4.5"
          iconName="camera"
        />
        <CategoryCard
          src={gamerCompanyImage}
          alt="category for gamers company"
          header="Gamers co."
          isOpenOrClose="Open"
          address="32 Jeppe Street"
          ratings="4.7"
          iconName="gamepad"
        />
        <CategoryCard
          src={cateringCompanyImage}
          alt="category for catering company"
          header="The best catering"
          isOpenOrClose="Open"
          address="268 bosman street"
          ratings="4.9"
          iconName="bowl-food"
        />
        <CategoryCard
          src={groceryCompanyImage}
          alt="category for grocery company"
          header="Usale co."
          isOpenOrClose="Open"
          address="32 Pretorius street"
          ratings="4.2"
          iconName="basket-shopping"
        />
        <CategoryCard
          src={laundrycompanyImage}
          alt="category for laundry company"
          header="The Laundry co."
          isOpenOrClose="Open"
          address="32 Helen joseph"
          ratings="4.1"
          iconName="hands-bubbles"
        />
      </div>
    </>
  );
}
