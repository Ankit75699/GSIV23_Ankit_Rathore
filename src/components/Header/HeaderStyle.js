import { AppBar, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#e1e1e1",
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#DFDFDF",
  "& path": {
    fill: "grey",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "350px",
    backgroundColor: "#DFDFDF",
    [theme.breakpoints.down("md")]: {
      width: "280px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "170px",
    },
  },
}));

export const AppBarBox = styled(AppBar)(() => ({
  backgroundColor: "#fff",
  color: "#000",
}));
