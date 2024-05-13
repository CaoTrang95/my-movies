import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListGenres } from "../../service/moviesApi";

const initialState = {
  listGenres: [],
};
export const getListGenresAsync = createAsyncThunk(
  "genres/getListGenresAsync",
  async (params, { rejectWithValue }) => {
    try {
      const response = getListGenres();
      return response;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListGenresAsync.fulfilled, (state, action) => {
      state.listGenres = action.payload.genres;
    });
  },
});
export const genresReducer = genresSlice.reducer;
