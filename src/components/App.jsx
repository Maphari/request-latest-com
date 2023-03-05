import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./contex/authContext";

// PAGES
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import Dashboard from "./pages/Dashborad";

function App() {
  const { grantAccess } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
