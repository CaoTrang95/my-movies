import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMoviesPopular } from "../../../service/moviesApi";

const initialState = {
  progressBar: 0,
  tabPopular: "in-theaters",
  cardPopularVisibility: true,
  isErrorPopular: false,
  listMoviesPopular: Array.from({ length: 8 }, (_, i) => i + 1).map((num) => ({
    id: num,
  })),
};
export const getListMoviesPopularAsync = createAsyncThunk(
  "popular/getListMoviesPopularAsync",
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
const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setTabPopular(state, action) {
      state.tabPopular = action.payload;
    },
    setListPopularAfterTimeout(state, results) {
      state.listMoviesPopular = results.payload;
      state.cardPopularVisibility = true;
    },
    setProgressBar(state, action) {
      state.progressBar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListMoviesPopularAsync.pending, (state, action) => {
        state.progressBar = 70;
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

export const { setListPopularAfterTimeout, setTabPopular, setProgressBar } =
  popularSlice.actions;
export const popularReducer = popularSlice.reducer;
