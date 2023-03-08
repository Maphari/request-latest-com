import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contex/authContext";

const Dashboard = () => {
  const { grantAccess } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (!grantAccess) {
    return navigate("/login");
  } else {
    return (
      <>
        <h1>welcome {grantAccess.email}</h1>
      </>
    );
  }
};

export default Dashboard;
