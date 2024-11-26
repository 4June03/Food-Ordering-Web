import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { MdExpandCircleDown } from "react-icons/md";

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log(value);
  };

  const ingredients = [
    {
      category: "Nuts & Seeds",
      ingredient: ["Cashews"],
    },
    {
      category: "Protein",
      ingredient: ["Group beef", "Bacon strips"],
    },

    {
      category: "Bread",
      ingredient: ["Hamburger buns"],
    },

    {
      category: "Vegetable",
      ingredient: ["Lettuce", "Tomato slices", "Pickles", "Onion slices"],
    },
    {
      category: "Condiment",
      ingredient: ["Ketchup"],
    },
  ];

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandCircleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://cdn.24h.com.vn/upload/1-2021/images/2021-01-31/Thuc-hu-tin-don-nu-hoang-phim-18--lo-bang-gia-di-dem-voi-gia-beo-bot-500tr-dem-yui-hatano-3-1612060380-520-width660height568.jpg"
                alt="anh3"
              ></img>
            </div>

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl px-6">
              <p className="font-semibold text-xl">Yui Hatano</p>
              <p>$400</p>
              <p>siêu dâm</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {ingredients.map((item) => (
                <div>
                  <p className="font-semibold">{item.category}</p>
                  <FormGroup>
                    {item.ingredient.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => handleCheckBoxChange(item)}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>

            <div className="pt-5">
              <Button variant="contained" disabled={false}>
                {true ? "add to cart" : "Out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCard;
