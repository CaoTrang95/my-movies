import { combineReducers } from "redux";
import { hompageReducer } from "./homePageSlice";

const rootReducer = combineReducers({ homepage: hompageReducer });
export default rootReducer;
