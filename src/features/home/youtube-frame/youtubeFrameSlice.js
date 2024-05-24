import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieDetail } from "../../../service/moviesApi";

const initialState = {
  videoTrailerUrl: null,
};

export const getMovieDetailAsync = createAsyncThunk(
  "youtubeFrame/getMovieDetailAsync",
  async (params, { rejectWithValue }) => {
    try {
      const response = await getMovieDetail(params);
      return { response };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const youtubeFrameSlice = createSlice({
  name: "youtubeFrame",
  initialState,
  reducers: {
    releaseYoutubeFrame(state, action) {
      state.videoTrailerUrl = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMovieDetailAsync.fulfilled, (state, action) => {
      const videos = action.payload.response.videos;
      const url = videos.results.find(
        (v) => v.name === "Official Trailer"
      )?.key;
      state.videoTrailerUrl = `//www.youtube.com/embed/${url}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`;
    });
  },
});
export const { releaseYoutubeFrame } = youtubeFrameSlice.actions;
export const youtubeFrameReducer = youtubeFrameSlice.reducer;
