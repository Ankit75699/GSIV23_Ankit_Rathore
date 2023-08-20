import { combineReducers } from "redux";
import { fetchMoviesReducer, movieDetailsReducer } from "./reducer";

const rootReducer = combineReducers({
  fetchMoviesReducer: fetchMoviesReducer,
  movieDetailsReducer: movieDetailsReducer,
});

export default rootReducer;
