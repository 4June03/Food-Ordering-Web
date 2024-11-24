import React from "react";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { Image, Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFastfood } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="px-5 z-50 py-3 hover:bg-[#31373d] lg:px-20 flex justify-between bg-transparent fixed w-full">
      <div className="lg:mr-10 cursor-pointer flex items-center">
        <li className="logo font-semibold text-gray-300 text-2xl list-none flex items-center content-center">
          <MdOutlineFastfood className="mr-2" />
          Nghia Food
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <Button>
            <FaSearch className="text-white text-2xl" />
          </Button>
        </div>

        <div className="">
          <Image
            src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2024/10/11/base64-17286224852681986997960.png"
            roundedCircle
            alt="Avatar"
            className="rounded-full w-12 h-12"
          />
        </div>

        <div className="">
          <Button className="flex justify-between">
            <div className="relative w-fit">
              <TiShoppingCart className="text-white text-3xl" />
              <Badge
                bg="primary"
                className="translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 text-sm px-2 py-1 rounded-full bg-green-400 text-[#fff]"
              >
                1
              </Badge>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
