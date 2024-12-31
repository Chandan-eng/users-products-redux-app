import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid2,
    Input,
    InputLabel,
    Modal,
    Radio,
    RadioGroup,
    Typography,
    FormHelperText,
  } from "@mui/material";
  import { useFormik } from "formik";
  import React, {useState } from "react";
  import { userValidationSchema } from "./Validations"; // Ensure this file exports a valid Yup schema.
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addUser,updateUser } from "../redux/features/userSlice";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  
  export default function AddUser(props) {
    const { open, handleClose,user } = props;
    const dispatch=useDispatch();
    const handleAddUser = (values) => {
        dispatch(addUser(values));
        handleClose();
    };

    const handleUpdate = (values) => {
        dispatch(updateUser(values));
        handleClose();
    };

  
    const formik = useFormik({
      initialValues: props.user
        ? {
            id: props.user.id || nanoid(),
            fullName: props.user.fullName || "",
            email: user.email || "",
            phone: user.phone || "",
            gender: user.gender || "",
            address: user.address || "",
          }
        : {
            id: nanoid(),
            fullName: "",
            email: "",
            phone: "",
            gender: "",
            address: "",
          },
      validationSchema: userValidationSchema,
      onSubmit: handleAddUser,
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
                Add a User
              </Typography>
              <Box>
                <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.fullName && Boolean(formik.errors.fullName)}>
                    <InputLabel htmlFor="fullName">Full Name</InputLabel>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                      <FormHelperText>{formik.errors.fullName}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
                <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <FormHelperText>{formik.errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
                <Grid2 mt={1}>
                  <FormControl fullWidth error={formik.touched.phone && Boolean(formik.errors.phone)}>
                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                    <Input
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <FormHelperText>{formik.errors.phone}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
                <Grid2 mt={2}>
                  <FormControl error={formik.touched.gender && Boolean(formik.errors.gender)}>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="gender"
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {formik.touched.gender && formik.errors.gender && (
                      <FormHelperText>{formik.errors.gender}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
                <Grid2 mt={2}>
                  <FormControl fullWidth error={formik.touched.address && Boolean(formik.errors.address)}>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input
                      id="address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <FormHelperText>{formik.errors.address}</FormHelperText>
                    )}
                  </FormControl>
                </Grid2>
              </Box>
              <Box mt={2} display={"flex"} justifyContent={"center"} gap={2}>
                <Grid2>
                  <Button variant="contained" color="error" onClick={handleClose}>
                    Cancel
                  </Button>
                </Grid2>
               {user ? <Grid2>
                  <Button variant="contained" color="success" onClick={()=>handleUpdate(formik.values)}>
                    Edit
                  </Button>
                </Grid2>
                :
                <Grid2>
                  <Button variant="contained" color="success" type="submit">
                    Add User
                  </Button>
                </Grid2>}
              </Box>
            </Box>
          </form>
        </Modal>
      </Box>
    );
  }
  