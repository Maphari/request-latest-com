import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
//COMPONENTS IMPORTS
import CategoryCard from "./CategoryCard";
// DB
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
// SWIPER SLIDER
import { Link } from "react-router-dom";

export default function LessRatedCompanies() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getDataFromDB = async () => {
      const collectionReference = collection(db, "request");
      const filteredDocs = query(
        collectionReference,
        where("rating", "<=", 4)
      );
      const snapShot = await getDocs(filteredDocs);
      const docs = snapShot.docs.map((doc) => doc.data());
      setData(docs);
      setLoading(false);
    };
    getDataFromDB();
  }, []);

  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }
  return (
    <>
      <div className="otherCategorySection-container">
        <div className="flex align-items-center justify-between my-[2rem]">
          <h1 className="otherCategorySection-container__header">
            Less rated companies
          </h1>
          <Link to="/viewmore" className="font-medium view">
            View all
          </Link>
        </div>
      </div>
      <div animation="fade-in" easing="easeIn" className="category-container">
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
