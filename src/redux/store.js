import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/userSlice";
import useProductReducer from "./features/productSlice";
export const store = configureStore({
    reducer: {
        user: useReducer,       // Assign the user reducer to the `user` key
        product: useProductReducer, // Assign the product reducer to the `product` key
    },
    });