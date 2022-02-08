import { configureStore } from '@reduxjs/toolkit';
import { DrinksReducer } from '@emenu/customer/redux';
import { MealsReducer } from '@emenu/customer/redux';
import { UserReducer } from '@emenu/customer/redux';
import { OrderReducer } from '@emenu/customer/redux';

export default configureStore({
  reducer: {
    meals: MealsReducer,
    drinks: DrinksReducer,
    user: UserReducer,
    order: OrderReducer,
  },
});
