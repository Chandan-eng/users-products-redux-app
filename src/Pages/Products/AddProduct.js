import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid2,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productValidationSchema } from "./Validations";
import { addProduct, updateProduct } from "../../redux/features/productSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

export default function AddProduct(props) {
  const { open, handleClose, product } = props;
  const dispatch = useDispatch();

  const handleAddProduct = (values) => {
    console.log("Values:", values);
    dispatch(addProduct(values));
    handleClose();
  };

  const handleUpdate = (values) => {
    dispatch(updateProduct(values));
    handleClose();
  };

  const formik = useFormik({
    initialValues: product
      ? {
          id: product.id || nanoid(),
          productName: product.productName || "",
          quantity: product.quantity || "",
          productPrize: product.productPrize || "",
          gender: product.gender || "",
          productImage: product.productImage || "",
          productDescription: product.productDescription || "",
        }
      : {
          id: nanoid(),
          productName: "",
          quantity: "",
          productPrize: "",
          gender: "",
          productImage: "",
          productDescription: "",
        },
    validationSchema: productValidationSchema,
    onSubmit: handleAddProduct,
  });

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <Box sx={style}>
            <Typography textAlign={"center"} fontSize={20} fontWeight={600}>
              {product ? "Edit Product" : "Add a Product"}
            </Typography>
            <Box>
              {/* Product Name */}
              <Grid2 mt={1}>
                <FormControl
                  fullWidth
                  error={formik.touched.productName && Boolean(formik.errors.productName)}
                >
                  <InputLabel htmlFor="productName">Product Name</InputLabel>
                  <Input
                    id="productName"
                    name="productName"
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.productName && formik.errors.productName && (
                    <FormHelperText>{formik.errors.productName}</FormHelperText>
                  )}
                </FormControl>
              </Grid2>

              <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.quantity && Boolean(formik.errors.quantity)}>
                    <InputLabel htmlFor="quantity">Quantity</InputLabel>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.quantity && formik.errors.quantity && (
                      <FormHelperText>{formik.errors.quantity}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
                <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.productPrize && Boolean(formik.errors.productPrize)}>
                    <InputLabel htmlFor="productPrize">Product Prize</InputLabel>
                    <Input
                      id="productPrize"
                      name="productPrize"
                      value={formik.values.productPrize}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.productPrize && formik.errors.productPrize && (
                      <FormHelperText>{formik.errors.productPrize}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>

                <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.productPrize && Boolean(formik.errors.productPrize)}>
                    <InputLabel htmlFor="productPrize">Product Description</InputLabel>
                    <Input
                      id="productDescription"
                      name="productDescription"
                      value={formik.values.productDescription}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.productDescription && formik.errors.productDescription && (
                      <FormHelperText>{formik.errors.productDescription}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>

              {/* Product Image */}
              <Grid2 mt={2}>
                <FormControl
                  fullWidth
                  error={formik.touched.productImage && Boolean(formik.errors.productImage)}
                >
                  <Input
                    id="productImage"
                    name="productImage"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          formik.setFieldValue("productImage", reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.productImage && formik.errors.productImage && (
                    <FormHelperText>{formik.errors.productImage}</FormHelperText>
                  )}
                </FormControl>
                {formik.values.productImage && (
                  <Box mt={2}>
                    <Typography variant="subtitle1">Image Preview:</Typography>
                    <img
  src={formik.values.productImage}
  alt="Product Preview"
  style={{
    width: "100%", // Makes it responsive to the container's width
    maxWidth: "300px", // Sets a maximum width for better control
    height: "auto", // Maintains aspect ratio
    borderRadius: "8px",
    display: "block", // Ensures proper spacing
    margin: "0 auto", // Centers the image horizontally
  }}
/>

                  </Box>
                )}
              </Grid2>
            </Box>

            {/* Buttons */}
            <Box mt={2} display={"flex"} justifyContent={"center"} gap={2}>
              <Grid2>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </Grid2>
              {product ? (
                <Grid2>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleUpdate(formik.values)}
                  >
                    Update Product Details
                  </Button>
                </Grid2>
              ) : (
                <Grid2>
                  <Button variant="contained" color="success" type="submit">
                    Add Product
                  </Button>
                </Grid2>
              )}
            </Box>
          </Box>
        </form>
      </Modal>
    </Box>
  );
}
