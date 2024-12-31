import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Grid2 } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

export default function ProductDashBoard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate();
  const handleAddProduct = () => {
    setOpen(true);

  };
const products=useSelector((state)=>state.product.products);
console.log("Products:",products);
  return (
    <Box margin={2}>
      {
        open && <AddProduct open={open} handleClose={handleClose}/>
      }
      <Grid2
        bgcolor={"grey"}
        p={2}
        color={"#fff"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid2 display={"flex"} alignItems={"space-between"} gap={2}>
            <ArrowBack onClick={()=>window.history.back()} style={{cursor:"pointer"}}/>
        <Grid2>Product DashBoard</Grid2>
        </Grid2>
        <Grid2>
          <Button variant="contained" color="success" onClick={handleAddProduct}>
            Add New Product
          </Button>
        </Grid2>
      </Grid2>
      <ProductList products={products}/>
    </Box>
  );
}
