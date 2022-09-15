import { configureStore } from "@reduxjs/toolkit";
import categoryReducerSlices from "../slices/categoryReducerSlices";

export const store = configureStore({
  reducer:{
    category: categoryReducerSlices,
  }
})