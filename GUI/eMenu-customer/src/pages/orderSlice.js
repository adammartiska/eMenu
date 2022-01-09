import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "order",
  initialState: {
    meals: [],
    drinks: [],
  },
  reducers: {
    addDrinkToCart: (state, { payload }) => {
      state.drinks = [...state.drinks, payload];
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    addMealToCart: (state, { payload }) => {
      state.meals = [...state.meals, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDrinkToCart, addMealToCart } = userSlice.actions;

export default userSlice.reducer;
