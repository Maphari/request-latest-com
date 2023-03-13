import React from "react";
import TopCategory from "../TopCategory";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../../firebase/firebase-config";
import { ScrollReveal } from "reveal-on-scroll-react";
import CategoryCard from "../CategoryCard";

export default function CateringStore() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getDataFromDB = async () => {
      const collectionReference = collection(db, "request");
      const filteredDocs = query(
        collectionReference,
        where("category", "==", "catering")
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
      <ScrollReveal.div
        animation="fade-in"
        easing="easeIn"
        className="category-container"
      >
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
      </ScrollReveal.div>
    </>
  );
}
