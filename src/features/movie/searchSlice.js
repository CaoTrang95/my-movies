import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesSearch } from "../../service/moviesApi";

const initialState = {
  paramsSearch: {
    sortValue: "popularity.desc",
    withGenres: [],
    fromDate: "",
    toDate: "2024-11-12",
  },
  clickedLoadMore: false,
  page: 1,
  listMovies: [],
  enableSearch: false,
};
export const getListMoviesSearchAsync = createAsyncThunk(
  "search/getListMoviesSearchAsync",
  async (params, { rejectWithValue, getState }) => {
    try {
      const pagePagination = params.page;
      const genresParam = getState().search.paramsSearch.withGenres.join("OR");
      const sortByParam = getState().search.paramsSearch.sortValue;
      const fromDateParam = getState().search.paramsSearch.fromDate;
      const toDateParam = getState().search.paramsSearch.toDate;
      params = {
        ...params,
        sort_by: sortByParam,
        with_genres: genresParam,
        "primary_release_date.gte": fromDateParam,
        "primary_release_date.lte": toDateParam,
      };
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
      state.paramsSearch.sortValue = action.payload;
      state.enableSearch = true;
    },
    setClickedLoadMore(state, action) {
      state.clickedLoadMore = action.payload;
    },
    setWithGenres(state, action) {
      state.enableSearch = true;
      if (state.paramsSearch.withGenres?.includes(action.payload.id)) {
        //uncheck
        state.paramsSearch.withGenres = state.paramsSearch.withGenres?.filter(
          (item) => item !== action.payload.id
        );
      } else {
        state.paramsSearch.withGenres = [
          ...state.paramsSearch.withGenres,
          action.payload.id,
        ];
      }
    },
    setFromDate(state, action) {
      state.paramsSearch.fromDate = action.payload;
      state.enableSearch = true;
    },
    setToDate(state, action) {
      state.paramsSearch.toDate = action.payload;
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
      }
      state.page = action.payload.pagePagination;
    });
  },
});

export const {
  setSortValue,
  setClickedLoadMore,
  setWithGenres,
  setFromDate,
  setToDate,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
