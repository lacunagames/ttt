import { createSlice } from '@reduxjs/toolkit';

import allBeers from '../beers.json';

export const slice = createSlice({
  name: 'beer',
  initialState: {
    allBeers: allBeers,
  },
  reducers: {
    setCustomerQuery: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setCustomerQuery } = slice.actions;

export default slice.reducer;
