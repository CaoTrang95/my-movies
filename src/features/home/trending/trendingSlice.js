import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesTrending } from "../../../service/moviesApi";

const initialState = {
  progressBar: 0,
  tabTrending: "day",
  cardVisibility: true,
  listMoviesTrending: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
};
export const getListMoviesTrendingAsync = createAsyncThunk(
  "trending/getListMoviesTrendingAsync",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // await new Promise((r) => setTimeout(r, 3000));
      const response = await getListMoviesTrending(params);
      return { response, dispatch };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTabTrending(state, action) {
      state.tabTrending = action.payload;
    },
    setListTrendingAfterTimeout(state, results) {
      state.listMoviesTrending = results.payload;
      state.cardVisibility = true;
    },
    setProgressBar(state, action) {
      state.progressBar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesTrendingAsync.pending, (state, action) => {
        state.progressBar = 70;
      })
      .addCase(getListMoviesTrendingAsync.fulfilled, (state, action) => {
        state.progressBar = 100;
        state.cardVisibility = false;
        setTimeout(() => {
          action.payload.dispatch(
            setListTrendingAfterTimeout(action.payload.response.results)
          );
        }, 500);
      })
      .addCase(getListMoviesTrendingAsync.rejected, (state, action) => {
        state.progressBar = 100;
      });
  },
});
export const { setTabTrending, setListTrendingAfterTimeout, setProgressBar } =
  trendingSlice.actions;
export const trendingReducer = trendingSlice.reducer;
