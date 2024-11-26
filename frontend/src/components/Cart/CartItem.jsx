import { Chip, IconButton } from "@mui/material";
import React from "react";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";

const CartItem = () => {
  return (
    <div className="px-5  bg-[#d4cfcf] py-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://cdn.24h.com.vn/upload/1-2021/images/2021-01-31/Thuc-hu-tin-don-nu-hoang-phim-18--lo-bang-gia-di-dem-voi-gia-beo-bot-500tr-dem-yui-hatano-3-1612060380-520-width660height568.jpg"
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Biryanin</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton>
                  <IoIosRemoveCircleOutline />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center ">
                  {5}
                </div>
                <IconButton>
                  <IconButton>
                    <IoIosAddCircleOutline />
                  </IconButton>
                </IconButton>
              </div>
            </div>
          </div>

          <p>$400</p>
        </div>
      </div>

      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item) => (
          <Chip label={"bread"} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
