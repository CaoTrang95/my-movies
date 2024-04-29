import { combineReducers } from "redux";
import { latestTrailerReducer } from "../features/home/latest-trailers/latestTrailersSlice";
import { youtubeFrameReducer } from "../features/home/youtube-frame/youtubeFrameSlice";
import { trendingReducer } from "../features/home/trending/trendingSlice";
import { popularReducer } from "../features/home/popular/popularSlice";

const rootReducer = combineReducers({
  trending: trendingReducer,
  popular: popularReducer,
  latestTrailers: latestTrailerReducer,
  youtubeFrame: youtubeFrameReducer,
});

export default rootReducer;
