import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMovie } from "../service/moviesApi";

const initialState = {
  listMoviesTrending: [],
  tabTrending: "day",
  isLoadingTrending: true,
  // listMoviesTrailers: [],
  // listMoviesPopular: [],
  // isLoadingTrailers: false,
  // isLoadingPopular: false,
  // tabTrailers: "popular",
  // tabPopular: "in_theaters",
};
export const getListMoviesAsync = createAsyncThunk(
  "homepage/getListMoviesAsync",
  async (params, { rejectWithValue }) => {
    try {
      const response = await getListMovie(params);
      return response;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setTabTrending(state, action) {
      state.tabTrending = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesAsync.pending, (state, action) => {
        state.isLoadingTrending = true;
      })
      .addCase(getListMoviesAsync.fulfilled, (state, action) => {
        state.isLoadingTrending = false;
        state.listMoviesTrending = action.payload.results;
      })
      .addCase(getListMoviesAsync.rejected, (state, action) => {
        state.isLoadingTrending = false;
      });
  },
});
export const { setTabTrending } = homepageSlice.actions;
export const hompageReducer = homepageSlice.reducer;
