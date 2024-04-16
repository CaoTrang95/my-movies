import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMovie } from "../service/moviesApi";

const initialState = {
  listMoviesTrending: [],
  tabTrending: "today",
  isLoadingTrending: false,
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
      const response = await getListMovie();
      return response;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesAsync.pending, (state, action) => {
        state.isLoadingTrending = true;
      })
      .addCase(getListMoviesAsync.fulfilled, (state, action) => {
        state.listMoviesTrending = action.payload.results;
        console.log(state.listMoviesTrending);
        state.isLoadingTrending = false;
      })
      .addCase(getListMoviesAsync.rejected, (state, action) => {
        state.isLoadingTrending = false;
      });
  },
});
export const hompageReducer = homepageSlice.reducer;
