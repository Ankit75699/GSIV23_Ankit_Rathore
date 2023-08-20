import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovies } from "../../redux/Actions/action";
import Header from "../Header/Header";
import Pagination from "@mui/material/Pagination";
import useDebounce from "../../hooks/useDebounce";
import MovieList from "./MovieList";
import { ContainerBox, PaginateBox } from "./HomeStyles";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState(null);
  const dispatch = useDispatch();
  const {
    movies: { results, total_pages },
    isFetching,
    error,
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

    if (error) {
      return <h1>Something went wrong</h1>;
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
            count={total_pages > 500 ? 500 : total_pages}
            onChange={handlePageChange}
          />
        </PaginateBox>
      )}
    </>
  );
};

export default Home;
