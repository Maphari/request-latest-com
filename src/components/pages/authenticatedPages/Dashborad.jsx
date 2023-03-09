import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/authContext";

//COMPONENTS IMPORTS
import Navigation from "./Navigation";
import Browse from "./pages/Browse";

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
    </>
  );
};

export default Dashboard;
