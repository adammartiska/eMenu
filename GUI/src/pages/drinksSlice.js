import { createSlice } from "@reduxjs/toolkit";

export const drinksSlice = createSlice({
  name: "drinks",
  initialState: {
    drinks: {},
  },
  reducers: {
    addToCart: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.drinks = {
        ...state.drinks,
        [payload.id]: payload.value,
      };
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
export const { addToCart, decrement, incrementByAmount } = drinksSlice.actions;

export default drinksSlice.reducer;
