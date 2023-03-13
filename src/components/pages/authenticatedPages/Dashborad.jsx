import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/authContext";

//COMPONENTS IMPORTS
import Navigation from "./Navigation";
import Browse from "./Browse";
import Category from "./Category";
import OtherCategorySection from "./OtherCategorySection";
import Posts from "./pages/Posts";
import Footer from "./Footer";
import LessRatedCompanies from "./LessRatedCompany";

const Dashboard = () => {
  const { grantAccess } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (!grantAccess) {
    return navigate("/login");
  }
  React.useEffect(() => {
    if (grantAccess) {
      navigate("/", { replace: true });
    }
  }, [grantAccess]);
  return (
    <>
      <Navigation />
      <Browse />
      <Category />
      <OtherCategorySection header="More offered services" />
       <LessRatedCompanies />
      <Posts />
      <Footer/>
    </>
  );
};

export default Dashboard;
