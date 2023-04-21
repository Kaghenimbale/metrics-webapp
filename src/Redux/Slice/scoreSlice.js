import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://www.scorebat.com/video-api/v3/feed/?token=NzcxMDVfMTY4MjA2NDkwMF9hNDA4ZTZkMTFlYzQyZmRiM2YxNzY3ZjYzMjBhYmQ1ZGEyMmUxNzY2';

const initialState = {
  scoreItems: [],
  isLoading: false,
  error: null,
  isFetched: false,
};

const fetchScores = createAsyncThunk('score/fetchScores', async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error.name;
  }
});

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchScores.pending, (state) => ({
        ...state,
        isLoading: true,
        isFetched: false,
      }))
      .addCase(fetchScores.fulfilled, (state, action) => ({
        ...state,
        scoreItems: [...action.payload],
        isLoading: false,
      }))
      .addCase(fetchScores.rejected, (state) => ({
        ...state,
        scoreItems: [],
        isLoading: false,
      }));
  },
});

export default scoreSlice.reducer;
