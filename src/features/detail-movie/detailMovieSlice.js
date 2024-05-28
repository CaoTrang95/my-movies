import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailMovie } from "../../service/moviesApi";
const initialState = { movie: {}, isLoading: true };
export const getDetailMovieAsync = createAsyncThunk(
  "detailMovie/getDetailMovieAsync",
  async (params, { rejectWithValue }) => {
    try {
      // params["append_to_response"] = "movies,images,backdrops";
      const response = await getDetailMovie(params);
      return response;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const detailMovieSlice = createSlice({
  name: "detailMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailMovieAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailMovieAsync.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.isLoading = false;
    });
  },
});
export const movieDetailReducer = detailMovieSlice.reducer;
