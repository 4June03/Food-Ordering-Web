import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";

const RestaurantCard = () => {
  return (
    <>
      <div className="pt-6">
        <Card style={{ width: "19rem" }}>
          <div className="relative">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2019/01/21/12/47/burger-3946012_1280.jpg"
              className="w-full h-[10rem] rounded-t-md"
            />
            <Badge
              bg="primary"
              className="absolute top-2 left-2 text-sm px-2 py-1 rounded-full bg-green-400 text-[#fff]"
            >
              Open
            </Badge>
          </div>

          <Card.Body>
            <Card.Title className="text-lg font-semibold text-gray-500">
              Card Title
            </Card.Title>
            <Card.Text className="text-sm text-gray-500">
              Some quick example text to build on the
            </Card.Text>

            <Button variant="primary">
              {true ? <FcLike /> : <IoIosHeartEmpty />}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default RestaurantCard;
