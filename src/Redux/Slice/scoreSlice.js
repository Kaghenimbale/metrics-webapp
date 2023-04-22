import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://www.scorebat.com/video-api/v3/feed/?token=NzcxMDVfMTY4MjA2NDkwMF9hNDA4ZTZkMTFlYzQyZmRiM2YxNzY3ZjYzMjBhYmQ1ZGEyMmUxNzY2';

const initialState = {
  scoreItems: [],
  isLoading: false,
  error: null,
  isFetched: false,
  itemFilter: [],
};

export const fetchScores = createAsyncThunk('score/fetchScores', async () => {
  try {
    const response = await axios.get(url);

    return response.data.response;
  } catch (error) {
    return error.message;
  }
});

const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    filterScores: (state, action) => {
      const competition = state.scoreItems.filter((item) => item.competition === action.payload);
      return {
        ...state,
        itemFilter: [...competition],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchScores.pending, (state) => ({
        ...state,
        isLoading: true,
        isFetched: false,
      }))
      .addCase(fetchScores.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        isFetched: true,
        scoreItems: [...action.payload],
      }))
      .addCase(fetchScores.rejected, (state) => ({
        ...state,
        scoreItems: [],
        isLoading: false,
      }));
  },
});

export const { filterScores } = scoreSlice.actions;

export default scoreSlice.reducer;
