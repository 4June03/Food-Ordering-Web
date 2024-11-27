import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { MdFavorite, MdEvent } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";

const ProfileNavigation = ({ open, handleClose }) => {
  const menu = [
    { title: "Orders", icon: <FaBagShopping /> },
    { title: "Favorites", icon: <MdFavorite /> },
    { title: "Address", icon: <IoHome /> },
    { title: "Notification", icon: <IoIosNotifications /> },
    { title: "Events", icon: <MdEvent /> },
    { title: "Logout", icon: <FiLogOut /> },
  ];

  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };

  return (
    <>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: 1, position: "sticky" }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-20 ">
          {menu.map((item, i) => (
            <>
              <div
                key={i}
                className="px-5 flex items-center cursor-pointer space-x-5"
                onClick={() => handleNavigate(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default ProfileNavigation;
