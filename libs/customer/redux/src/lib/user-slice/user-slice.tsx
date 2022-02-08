import { createSlice } from '@reduxjs/toolkit';

interface State {
  token: string | null;
}

const slice = createSlice({
  name: 'user',
  initialState: {
    token: null,
  } as State,
  reducers: {
    saveToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const UserReducer = slice.reducer;
export const { saveToken } = slice.actions;
