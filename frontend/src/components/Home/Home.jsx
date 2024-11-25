import React from "react";
import "./Home.css";
import MultiItemCarrousel from "./MultiItem";
import RestaurantCard from "../Restaurant/RestaurantCard";

const Home = () => {
  const restaurant = [1, 1, 1, 1, 1, 1];

  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[100vw] z-10 text-center  text-[#fff]">
          <p className="text-4xl lg:text-5xl font-bold z-10 py-5">
            Free Online Ordering System
          </p>
          <p className="text-4xl lg:text-5xl font-bold z-10 pb-5">
            for Restaurants
          </p>
          <p className="z-10 text-xl lg:text-4xl">
            Feed more of your hungry customers by tonight with our restaurant
            online ordering system software
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 ">
        <p className="text-2xl font-semibold text-gray-400 pb-8 px-10">
          Top Meals
        </p>
        <MultiItemCarrousel />
      </section>

      <section className="px-5 lg:px-20">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          Order from our Handpicked Favorites
          <div className="flex flex-wrap items-center justify-around">
            {restaurant.map((item) => (
              <RestaurantCard />
            ))}
          </div>
        </h1>
      </section>
    </div>
  );
};

export default Home;
