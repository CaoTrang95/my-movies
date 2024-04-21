import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getListMoviesTrending,
  getListMoviesTrailers,
  getListMoviesPopular,
} from "../service/moviesApi";

const initialState = {
  progressBar: 0,
  //Trending
  listMoviesTrending: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
  tabTrending: "day",
  cardVisibility: true,

  // Trailers
  listMoviesTrailers: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
  tabTrailers: "on-tv",
  cardTrailersVisibility: true,
  imageBackground: "",

  // Popular
  listMoviesPopular: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
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

export const getListMoviesTrailersAsync = createAsyncThunk(
  "homepage/getListMoviesTrailersAsync",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      // await new Promise((r) => setTimeout(r, 3000));
      const response = await getListMoviesTrailers(params);
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
    setTabTrailers(state, action) {
      state.tabTrailers = action.payload;
    },
    setImageBackground(state, action) {
      state.imageBackground = action.payload;
    },
    setListTrendingAfterTimeout(state, results) {
      state.listMoviesTrending = results.payload;
      state.cardVisibility = true;
    },
    setListPopularAfterTimeout(state, results) {
      state.listMoviesPopular = results.payload;
      state.cardPopularVisibility = true;
    },
    setListTrailersAfterTimeout(state, results) {
      state.listMoviesTrailers = results.payload;
      state.cardTrailersVisibility = true;
      state.imageBackground =
        "https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces" +
        state.listMoviesTrailers[0].backdrop_path;
    },
  },
  extraReducers: (builder) => {
    builder
      // Trending
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
      // Popular
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
      })
      // Trailers
      .addCase(getListMoviesTrailersAsync.pending, (state, action) => {
        state.progressBar = 50;
      })
      .addCase(getListMoviesTrailersAsync.fulfilled, (state, action) => {
        state.progressBar = 100;
        state.cardTrailersVisibility = false;
        setTimeout(() => {
          action.payload.dispatch(
            setListTrailersAfterTimeout(action.payload.response.results)
          );
        }, 500);
      })
      .addCase(getListMoviesTrailersAsync.rejected, (state, action) => {
        state.progressBar = 100;
      });
  },
});
export const {
  setTabTrending,
  setTabPopular,
  setTabTrailers,
  setImageBackground,
  setListTrendingAfterTimeout,
  setListPopularAfterTimeout,
  setListTrailersAfterTimeout,
} = homepageSlice.actions;
export const hompageReducer = homepageSlice.reducer;
