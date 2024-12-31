import { Box, Button, Grid2 } from "@mui/material";
import React, { useState } from "react";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate=useNavigate();
    const handleProductDashboard=()=>{
        navigate("/product-dashboard");
    }
    const users=useSelector((state)=>state.user.users);
  return (
    <Box margin={2}>
        {
            open && <AddUser open={open} handleClose={handleClose}/>
        }
      <Grid2
        bgcolor={"grey"}
        p={2}
        color={"#fff"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid2>User DashBoard</Grid2>
        <Grid2>
          <Button variant="contained" color="info" style={{marginRight:10}} onClick={handleProductDashboard}>Click Here for Product Details</Button>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Add User
          </Button>
        </Grid2>
      </Grid2>
      <AddUser />
      <UserList users={users}/>
    </Box>
  );
}
