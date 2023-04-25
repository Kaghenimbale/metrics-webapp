import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './Slice/scoreSlice';

const store = configureStore({
  reducer: {
    scores: scoreReducer,
  },
});

export default store;
