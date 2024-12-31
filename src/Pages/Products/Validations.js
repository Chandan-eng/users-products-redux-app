import * as Yup from "yup";
export const productValidationSchema = Yup.object({
    productName: Yup.string().required("Product Name is required"),
    quantity: Yup.string().required("Quantity is required"),
    productPrize: Yup.string()
      .required("Product Prize is required"),
    productImage: Yup.string().required("Product Image is required"),
    productDescription: Yup.string().required("Product Description is required"),
  });