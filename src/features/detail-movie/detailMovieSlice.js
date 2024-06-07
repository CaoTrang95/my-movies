import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailMovie } from "../../service/moviesApi";
const initialState = {
  movie: {},
  casts: [],
  crews: [],
  keywords: [],
  reviews: [],
  backdrops: [],
  posters: [],
  videos: [],
  recommendations: [],
  isLoading: true,
};
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
      state.isLoading = false;
      state.movie = {
        vote_average: action.payload.vote_average,
        backdrop_path: action.payload.backdrop_path,
        poster_path: action.payload.poster_path,
        title: action.payload.title,
        release_date: action.payload.release_date,
        genres: action.payload.genres,
        runtime: action.payload.runtime,
        tagline: action.payload.tagline,
        overview: action.payload.overview,
        status: action.payload.status,
        originalLanguage: action.payload?.spoken_languages[0]?.name,
        budget: action.payload.budget,
        revenue: action.payload.revenue,
      };
      state.casts = action.payload.credits.cast;
      state.crews = action.payload.credits.crew.filter(
        (item) =>
          item.job === "Director" ||
          item.job === "Writer" ||
          item.job === "Screenplay"
      );
      state.keywords = action.payload.keywords.keywords;
      state.reviews = action.payload.reviews.results;
      state.backdrops = action.payload.images.backdrops;
      state.posters = action.payload.images.posters;
      state.videos = action.payload.videos.results;
      state.recommendations = action.payload.recommendations.results;
      console.log(action.payload);
    });
  },
});
export const movieDetailReducer = detailMovieSlice.reducer;
