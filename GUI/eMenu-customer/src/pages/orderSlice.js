import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "order",
  initialState: {
    inCart: {
      meals: [],
      drinks: [],
    },
    ordered: {
      meals: [],
      drinks: [],
    },
  },
  reducers: {
    addDrinkToCart: (state, { payload }) => {
      state.inCart.drinks = [...state.inCart.drinks, payload];
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    addMealToCart: (state, { payload }) => {
      state.inCart.meals = [...state.inCart.meals, payload];
    },
    incrementCount: (state, { payload: { id, isMeal } }) => {
      if (isMeal) {
        state.inCart.meals[
          state.inCart.meals.findIndex((meal) => meal.id === id)
        ].count += 1;
      } else {
        state.inCart.drinks[
          state.inCart.drinks.findIndex((drink) => drink.id === id)
        ].count += 1;
      }
    },

    decrementCount: (state, { payload: { id, isMeal } }) => {
      if (isMeal) {
        state.inCart.meals[
          state.inCart.meals.findIndex((meal) => meal.id === id)
        ].count -= 1;
      } else {
        state.inCart.drinks[
          state.inCart.drinks.findIndex((drink) => drink.id === id)
        ].count -= 1;
      }
    },
    emptyCart: (state) => {
      //TODO is this good or should I assign it from backend?
      state.ordered.meals = state.inCart.meals;
      state.ordered.drinks = state.inCart.drinks;
      state.inCart.meals = [];
      state.inCart.drinks = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addDrinkToCart,
  addMealToCart,
  emptyCart,
  incrementCount,
  decrementCount,
} = userSlice.actions;

export default userSlice.reducer;
