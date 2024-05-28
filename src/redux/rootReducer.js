import { combineReducers } from "redux";
import { latestTrailerReducer } from "../features/home/latest-trailers/latestTrailersSlice";
import { youtubeFrameReducer } from "../features/home/youtube-frame/youtubeFrameSlice";
import { trendingReducer } from "../features/home/trending/trendingSlice";
import { popularReducer } from "../features/home/popular/popularSlice";
import { progressBarReducer } from "../ui/progress-bar/progressBarSlice";
import { genresReducer } from "../features/movie/genresSlice";
import { searchReducer } from "../features/movie/searchSlice";
import { movieDetailReducer } from "../features/detail-movie/detailMovieSlice";

const rootReducer = combineReducers({
  trending: trendingReducer,
  popular: popularReducer,
  latestTrailers: latestTrailerReducer,
  youtubeFrame: youtubeFrameReducer,
  progressBar: progressBarReducer,
  genres: genresReducer,
  search: searchReducer,
  detailMovie: movieDetailReducer,
});

export default rootReducer;
