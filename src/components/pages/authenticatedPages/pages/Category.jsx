import React from "react";

export default function Category() {
  return (
    <>
      <div className="category-container">
        <div className="category-container__cat">
          <div className="category-container__cat1">
            <i className="fa-solid fa-bowl-food text-[#fff] p-[0.8rem] text-2xl"></i>
            Grocery
          </div>
          <div className="category-container__cat1">
            <i className="fa-solid fa-hands-bubbles bg-[#050505] text-[#fff] p-[0.8rem] text-2xl"></i>
            Laundry
          </div>
          <div className="category-container__cat1">
            <i className="fa-solid fa-calendar-days bg-[#050505] text-[#fff] p-[0.8rem] text-2xl"></i>
            Event
          </div>
          <div className="category-container__cat1">
            <i className="fa-solid fa-landmark bg-[#050505] text-[#fff] p-[0.8rem] text-2xl"></i>
            Alcohol
          </div>
          <div className="category-container__cat1">
            <i className="fa-solid fa-wine-bottle bg-[#050505] text-[#fff] p-[0.8rem] text-2xl"></i>
            Loan
          </div>
        </div>
      </div>
    </>
  );
}
