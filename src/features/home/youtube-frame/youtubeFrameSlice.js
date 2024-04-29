import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieDetail } from "../../../service/moviesApi";

const initialState = {
  videoTrailerUrl: null,
  homepageState: {},
  progressBar: 0,
};

export const getMovieTrailerUrlAsync = createAsyncThunk(
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
    setProgressBar(state, action) {
      state.progressBar = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMovieTrailerUrlAsync.pending, (state, action) => {
        state.progressBar = 10;
      })
      .addCase(getMovieTrailerUrlAsync.fulfilled, (state, action) => {
        const videos = action.payload.response.videos;
        const url = videos.results.find(
          (v) => v.name === "Official Trailer"
        )?.key;
        state.videoTrailerUrl = `//www.youtube.com/embed/${url}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`;
        state.progressBar = 100;
      })
      .addCase(getMovieTrailerUrlAsync.rejected, (state, action) => {
        state.progressBar = 100;
      });
  },
});
export const { releaseYoutubeFrame, setProgressBar } =
  youtubeFrameSlice.actions;
export const youtubeFrameReducer = youtubeFrameSlice.reducer;
