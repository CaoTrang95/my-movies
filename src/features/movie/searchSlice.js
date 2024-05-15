import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesSearch } from "../../service/moviesApi";

const initialState = {
  sortValue: "popularity.asc",
  page: 1,
  listMovies: [],
  enableSearch: false,
};
export const getListMoviesSearchAsync = createAsyncThunk(
  "popular/getListMoviesSearchAsync",
  async (params, { rejectWithValue, getState }) => {
    try {
      const pagePagination = params.page;
      params = { ...params, sort_by: getState().search.sortValue };
      const response = await getListMoviesSearch(params);
      return { pagePagination, response };
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
      if (action.payload.pagePagination === 1) {
        state.listMovies = action.payload.response.results;
      } else {
        state.listMovies = [
          ...state.listMovies,
          ...action.payload.response.results,
        ];
        state.page = action.payload.pagePagination;
      }
    });
  },
});

export const { setSortValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
