import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBox = styled(Grid)(({ theme }) => ({
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

export const PaginateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  margin: theme.spacing(2),
}));
