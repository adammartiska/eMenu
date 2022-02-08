import { createSlice } from '@reduxjs/toolkit';

interface Drink {
  id: number;
  count: number;
}

interface State {
  drinks: Drink[];
  previousValue?: string;
}

const slice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
  } as State,
  reducers: {
    cacheDrinks: (state, { payload }) => {
      state.drinks = payload;
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
  },
});

export const DrinksReducer = slice.reducer;
export const {
  cacheDrinks,
  incrementCount: incrementDrinks,
  decrementCount: decrementDrinks,
} = slice.actions;
