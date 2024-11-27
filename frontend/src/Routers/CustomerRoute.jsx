import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import RestaurantDetail from "../components/Restaurant/RestaurantDetail";
import Cart from "../components/Cart/Cart";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar/Navbar";

const CustomerRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default CustomerRoute;