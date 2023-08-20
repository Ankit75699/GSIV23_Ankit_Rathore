import React from "react";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useParams } from "react-router-dom";
import {
  AppBarBox,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HeaderStyle";

export const HeaderConditionalRender = ({ params, onChangeHandler }) => {
  const isMovieDetailsPage = !!params?.id;

  return (
    <AppBarBox position="static">
      <Toolbar>
        {isMovieDetailsPage ? (
          <Typography data-testid="movie-details" variant="h6">
            Movie Details
          </Typography>
        ) : (
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ zIndex: 10 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => onChangeHandler(event.target.value)}
            />
          </Search>
        )}

        <Box sx={{ flexGrow: 1 }} />
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <IconButton edge="end" aria-label="home" color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBarBox>
  );
};

const Header = ({ onChangeHandler }) => {
  const params = useParams();

  return (
    <HeaderConditionalRender
      params={params}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default Header;
