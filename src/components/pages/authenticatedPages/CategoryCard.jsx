import React from "react";
import { db } from "../../../firebase/firebase-config";
import { getDocs, collection, where, query } from "firebase/firestore";

export default function CategoryCard(props) {
  const {
    src,
    alt,
    header,
    isOpenOrClose,
    address,
    ratings,
    iconName,
    reaction,
    Id,
  } = props;
  const [clickedId, setClickedId] = React.useState(null);

  const handleClickedComponentById = async (id) => {
    const collectionRef = collection(db, "request");
    const filterRef = query(collectionRef, where("id", "==", id));
    const snapshot = await getDocs(filterRef);
    const docs = snapshot.docs.map((doc) => doc.data());
    setClickedId(docs);
    console.log(clickedId)
  };

  return (
    <div
      className="category-container__cat drop-shadow-2xl hover:cursor-pointer"
      id={Id}
      onClick={() => handleClickedComponentById(Id)}
    >
      <div className="category-container__cat-image-container">
        <img src={src} alt={alt} className="category-container__cat-image" />
        <div className="drop-shadow-md">
          <i className={`fa-solid fa-${reaction}`}></i>
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
    </div>
  );
}
