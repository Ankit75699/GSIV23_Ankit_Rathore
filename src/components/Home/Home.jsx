import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/Actions/action";
import MovieCard from "../Movies/MovieCard";
import Header from "../Header/Header";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

// Styled components
const ContainerBox = styled(Grid)(({ theme }) => ({
  padding: "0px 30px",
  marginTop: "0px",
  "& .cards": {
    marginBottom: "0px",
    "& .MuiPaper-root": {
      boxShadow: "2px 2px 10px #c1c1c1",
      borderRadius: "15px",
      "@media (max-width: 600px)": {
        maxWidth: "100%",
      },
    },
  },
}));

const PaginateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  margin: theme.spacing(2),
}));

const Home = () => {
  // State and Redux setup
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { movies, isFetching } = useSelector(
    (state) => state.fetchMoviesReducer
  );

  // Fetch movies on page change
  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  // Handle page change
  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Header />
      <ContainerBox container spacing={4}>
        {isFetching ? (
          <Box
            data-testid="loading-spinner"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="85vh"
            width="100%"
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          movies?.results?.map((movie) => (
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
          ))
        )}
      </ContainerBox>
      {movies?.total_pages > 1 && (
        <PaginateBox>
          <Pagination
            data-testid="pagination"
            variant="outlined"
            page={currentPage}
            count={movies.total_pages}
            onChange={handlePageChange}
          />
        </PaginateBox>
      )}
    </>
  );
};

export default Home;
