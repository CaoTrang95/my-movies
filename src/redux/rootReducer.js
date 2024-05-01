import { combineReducers } from "redux";
import { latestTrailerReducer } from "../features/home/latest-trailers/latestTrailersSlice";
import { youtubeFrameReducer } from "../features/home/youtube-frame/youtubeFrameSlice";
import { trendingReducer } from "../features/home/trending/trendingSlice";
import { popularReducer } from "../features/home/popular/popularSlice";
import { progressBarReducer } from "../ui/progress-bar/progressBarSlice";

const rootReducer = combineReducers({
  trending: trendingReducer,
  popular: popularReducer,
  latestTrailers: latestTrailerReducer,
  youtubeFrame: youtubeFrameReducer,
  progressBar: progressBarReducer,
});

export default rootReducer;
