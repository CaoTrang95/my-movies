import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesTrailers } from "../../../service/moviesApi";

const initialState = {
  tabTrailers: "on-tv",
  cardTrailersVisibility: true,
  imageBackground: "",
  listMoviesTrailers: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
};

export const getListMoviesTrailersAsync = createAsyncThunk(
  "latestTrailers/getListMoviesTrailersAsync",
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
const latestTrailerSlice = createSlice({
  name: "latestTrailers",
  initialState,
  reducers: {
    setTabTrailers(state, action) {
      state.tabTrailers = action.payload;
    },
    setImageBackground(state, action) {
      state.imageBackground = action.payload;
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
    builder.addCase(getListMoviesTrailersAsync.fulfilled, (state, action) => {
      state.cardTrailersVisibility = false;
      setTimeout(() => {
        action.payload.dispatch(
          setListTrailersAfterTimeout(action.payload.response.results)
        );
      }, 500);
    });
  },
});
export const {
  setTabTrailers,
  setImageBackground,
  setListTrailersAfterTimeout,
} = latestTrailerSlice.actions;
export const latestTrailerReducer = latestTrailerSlice.reducer;
