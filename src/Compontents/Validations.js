import * as Yup from "yup";
export const userValidationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
  });