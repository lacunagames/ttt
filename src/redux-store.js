import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './components/beerSlice';

export default configureStore({
  reducer: {
    beer: beerReducer,
  },
});
