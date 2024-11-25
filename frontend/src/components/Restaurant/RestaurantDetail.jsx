import React, { useState } from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from "@mui/material";
import MenuCard from "./MenuCard";

const RestaurantDetail = () => {
  const categories = ["pizza", "biryani", "burger", "chicken", "rice"];

  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
  ];

  const [foodType, setFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  const menu = [1, 1, 1, 1];

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-5 ">
          Home/india/indian fast food
        </h3>
        <div className="">
          <div className="row">
            <div className="col col-lg-6 my-3">
              <img
                className="w-full h-[40vw]"
                src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
              ></img>
            </div>
          </div>

          <div className="row"></div>
          <div className="col col-lg-6 my-3">
            <img
              className="w-full h-[40vw]"
              src="data:image/jpeg;base64,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"
            ></img>
          </div>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            quisquam doloremque sint voluptate
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <MdAddLocationAlt className="text-xl" />
              <span>Bac Tu Liem, Ha Noi</span>
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <FaCalendarAlt className="text-xl" />
              <span>olestiae esse eum ullam sit enim odit.</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-xl">
          <div className="box space-y-5 lg:sticky top-28">
            <div className="foodType">
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div className="Category">
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                  value={foodType}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
