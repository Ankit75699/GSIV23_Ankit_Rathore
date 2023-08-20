import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Box, CircularProgress } from "@mui/material";
import Header from "../Header/Header";
import { getMoviesDetails } from "../../redux/Actions/action";
import { ContainerBox } from "./MovieDetailsStyles";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movieDetail, isFetchingMovieDetail, error } = useSelector(
    (state) => state.movieDetailsReducer
  );
  const params = useParams();

  useEffect(() => {
    dispatch(getMoviesDetails(params.id));
  }, [dispatch, params]);

  const {
    original_title,
    release_date,
    runtime,
    production_companies,
    overview,
    poster_path,
    vote_average,
  } = movieDetail || {};

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <Header />
      <ContainerBox container spacing={4}>
        {isFetchingMovieDetail ? (
          <Box
            data-testid="details-loading-spinner"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="85vh"
            width="100%"
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            data-testid="movie-details"
          >
            <Box className="MovieDetails">
              <Box className="MovieDescriptionLeft">
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/${poster_path}`}
                  alt="sdifu"
                />
              </Box>
              <Box className="MovieDescriptionRight">
                <Box className="titleBox">
                  <p>{original_title}</p>
                  <span
                    style={{ color: "#9B9B9B" }}
                  >{`(${vote_average})`}</span>
                </Box>
                <Box className="rightContentTextColor">
                  {release_date} | {`${runtime} mins`} |{" "}
                  {production_companies?.[0]?.name}
                </Box>
                <Box className="Cast rightContentTextColor">
                  Cast: Actor 1, Actor2
                </Box>
                <Box className="rightContentTextColor">{overview}</Box>
              </Box>
            </Box>
          </Grid>
        )}
      </ContainerBox>
    </>
  );
};

export default MovieDetails;
