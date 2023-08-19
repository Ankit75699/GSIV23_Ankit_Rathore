import fetch from "node-fetch";
export const fetchMovies = (pageNo) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTI5ZjFmZTZiZjUyYjA0MWQ4YWE2MTg3Yjg5MjJhOCIsInN1YiI6IjY0ZGYxZGFiZDEwMGI2MTRiNWY3ZjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZcGu_GOkudSLObs1F34w6OOlSVQeW0niAUe3MW3c7Q",
    },
  };

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
