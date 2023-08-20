const initialState = {
  movies: {},
  isFetching: true,
  movieDetail: {},
  isFetchingMovieDetail: false,
};
export const fetchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
    case "SEARCH_MOVIES_REQUEST":
      return {
        isFetching: true,
        movies: {},
      };
    case "GET_MOVIES_SUCCESS":
    case "SEARCH_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
      };
    case "GET_MOVIES_ERROR":
    case "SEARCH_MOVIES_ERROR":
      console.log("eror", action);
      return null;
    default:
      return state;
  }
};

export const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES_DETAILS_REQUEST":
      return {
        isFetchingMovieDetail: true,
        movieDetail: {},
      };
    case "GET_MOVIES_DETAILS_REQUEST_SUCCESS":
      return {
        movieDetail: action.payload,
        isFetchingMovieDetail: false,
      };
    case "GET_MOVIES_DETAILS_REQUEST_ERROR":
      console.log("eror", action);
      return null;
    default:
      return state;
  }
};
