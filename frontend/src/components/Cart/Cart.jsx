import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import { MdAddLocationAlt } from "react-icons/md";
import { useState } from "react";
import { Field, Formik } from "formik";
// import * as Yup from "yup";
const Cart = () => {
  const cartItems = [1, 1];
  const createOrderUsingSelectedAddress = () => {};

  const handleOpenAddressModal = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };

  //   const validationSchema = Yup.object().shape({
  //     streetAddress: Yup.string().required("street address is required"),
  //     state: Yup.string().required("state is required"),
  //     pincode: Yup.required("pincode is required"),
  //     city: Yup.string().required("city is required"),
  //   });

  const handleSubmit = () => {};

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cartItems.map((item) => (
            <CartItem />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="py-5 font-semibold">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <p>Item total</p>
                <p>$4000</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Deliver fee</p>
                <p>$4000</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Platform fee</p>
                <p>$4000</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>GST and Restaurant changes</p>
                <p>$4000</p>
              </div>
              <Divider />
            </div>
            <div className="pt-3 pb-8 flex justify-between font-semibold">
              <p>Total</p>
              <p>$4000</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item) => (
                <AddressCard
                  item={item}
                  showButton={true}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <MdAddLocationAlt className="mt-2 text-2xl" />
                <div className="space-y-3">
                  <h1 className="font-semibold text-lg">Add new Address</h1>

                  {true && (
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleOpenAddressModal}
                    >
                      Add
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} initialValues={initialValues} onSubmit={handleSubmit}>
          <Formik>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Deliver here
                </Button>
              </Grid>
            </Grid>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
