import { createSlice } from "@reduxjs/toolkit";

export const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    drinks: [],
  },
  reducers: {
    cacheDrinks: (state, { payload }) => {
      state.drinks = payload;
    },
    addToCart: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.drinkOrder = [...state.drinkOrder, payload];
    },
    incrementCount: (state, { payload }) => {
      state.drinks[
        state.drinks.findIndex((drink) => drink.id === payload)
      ].count += 1;
    },

    decrementCount: (state, { payload }) => {
      state.drinks[
        state.drinks.findIndex((drink) => drink.id === payload)
      ].count -= 1;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  decrement,
  incrementCount,
  decrementCount,
  cacheDrinks,
} = drinksSlice.actions;

export default drinksSlice.reducer;
