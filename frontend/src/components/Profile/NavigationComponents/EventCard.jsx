import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

import { MdDelete } from "react-icons/md";

const EventCard = () => {
  return (
    <>
      <Card className="flex flex-col space-y-4 w-[300px]">
        <CardMedia
          className="h-[345px]"
          image="https://www.javdatabase.com/idolimages/full/koharu-shiina.webp"
        />
        <CardContent>
          <Typography variant="h5">Koharu Shiina</Typography>
          <Typography variant="body2">Wife material</Typography>
          <div className="py-2 space-y-2">
            <p>{"Ha Noi"}</p>
            <p className="text-sm text-blue-500">
              November 27, 2024, 12:00 PM (UTC)
            </p>
            <p className="text-sm text-red-600">
              November 27, 2024, 12:00 PM (UTC)
            </p>
          </div>
        </CardContent>

        {true && (
          <CardActions>
            <IconButton>
              <MdDelete />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </>
  );
};

export default EventCard;
