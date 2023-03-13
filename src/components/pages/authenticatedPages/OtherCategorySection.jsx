import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS IMPORTS
import CategoryCard from "./CategoryCard";
//CONTEXT
import { GetDataFromDBContext } from "../../contex/getDataFromDBContext";
import { documentId } from "firebase/firestore";

export default function OtherCategorySection(props) {
  const { header } = props;
  const { data } = React.useContext(GetDataFromDBContext);
  return (
    <>
      <div className="otherCategorySection-container">
        <div className="flex align-items-center justify-between my-[2rem]">
          <h1 className="otherCategorySection-container__header">{header}</h1>
          <Link to="/viewmore" className="font-medium">
            View all
          </Link>
        </div>
      </div>
      <div className="category-container">
       {data.map((item, index) => (
        <CategoryCard key={index} src={item.imageUrl}/>
        )) }
        {/* {console.log(data.map((item) => <CategoryCard key={item.id} />))} */}
      </div>
    </>
  );
}
