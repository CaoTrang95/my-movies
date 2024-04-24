import { combineReducers } from "redux";
import { hompageReducer } from "./homePageSlice";
import { youtubeFrameReducer } from "../features/home/session/youtubeFrameSlice";

const rootReducer = combineReducers({
  homepage: hompageReducer,
  youtubeFrame: youtubeFrameReducer,
});

export default rootReducer;
