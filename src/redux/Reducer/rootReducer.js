import { combineReducers } from "redux";
import { fetchMoviesReducer } from "./reducer";

const rootReducer = combineReducers({
  fetchMoviesReducer: fetchMoviesReducer,
});

export default rootReducer;
