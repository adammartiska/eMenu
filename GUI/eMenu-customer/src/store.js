import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "./pages/drinksSlice";
import mealsReducer from "./pages/mealsSlice";

export default configureStore({
  reducer: {
    meals: mealsReducer,
    drinks: drinksReducer,
  },
});
