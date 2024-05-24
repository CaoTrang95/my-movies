import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progressBar: 0,
};
const acceptedThunkActionList = [
  "trending/getListMoviesTrendingAsync",
  "popular/getListMoviesPopularAsync",
  "latestTrailers/getListMoviesTrailersAsync",
  "youtubeFrame/getMovieDetailAsync",
  "search/getListMoviesSearchAsync",
];

function isThunkAction(action, type) {
  const thunkActionType = action.type.substring(
    0,
    action.type.lastIndexOf(type)
  );
  return acceptedThunkActionList.includes(thunkActionType);
}

const progressBarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    setProgressBar(state, action) {
      state.progressBar = action.payload;
    },
  },
  extraReducers: (builder) => {
    const pendingCallback = (state, action) => {
      state.progressBar = 70;
    };

    const fullfiledCallback = (state, action) => {
      state.progressBar = 100;
    };

    const rejectedCallback = (state, action) => {
      state.progressBar = 100;
    };

    builder
      .addMatcher(
        (action) => isThunkAction(action, "/pending"),
        pendingCallback
      )
      .addMatcher(
        (action) => isThunkAction(action, "/fulfilled"),
        fullfiledCallback
      )
      .addMatcher(
        (action) => isThunkAction(action, "/rejected"),
        rejectedCallback
      );
  },
});
export const { setProgressBar } = progressBarSlice.actions;
export const progressBarReducer = progressBarSlice.reducer;
