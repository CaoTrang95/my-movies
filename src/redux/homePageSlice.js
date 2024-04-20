import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getListMoviesTrending,
  getListMoviesPopular,
} from "../service/moviesApi";

const initialState = {
  progressBar: 0,
  listMoviesTrending: Array(8).fill(0),
  tabTrending: "day",
  cardVisibility: true,
  // listMoviesTrailers: [],
  // tabTrailers: "popular",

  listMoviesPopular: Array(8).fill(0),
  tabPopular: "in-theaters",
  cardPopularVisibility: true,
  isErrorPopular: false,
};
export const getListMoviesTrendingAsync = createAsyncThunk(
  "homepage/getListMoviesTrendingAsync",
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
export const getListMoviesPopularAsync = createAsyncThunk(
  "homepage/getListMoviesPopularAsync",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // await new Promise((r) => setTimeout(r, 3000));
      const response = await getListMoviesPopular(params);
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
    setTabPopular(state, action) {
      state.tabPopular = action.payload;
    },
    setListTrendingAfterTimeout(state, results) {
      state.listMoviesTrending = results.payload;
      state.cardVisibility = true;
    },
    setListPopularAfterTimeout(state, results) {
      console.log(results.payload);
      state.listMoviesPopular = results.payload;
      state.cardPopularVisibility = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesTrendingAsync.pending, (state, action) => {
        state.progressBar = 50;
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
      })
      .addCase(getListMoviesPopularAsync.pending, (state, action) => {
        state.progressBar = 50;
        state.isErrorPopular = false;
      })
      .addCase(getListMoviesPopularAsync.fulfilled, (state, action) => {
        state.progressBar = 100;
        state.cardPopularVisibility = false;
        setTimeout(() => {
          action.payload.dispatch(
            setListPopularAfterTimeout(action.payload.response.results)
          );
        }, 500);
      })
      .addCase(getListMoviesPopularAsync.rejected, (state, action) => {
        state.progressBar = 100;
        state.isErrorPopular = true;
      });
  },
});
export const {
  setTabTrending,
  setTabPopular,
  setListTrendingAfterTimeout,
  setListPopularAfterTimeout,
} = homepageSlice.actions;
export const hompageReducer = homepageSlice.reducer;
