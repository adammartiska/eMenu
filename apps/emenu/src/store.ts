import { configureStore } from '@reduxjs/toolkit';
import drinksReducer from '@temp-workspace/customer/redux';
import mealsReducer from '@temp-workspace/customer/redux';
import userReducer from '@temp-workspace/customer/redux';
import orderReducer from '@temp-workspace/customer/redux';

export default configureStore({
  reducer: {
    meals: mealsReducer,
    drinks: drinksReducer,
    user: userReducer,
    order: orderReducer,
  },
});
