import { configureStore } from "@reduxjs/toolkit";
import categoryReducerSlices from "../slices/categoryReducerSlices";
import searchKeywordReducerSlices from "../slices/searchKeywordReducerSlices";

export const store = configureStore({
  reducer:{
    category: categoryReducerSlices,
    search: searchKeywordReducerSlices
  }
})