import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
import { AuthContext } from "./contex/authContext";

// PAGES UNAUTHENTICATED
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import Dashboard from "./pages/authenticatedPages/Dashborad";
// PAGES AUTHENTICATED
import Message from "../components/pages/authenticatedPages/pages/Message";
import Latest from "../components/pages/authenticatedPages/pages/Latest";
import Settings from "./pages/authenticatedPages/pages/Settings";
import Account from "./pages/authenticatedPages/pages/Account";
import ViewAll from "./pages/authenticatedPages/pages/ViewAll";
import GroceryStores from "./pages/authenticatedPages/pages/GroceryStores";
import LaundryStore from "./pages/authenticatedPages/pages/LaundryStore";
import GamersStore from "./pages/authenticatedPages/pages/GamersStore";
import PhotographyStore from "./pages/authenticatedPages/pages/PhotographyStore";
import CateringStore from "./pages/authenticatedPages/pages/CateringStore";
import DeliveryStore from "./pages/authenticatedPages/pages/DeliveryStore";
import CompanyProfile from "./pages/authenticatedPages/pages/CompanyProfile";

const UnAuthorizedUserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
const AuthorizedUserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/message" element={<Message />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/account" element={<Account />} />
      <Route path="/viewmore" element={<ViewAll />} />
      <Route path="/grocery" element={<GroceryStores />} />
      <Route path="/laundry" element={<LaundryStore />} />
      <Route path="/gamers" element={<GamersStore />} />
      <Route path="/catering" element={<CateringStore />} />
      <Route path="/photography" element={<PhotographyStore />} />
      <Route path="/delivery" element={<DeliveryStore />} />
      <Route path="/profile" element={<CompanyProfile />} />
    </Routes>
  );
};

function App() {
  const { grantAccess } = React.useContext(AuthContext);
  return grantAccess ? <AuthorizedUserRoutes /> : <UnAuthorizedUserRoutes />;
}

export default App;
