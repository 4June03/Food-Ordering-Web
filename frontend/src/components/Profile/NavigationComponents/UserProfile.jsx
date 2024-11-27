import { Button } from "@mui/material";
import React from "react";
import { MdAccountCircle } from "react-icons/md";

const UserProfile = () => {
  const handleLogout = () => {};

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center">
        <MdAccountCircle className="text-[9rem]" />
        <p className="py-5 text-2xl font-semibold">Nguyen Huu Nghia dev</p>
        <p className="mb-8">Email: nghiadev03@gmail.com</p>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
