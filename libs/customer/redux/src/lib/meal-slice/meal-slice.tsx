import { createSlice } from '@reduxjs/toolkit';

interface Meal {
  id: number;
  count: number;
}

interface State {
  meals: Meal[];
  previousValue?: string;
}

const slice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
  } as State,
  reducers: {
    cacheMeals: (state, { payload }) => {
      state.meals = payload;
    },
    incrementCount: (state, { payload }) => {
      state.meals[
        state.meals.findIndex((meal) => meal.id === payload)
      ].count += 1;
    },

    decrementCount: (state, { payload }) => {
      state.meals[
        state.meals.findIndex((meal) => meal.id === payload)
      ].count -= 1;
    },
  },
});

export const MealsReducer = slice.reducer;
export const {
  cacheMeals,
  incrementCount: incrementMeals,
  decrementCount: decrementMeals,
} = slice.actions;
