import React, { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./NavigationComponents/UserProfile";
import Orders from "./NavigationComponents/Orders";
import Favorites from "./NavigationComponents/Favorites";
import Address from "./NavigationComponents/Address";
import Notification from "./NavigationComponents/Notification";
import Event from "./NavigationComponents/Event";

const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation />
      </div>
      <div className=" lg:w-[80%]">
        <Routes>
          <Route path="/" element={<UserProfile />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/events" element={<Event />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
