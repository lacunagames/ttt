import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBeers = createAsyncThunk('beer/fetchBeers', async () => {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  const allBeers = await response.json();
  return allBeers;
});

export const slice = createSlice({
  name: 'beer',
  initialState: {
    allBeers: [],
    status: '',
    error: '',
  },
  extraReducers: {
    [fetchBeers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchBeers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.allBeers = action.payload;
    },
    [fetchBeers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default slice.reducer;
