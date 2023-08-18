import React from "react";
import { Box, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBarBox,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HeaderStyle";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarBox position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarBox>
    </Box>
  );
};

export default Header;
