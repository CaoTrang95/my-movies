import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesSearch } from "../../service/moviesApi";

const initialState = {
  sortValue: "rating-asc",
  listMovies: [],
  enableSearch: false,
};
export const getListMoviesSearchAsync = createAsyncThunk(
  "popular/getListMoviesSearchAsync",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await getListMoviesSearch(params);
      return { response, dispatch };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSortValue(state, action) {
      state.sortValue = action.payload;
      state.enableSearch = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListMoviesSearchAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.listMovies = action.payload.response.results;
      console.log(state.listMovies);
    });
  },
});

export const { setSortValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
