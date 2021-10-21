import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "./pages/drinksSlice";

export default configureStore({
  reducer: {
    cart: drinksReducer,
  },
});
