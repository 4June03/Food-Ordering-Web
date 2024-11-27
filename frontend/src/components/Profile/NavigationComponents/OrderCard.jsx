import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5 ">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://daylambanh.edu.vn/wp-content/uploads/2022/10/cach-lam-pizza-bang-noi-chien-khong-dau.jpg"
          alt="anh"
        ></img>
        <div>
          <p>ssss</p>
          <p>ssss</p>
        </div>
      </div>

      <Button className="cursor-not-allowed">Completed</Button>
    </Card>
  );
};

export default OrderCard;
