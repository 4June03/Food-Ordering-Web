import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarrouselItem";
import { CarouselItem } from "react-bootstrap";
// import topMeals from "./topMeal";
import Slider from "react-slick";
import CarrouselItem from "./CarrouselItem";

const MultiItem = () => {
  const topMeals = [
    {
      image:
        "https://cdn.pixabay.com/photo/2023/05/27/12/35/noodles-8021415_1280.png",
      title: "Pho (Phở)",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_1280.jpg",
      title: "Sushi",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      title: "pizza",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_1280.jpg",
      title: "Tacos",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_1280.jpg",
      title: "Burgers",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2015/09/05/20/00/dim-sum-924912_1280.jpg",
      title: "Dim Sum",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/26/17/09/paella-1007447_1280.jpg",
      title: "Paella",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2018/03/15/10/32/bars-ramen-in-saigon-3227774_1280.jpg",
      title: "Curry",
    },

    {
      image:
        "https://cdn.pixabay.com/photo/2018/03/15/10/33/bars-ramen-in-saigon-3227779_1280.jpg",
      title: "Ramen",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeals.map((item, index) => (
          <CarrouselItem key={index} image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItem;
