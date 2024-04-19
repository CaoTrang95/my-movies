import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMovie } from "../service/moviesApi";

const initialState = {
  listMoviesTrending: Array(8).fill(0),
  tabTrending: "day",
  progressBar: 0,
  cardVisibility: true,
  // listMoviesTrailers: [],
  // listMoviesPopular: [],
  // isLoadingTrailers: false,
  // isLoadingPopular: false,
  // tabTrailers: "popular",
  // tabPopular: "in_theaters",
};
export const getListMoviesAsync = createAsyncThunk(
  "homepage/getListMoviesAsync",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // await new Promise((r) => setTimeout(r, 3000));
      const response = await getListMovie(params);
      return { response, dispatch };
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
    setDataAfterTimeout(state, results) {
      state.listMoviesTrending = results.payload;
      state.cardVisibility = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesAsync.pending, (state, action) => {
        state.progressBar = 50;
      })
      .addCase(getListMoviesAsync.fulfilled, (state, action) => {
        state.progressBar = 100;
        state.cardVisibility = false;
        setTimeout(() => {
          action.payload.dispatch(
            setDataAfterTimeout(action.payload.response.results)
          );
        }, 500);
      })
      .addCase(getListMoviesAsync.rejected, (state, action) => {
        state.progressBar = 100;
      });
  },
});
export const { setTabTrending, setDataAfterTimeout } = homepageSlice.actions;
export const hompageReducer = homepageSlice.reducer;
