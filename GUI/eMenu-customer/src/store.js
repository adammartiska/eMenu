import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "./pages/drinksSlice";
import mealsReducer from "./pages/mealsSlice";
import userReducer from "./pages/userSlice";
import orderReducer from "./pages/orderSlice";

export default configureStore({
  reducer: {
    meals: mealsReducer,
    drinks: drinksReducer,
    user: userReducer,
    order: orderReducer,
  },
});
