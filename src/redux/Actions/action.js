import fetch from "node-fetch";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

export const fetchMovies = (pageNo) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=primary_release_date.asc`;
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    fetch(url, options)
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: res,
        });
      })
      .catch((error) =>
        dispatch({ type: "GET_MOVIES_ERROR", error: error.message })
      );
  };
};

export const searchMovies = (searchInput, currentPage) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=${currentPage}`;
  return (dispatch) => {
    dispatch({ type: "SEARCH_MOVIES_REQUEST" });
    fetch(url, options)
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res,
        });
      })
      .catch((error) =>
        dispatch({ type: "SEARCH_MOVIES_ERROR", error: error.message })
      );
  };
};

export const getMoviesDetails = (movieId) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/3/movie/${movieId}?language=en-US`;
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_DETAILS_REQUEST" });
    fetch(url, options)
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: "GET_MOVIES_DETAILS_REQUEST_SUCCESS",
          payload: res,
        });
      })
      .catch((error) =>
        dispatch({
          type: "GET_MOVIES_DETAILS_REQUEST_ERROR",
          error: error.message,
        })
      );
  };
};
