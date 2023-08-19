const initialState = {
  movies: {},
  isFetching: false,
};
export const fetchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
      return {
        isFetching: true,
        movies: {},
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
      };
    case "GET_MOVIES_ERROR":
      console.log("eror", action);
      return null;
    default:
      return state;
  }
};
