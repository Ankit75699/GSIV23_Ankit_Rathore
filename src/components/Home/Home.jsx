import React, { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovies } from "../../redux/Actions/action";
import Header from "../Header/Header";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import useDebounce from "../../hooks/useDebounce";
import MovieList from "./MovieList";

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
    "&:hover": {
      scale: "1.1",
      transform: "all 1s",
    },
  },
}));

const PaginateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  margin: theme.spacing(2),
}));

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState(null);
  const dispatch = useDispatch();
  const {
    movies: { results, total_pages },
    isFetching,
  } = useSelector((state) => state.fetchMoviesReducer);

  const [debouncedSearch] = useDebounce(searchInput, setCurrentPage);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(searchMovies(debouncedSearch, currentPage));
      return;
    }

    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage, debouncedSearch]);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const onChangeHandler = (value) => {
    setSearchInput(value);
  };

  const renderContent = () => {
    if (isFetching) {
      return (
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
      );
    }

    return <MovieList movies={results} />;
  };

  return (
    <>
      <Header onChangeHandler={onChangeHandler} />
      <ContainerBox container spacing={4}>
        {renderContent()}
      </ContainerBox>
      {total_pages > 1 && (
        <PaginateBox>
          <Pagination
            data-testid="pagination"
            variant="outlined"
            page={currentPage}
            count={total_pages}
            onChange={handlePageChange}
          />
        </PaginateBox>
      )}
    </>
  );
};

export default Home;
