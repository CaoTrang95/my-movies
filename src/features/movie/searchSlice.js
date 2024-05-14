import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesSearch } from "../../service/moviesApi";

const initialState = {
  sortValue: "rating-asc",
  page: 0,
  listMovies: [],
  enableSearch: false,
};
export const getListMoviesSearchAsync = createAsyncThunk(
  "popular/getListMoviesSearchAsync",
  async (params, { rejectWithValue, dispatch, getState }) => {
    try {
      params = { ...params, sortValue: getState().search.sortValue };
      console.log(params);
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
      if (state.page === 0) {
        state.listMovies = action.payload.response.results;
      } else {
        state.listMovies = [
          ...state.listMovies,
          ...action.payload.response.results,
        ];
      }
      console.log(state.listMovies);
      state.page = state.page + 1;
    });
  },
});

export const { setSortValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
