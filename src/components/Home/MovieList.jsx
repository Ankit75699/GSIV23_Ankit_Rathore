import React from "react";
import MovieCard from "../Movies/MovieCard";
import { Grid } from "@mui/material";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <h1>Movies not found</h1>;
  }

  return movies.map((movie) => (
    <Grid
      className="cards"
      item
      xs={12}
      sm={6}
      md={3}
      lg={2}
      key={movie.id}
      data-testid="movie-card"
    >
      <MovieCard movie={movie} />
    </Grid>
  ));
};

export default MovieList;
