import { configureStore } from '@reduxjs/toolkit';
import { OrderReducer } from '../..';
import { DrinksReducer } from '../..';
import { MealsReducer } from '../..';
import { UserReducer } from '../..';
// ...
const store = configureStore({
  reducer: {
    drinks: DrinksReducer,
    meals: MealsReducer,
    order: OrderReducer,
    user: UserReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
