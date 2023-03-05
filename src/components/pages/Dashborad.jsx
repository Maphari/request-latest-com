import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contex/authContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { grantAccess } = useContext(AuthContext);
  if (!grantAccess) {
    return navigate("/login");
  } else {
    return (
      <>
        <h1>Welcome {grantAccess.email}</h1>
      </>
    );
  }
};

export default Dashboard;
